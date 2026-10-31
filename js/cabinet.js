/* ==========================================================================
   User Cabinet & 5 Roles Dynamic Interface Module
   (Matching Image 1 & Image 2 - Neumorphism Edition)
   ========================================================================== */

import { store } from './store.js';
import { showToast, openModal, closeModal } from './ui.js';
import { handleRoute } from './router.js';

export function initCabinetModule() {
  renderUserCabinetWindow();
  setupRoleSwitcherMenu();
  setupHomeworkEvents();
  setupMentorGradingEvents();
}

/**
 * Render the 5 Role Cards in User Cabinet (Matching Image 1)
 */
export function renderUserCabinetWindow() {
  const container = document.getElementById('roles-grid-container');
  if (!container) return;

  const currentRole = store.getCurrentRole();
  const allRoles = store.getAllRoles();

  // 5 Roles: Guest, Student, Mentor, Admin, Blocked (in order from Image 1)
  const roleOrder = ['guest', 'student', 'mentor', 'admin', 'blocked'];

  const roleIcons = {
    guest: `<svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    student: `<svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    mentor: `<svg viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>`,
    admin: `<svg viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>`,
    blocked: `<svg viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><line x1="8" y1="15" x2="16" y2="15"/></svg>`
  };

  container.innerHTML = roleOrder.map(key => {
    const r = allRoles[key];
    const isActive = key === currentRole;
    return `
      <div class="role-card ${isActive ? 'active' : ''}" data-role="${key}" role="button" tabindex="0">
        <div class="role-icon-box">
          ${roleIcons[key]}
        </div>
        <div class="role-card-title">${r.roleLabel}</div>
        <div class="role-card-desc">${r.roleTitle}</div>
        <span class="role-card-status ${r.badgeClass}">
          ${isActive ? 'Active Now' : 'Select Role'}
        </span>
      </div>
    `;
  }).join('');

  // Click listener on role cards
  container.querySelectorAll('.role-card').forEach(card => {
    card.addEventListener('click', () => {
      const selectedRole = card.dataset.role;
      switchActiveRole(selectedRole);
    });
  });

  // Render role-specific interface panels
  renderRolePanels(currentRole);
}

/**
 * Switch Active Role
 */
export function switchActiveRole(roleId) {
  const roleData = store.setCurrentRole(roleId);
  showToast('Rol almashtirildi', `Faol rol: ${roleData.roleLabel} (${roleData.roleTitle})`, 'success');
  
  // Re-render cabinet
  renderUserCabinetWindow();
  updateTopbarRoleDisplay();
  
  // Update sidebar visibility based on permissions
  applyRolePermissions(roleId);

  // If blocked, redirect to cabinet to display restriction
  if (roleId === 'blocked') {
    window.location.hash = '#cabinet';
    handleRoute();
  }
}

/**
 * Update Topbar Role Pill & Dropdown
 */
export function updateTopbarRoleDisplay() {
  const rolePill = document.getElementById('current-role-badge');
  const roleName = document.getElementById('current-role-text');
  const roleDetails = store.getRoleDetails();

  if (rolePill) {
    rolePill.className = `role-badge-tag ${roleDetails.badgeClass}`;
    rolePill.textContent = roleDetails.roleLabel;
  }
  if (roleName) {
    roleName.textContent = roleDetails.name;
  }
}

/**
 * Setup Topbar Role Switcher Dropdown
 */
function setupRoleSwitcherMenu() {
  const menu = document.getElementById('role-menu-dropdown');
  const triggerBtn = document.getElementById('role-switcher-btn');
  const allRoles = store.getAllRoles();

  if (!menu) return;

  menu.innerHTML = Object.keys(allRoles).map(key => {
    const r = allRoles[key];
    return `
      <div class="dropdown-item" data-switch-role="${key}">
        <span class="badge ${r.badgeClass}" style="min-width: 65px; justify-content: center;">${r.roleLabel}</span>
        <div>
          <div style="font-weight: 600; font-size: 13px;">${r.name}</div>
          <div style="font-size: 11px; color: var(--muted);">${r.roleTitle}</div>
        </div>
      </div>
    `;
  }).join('');

  menu.querySelectorAll('[data-switch-role]').forEach(item => {
    item.addEventListener('click', () => {
      const role = item.dataset.switchRole;
      menu.classList.remove('active');
      switchActiveRole(role);
    });
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('active');
    });
  }

  updateTopbarRoleDisplay();
}

/**
 * Apply role-based visibility to sidebar and actions
 */
export function applyRolePermissions(roleId) {
  const role = store.getRoleDetails(roleId);
  const perms = role.permissions || [];

  const navDashboard = document.getElementById('nav-dashboard');
  const navStudents = document.getElementById('nav-students');
  const navCourses = document.getElementById('nav-courses');
  const navAnalytics = document.getElementById('nav-analytics');
  const navSettings = document.getElementById('nav-settings');
  const navCabinet = document.getElementById('nav-cabinet');

  if (navDashboard) navDashboard.style.display = perms.includes('dashboard') ? 'flex' : 'none';
  if (navStudents) navStudents.style.display = perms.includes('students') ? 'flex' : 'none';
  if (navCourses) navCourses.style.display = perms.includes('courses') ? 'flex' : 'none';
  if (navAnalytics) navAnalytics.style.display = perms.includes('analytics') ? 'flex' : 'none';
  if (navSettings) navSettings.style.display = perms.includes('settings') ? 'flex' : 'none';
  if (navCabinet) navCabinet.style.display = 'flex';
}

/**
 * Render role-specific interface panels (Student, Mentor, Guest, Blocked)
 */
function renderRolePanels(currentRole) {
  const studentPanel = document.getElementById('panel-student-role');
  const mentorPanel = document.getElementById('panel-mentor-role');
  const guestPanel = document.getElementById('panel-guest-role');
  const blockedPanel = document.getElementById('panel-blocked-role');
  const adminPanel = document.getElementById('panel-admin-role');

  if (studentPanel) studentPanel.style.display = currentRole === 'student' ? 'block' : 'none';
  if (mentorPanel) mentorPanel.style.display = currentRole === 'mentor' ? 'block' : 'none';
  if (guestPanel) guestPanel.style.display = currentRole === 'guest' ? 'block' : 'none';
  if (blockedPanel) blockedPanel.style.display = currentRole === 'blocked' ? 'block' : 'none';
  if (adminPanel) adminPanel.style.display = currentRole === 'admin' ? 'block' : 'none';

  if (currentRole === 'student') renderStudentHomework();
  if (currentRole === 'mentor') renderMentorSubmissions();
}

/**
 * Render Student "Uyga vazifalar" (Homework List matching Image 2)
 */
function renderStudentHomework() {
  const container = document.getElementById('student-homework-list');
  if (!container) return;

  const homework = store.getHomework();

  container.innerHTML = homework.map(hw => {
    const isDone = hw.status === 'Completed';
    const isReview = hw.status === 'Under Review';
    const statusBadge = isDone 
      ? '<span class="badge badge-active"><span class="badge-dot"></span>Bajarildi</span>'
      : isReview
      ? '<span class="badge badge-completed"><span class="badge-dot"></span>Tekshiruvda</span>'
      : '<span class="badge badge-paused"><span class="badge-dot"></span>Jarayonda</span>';

    return `
      <div class="homework-item">
        <div class="homework-left">
          <div class="homework-checkbox">
            ${isDone ? '✓' : isReview ? '⏳' : '○'}
          </div>
          <div>
            <div class="homework-title">${hw.title}</div>
            <div class="homework-course">Kurs: ${hw.course} &bull; Muddat: ${hw.deadline}</div>
            ${hw.score ? `<div style="font-size: 11px; color: var(--success); font-weight: 600; margin-top: 3px;">Baholandi: ${hw.score}</div>` : ''}
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 6px;">
          ${statusBadge}
          ${!isDone ? `<button class="btn btn-secondary" style="font-size: 11px; padding: 4px 10px;" data-submit-hw="${hw.id}">Topshirish</button>` : ''}
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('[data-submit-hw]').forEach(btn => {
    btn.addEventListener('click', () => {
      const hwId = btn.dataset.submitHw;
      openSubmitHomeworkModal(hwId);
    });
  });
}

/**
 * Render Mentor Submissions to review
 */
function renderMentorSubmissions() {
  const container = document.getElementById('mentor-submissions-list');
  if (!container) return;

  const submissions = store.getSubmissions();

  container.innerHTML = submissions.map(sub => {
    const isDone = sub.status === 'Reviewed';
    return `
      <div class="homework-item">
        <div class="homework-left">
          <div class="avatar-circle" style="width: 34px; height: 34px; font-size: 12px; background: linear-gradient(135deg, #3b82f6, #9333ea);">
            ${sub.studentName.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <div class="homework-title">${sub.studentName} — ${sub.task}</div>
            <div class="homework-course">Kurs: ${sub.course} &bull; Yuborildi: ${sub.date}</div>
            ${sub.githubUrl ? `<a href="${sub.githubUrl}" target="_blank" style="font-size: 11px; color: #60a5fa; text-decoration: underline;">Topshiriq havolasini ko'rish &rarr;</a>` : ''}
          </div>
        </div>
        <div>
          ${isDone 
            ? `<span class="badge badge-active">Baholangan (${sub.score})</span>`
            : `<button class="btn btn-primary" style="font-size: 11px; padding: 4px 12px;" data-grade-sub="${sub.id}">Baholash</button>`
          }
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('[data-grade-sub]').forEach(btn => {
    btn.addEventListener('click', () => {
      openGradeModal(btn.dataset.gradeSub);
    });
  });
}

/**
 * Open Submit Homework Modal
 */
function openSubmitHomeworkModal(hwId) {
  const hw = store.getHomework().find(h => h.id === hwId);
  const titleEl = document.getElementById('submit-hw-title');
  const inputId = document.getElementById('submit-hw-id');

  if (titleEl && hw) titleEl.textContent = hw.title;
  if (inputId) inputId.value = hwId;

  openModal('modal-submit-homework');
}

/**
 * Open Grade Modal
 */
function openGradeModal(subId) {
  const sub = store.getSubmissions().find(s => s.id === subId);
  const studentEl = document.getElementById('grade-student-name');
  const inputId = document.getElementById('grade-sub-id');

  if (studentEl && sub) studentEl.textContent = `${sub.studentName} - ${sub.task}`;
  if (inputId) inputId.value = subId;

  openModal('modal-grade-homework');
}

/**
 * Setup homework submission form listeners
 */
function setupHomeworkEvents() {
  const form = document.getElementById('submit-homework-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const hwId = document.getElementById('submit-hw-id').value;
      const url = document.getElementById('submit-hw-url').value;
      const note = document.getElementById('submit-hw-note').value;

      store.submitHomework(hwId, { url, note });
      showToast('Uyga vazifa topshirildi!', 'Vazifa tekshirish uchun ustozingizga yuborildi.', 'success');
      closeModal('modal-submit-homework');
      renderStudentHomework();
    });
  }
}

/**
 * Setup mentor grading form listeners
 */
function setupMentorGradingEvents() {
  const form = document.getElementById('grade-homework-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const subId = document.getElementById('grade-sub-id').value;
      const score = document.getElementById('grade-score').value;
      const feedback = document.getElementById('grade-feedback').value;

      store.gradeSubmission(subId, score, feedback);
      showToast('Baholandi!', `Topshiriq muvaffaqiyatli ${score} ball bilan baholandi.`, 'success');
      closeModal('modal-grade-homework');
      renderMentorSubmissions();
    });
  }
}

