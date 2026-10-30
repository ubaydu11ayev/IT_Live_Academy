/* ==========================================================================
   Application Entrypoint (Neumorphic & 5 Roles Edition)
   IT LIVE Academy Admin Dashboard
   ========================================================================== */

import { store } from './store.js';
import { setupUIListeners, showToast, showConfirmModal } from './ui.js';
import { initRouter, handleRoute } from './router.js';
import { initStudentsModule, renderStudentsTable } from './students.js';
import { initCoursesModule, renderCoursesGrid } from './courses.js';
import { refreshAllCharts, initAnalyticsCharts } from './charts.js';
import { initCabinetModule, switchActiveRole, updateTopbarRoleDisplay, applyRolePermissions } from './cabinet.js';

document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

function initializeApp() {
  // 1. Apply persisted theme
  const currentTheme = store.getTheme();
  document.documentElement.setAttribute('data-theme', currentTheme);

  // 2. Setup UI components and global listeners
  setupUIListeners();

  // 3. Initialize feature modules
  initCabinetModule();
  initStudentsModule();
  initCoursesModule();
  setupSettingsModule();
  setupAnalyticsModule();
  setupNotifications();
  setupUserDisplay();
  setupAuth();

  // 4. Initialize Hash Router
  initRouter();

  // 5. Global store change reactivity
  window.addEventListener('store-change', handleStoreChange);
}

/**
 * Sync UI when store changes (CRUD actions, theme, role, reset)
 */
function handleStoreChange(e) {
  const { key } = e.detail;
  if (key === 'students' || key === 'courses' || key === 'reset') {
    if (window.location.hash === '#students') {
      renderStudentsTable();
    } else if (window.location.hash === '#courses') {
      renderCoursesGrid();
    } else if (window.location.hash === '#dashboard') {
      handleRoute();
    }
  } else if (key === 'user' || key === 'role') {
    setupUserDisplay();
    updateTopbarRoleDisplay();
    applyRolePermissions(store.getCurrentRole());
  } else if (key === 'theme') {
    refreshAllCharts();
  }
}

/**
 * Setup user topbar information
 */
function setupUserDisplay() {
  const user = store.getUser();
  const userNameEl = document.getElementById('topbar-user-name');
  const userRoleEl = document.getElementById('topbar-user-role');
  const userAvatarEl = document.getElementById('topbar-user-avatar');

  if (userNameEl) userNameEl.textContent = user.name;
  if (userRoleEl) userRoleEl.textContent = user.roleTitle || user.role || 'Administrator';
  if (userAvatarEl) userAvatarEl.textContent = user.avatar || user.initials || 'AQ';
}

/**
 * Setup Notification dropdown & badge
 */
function setupNotifications() {
  const listContainer = document.getElementById('notification-list');
  const badgeDot = document.getElementById('notification-badge-dot');
  const markReadBtn = document.getElementById('mark-notifications-read-btn');

  const renderNotifs = () => {
    const notifs = store.getNotifications();
    const hasUnread = notifs.some(n => !n.read);

    if (badgeDot) {
      badgeDot.style.display = hasUnread ? 'block' : 'none';
    }

    if (!listContainer) return;

    if (notifs.length === 0) {
      listContainer.innerHTML = '<li style="padding: 16px; text-align: center; color: var(--muted); font-size: 13px;">Xabarlar mavjud emas.</li>';
      return;
    }

    listContainer.innerHTML = notifs.map(n => `
      <li class="notification-item">
        <div class="notification-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
        </div>
        <div>
          <div class="notification-text"><strong>${escapeHtml(n.title)}:</strong> ${escapeHtml(n.message)}</div>
          <div class="notification-time">${escapeHtml(n.time)}</div>
        </div>
      </li>
    `).join('');
  };

  renderNotifs();

  if (markReadBtn) {
    markReadBtn.addEventListener('click', () => {
      store.markAllNotificationsRead();
      renderNotifs();
      showToast('Xabarnomalar', 'Barcha xabarlar o\'qildi deb belgilandi.', 'info');
    });
  }
}

/**
 * Setup Settings view interactions (Profile, Theme, Reset Demo Data)
 */
function setupSettingsModule() {
  const profileForm = document.getElementById('profile-settings-form');
  const themeCards = document.querySelectorAll('.theme-card');
  const resetBtn = document.getElementById('reset-demo-data-btn');

  if (profileForm) {
    profileForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('settings-name-input').value.trim();
      const email = document.getElementById('settings-email-input').value.trim();
      const roleTitle = document.getElementById('settings-role-input').value.trim();

      if (!name) {
        showToast('Xatolik', 'Iltimos, ismingizni kiriting.', 'error');
        return;
      }

      store.saveUser({ name, email, roleTitle });
      setupUserDisplay();
      showToast('Muvaffaqiyatli', 'Profil ma\'lumotlari saqlandi!', 'success');
    });
  }

  themeCards.forEach(card => {
    card.addEventListener('click', () => {
      const selectedTheme = card.dataset.theme;
      themeCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      store.setTheme(selectedTheme);
      showToast('Mavzu o\'zgardi', `${selectedTheme === 'dark' ? 'Dark Navy Neumorphism' : 'Soft Light Neumorphism'} faollashtirildi.`, 'info');
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      showConfirmModal({
        title: 'Demo ma\'lumotlarni tiklash',
        message: 'Barcha talabalar, kurslar, uyga vazifalar va rollar boshlang\'ich holatga qaytariladi. Davom etasizmi?',
        confirmText: 'Tiklash',
        confirmType: 'danger',
        onConfirm: () => {
          store.resetDemoData();
          showToast('Tiklandi', 'Tizim boshlang\'ich holatga qaytarildi.', 'success');
          window.location.hash = '#dashboard';
          handleRoute();
        }
      });
    });
  }
}

/**
 * Setup Analytics View (Date Range Pill Buttons)
 */
function setupAnalyticsModule() {
  const pills = document.querySelectorAll('.date-range-pills .pill-btn');
  pills.forEach(btn => {
    btn.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const days = parseInt(btn.dataset.days, 10);
      initAnalyticsCharts(days);
      showToast('Analitika', `So'nggi ${days} kunlik ma'lumotlar yuklandi.`, 'info');
    });
  });
}

/**
 * Setup Authentication, Quick Role Login & Logout Flows
 */
function setupAuth() {
  const loginScreen = document.getElementById('login-screen');
  const loginForm = document.getElementById('login-form');
  const logoutButtons = document.querySelectorAll('[data-action="logout"]');

  const checkAuth = () => {
    const isAuth = store.getAuth();
    if (!isAuth) {
      if (loginScreen) loginScreen.classList.add('visible');
    } else {
      if (loginScreen) loginScreen.classList.remove('visible');
    }
  };

  checkAuth();

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value.trim();
      const password = document.getElementById('login-password').value;

      if (!email || !password || password.length < 4) {
        showToast('Kirishda xatolik', 'Email va parolni to\'g\'ri kiriting (kamida 4 ta belgi).', 'error');
        return;
      }

      store.setAuth(true);
      checkAuth();
      showToast('Xush kelibsiz', 'IT LIVE Academy tizimiga muvaffaqiyatli kirdingiz.', 'success');
      window.location.hash = '#dashboard';
      handleRoute();
    });
  }

  // Quick Role Logins (Guest, Student, Mentor, Admin, Blocked)
  document.querySelectorAll('[data-quick-role]').forEach(btn => {
    btn.addEventListener('click', () => {
      const role = btn.dataset.quickRole;
      store.setAuth(true);
      switchActiveRole(role);
      checkAuth();
      showToast('Kirish muvaffaqiyatli', `${btn.textContent.trim()} sifatida tizimga kirdingiz.`, 'success');
      window.location.hash = role === 'admin' ? '#dashboard' : '#cabinet';
      handleRoute();
    });
  });

  logoutButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showConfirmModal({
        title: 'Tizimdan chiqish',
        message: 'Haqiqatan ham IT LIVE Academy tizimidan chiqmoqchimisiz?',
        confirmText: 'Chiqish',
        confirmType: 'danger',
        onConfirm: () => {
          store.setAuth(false);
          checkAuth();
          showToast('Chiqildi', 'Tizimdan chiqdingiz.', 'info');
        }
      });
    });
  });
}

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
