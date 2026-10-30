/* ==========================================================================
   Application Entrypoint
   IT LIVE Academy Admin Dashboard
   ========================================================================== */

import { store } from './store.js';
import { setupUIListeners, showToast, showConfirmModal, openModal, closeModal } from './ui.js';
import { initRouter, handleRoute } from './router.js';
import { initStudentsModule, renderStudentsTable } from './students.js';
import { initCoursesModule, renderCoursesGrid } from './courses.js';
import { refreshAllCharts, initAnalyticsCharts } from './charts.js';

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
 * Sync UI when store changes (CRUD actions, theme, reset)
 */
function handleStoreChange(e) {
  const { key } = e.detail;
  if (key === 'students' || key === 'courses' || key === 'reset') {
    // If on students or courses page, re-render
    if (window.location.hash === '#students') {
      renderStudentsTable();
    } else if (window.location.hash === '#courses') {
      renderCoursesGrid();
    } else if (window.location.hash === '#dashboard') {
      handleRoute();
    }
  } else if (key === 'user') {
    setupUserDisplay();
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
  if (userRoleEl) userRoleEl.textContent = user.role;
  if (userAvatarEl) userAvatarEl.textContent = user.initials || 'AQ';
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
      listContainer.innerHTML = '<li style="padding: 16px; text-align: center; color: var(--muted); font-size: 13px;">No notifications.</li>';
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
      showToast('Notifications', 'All notifications marked as read.', 'info');
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

  // Profile Form
  if (profileForm) {
    profileForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('settings-name-input').value.trim();
      const email = document.getElementById('settings-email-input').value.trim();
      const role = document.getElementById('settings-role-input').value.trim();

      if (!name) {
        showToast('Error', 'Please enter your name.', 'error');
        return;
      }

      store.saveUser({ name, email, role });
      setupUserDisplay();
      showToast('Success', 'Profile settings updated successfully!', 'success');
    });
  }

  // Theme Toggles
  themeCards.forEach(card => {
    card.addEventListener('click', () => {
      const selectedTheme = card.dataset.theme;
      themeCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      store.setTheme(selectedTheme);
      showToast('Theme Changed', `Switched to ${selectedTheme} theme.`, 'info');
    });
  });

  // Reset Demo Data
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      showConfirmModal({
        title: 'Reset Demo Data',
        message: 'This will restore all students, courses, charts, and profile settings to the default IT LIVE Academy demo state. Continue?',
        confirmText: 'Reset Everything',
        confirmType: 'danger',
        onConfirm: () => {
          store.resetDemoData();
          showToast('Data Reset', 'All data has been reset to defaults.', 'success');
          // Reload view
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
      showToast('Analytics Updated', `Loaded analytics for last ${days} days.`, 'info');
    });
  });
}

/**
 * Setup Mock Authentication & Logout Flows
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

  // Check on boot
  checkAuth();

  // Login form submit
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value.trim();
      const password = document.getElementById('login-password').value;

      if (!email || !password || password.length < 4) {
        showToast('Authentication Error', 'Please enter a valid email and password (at least 4 characters).', 'error');
        return;
      }

      store.setAuth(true);
      checkAuth();
      showToast('Welcome Back', 'Logged in to IT LIVE Academy Dashboard.', 'success');
      window.location.hash = '#dashboard';
      handleRoute();
    });
  }

  // Logout triggers
  logoutButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showConfirmModal({
        title: 'Sign Out',
        message: 'Are you sure you want to log out of IT LIVE Academy admin dashboard?',
        confirmText: 'Log Out',
        confirmType: 'danger',
        onConfirm: () => {
          store.setAuth(false);
          checkAuth();
          showToast('Logged Out', 'You have been signed out.', 'info');
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

