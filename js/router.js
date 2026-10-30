/* ==========================================================================
   SPA Hash Router (Supporting 5 Roles & Neumorphism)
   IT LIVE Academy Admin Dashboard
   ========================================================================== */

import { store } from './store.js';
import { animateCountUp } from './ui.js';
import { initDashboardCharts, initAnalyticsCharts } from './charts.js';
import { renderStudentsTable, populateCourseOptions } from './students.js';
import { renderCoursesGrid } from './courses.js';
import { renderUserCabinetWindow, applyRolePermissions } from './cabinet.js';

const ROUTES = {
  '#cabinet': {
    title: 'User Cabinet',
    viewId: 'view-cabinet',
    onEnter: () => enterCabinetView()
  },
  '#dashboard': {
    title: 'Dashboard',
    viewId: 'view-dashboard',
    onEnter: () => enterDashboardView()
  },
  '#students': {
    title: 'Students',
    viewId: 'view-students',
    onEnter: () => enterStudentsView()
  },
  '#courses': {
    title: 'Courses',
    viewId: 'view-courses',
    onEnter: () => enterCoursesView()
  },
  '#analytics': {
    title: 'Analytics',
    viewId: 'view-analytics',
    onEnter: () => enterAnalyticsView()
  },
  '#settings': {
    title: 'Settings',
    viewId: 'view-settings',
    onEnter: () => enterSettingsView()
  }
};

/**
 * Initialize Router
 */
export function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}

/**
 * Handle route transition with role-based guard
 */
export function handleRoute() {
  let hash = window.location.hash || '#dashboard';
  const role = store.getCurrentRole();
  const roleData = store.getRoleDetails();

  // If role is blocked or guest without dashboard permission, direct to cabinet
  if (role === 'blocked' && hash !== '#cabinet') {
    window.location.hash = '#cabinet';
    return;
  }

  if (role === 'guest' && (hash === '#students' || hash === '#analytics' || hash === '#settings')) {
    window.location.hash = '#cabinet';
    return;
  }

  if (role === 'student' && (hash === '#students' || hash === '#analytics')) {
    window.location.hash = '#cabinet';
    return;
  }

  if (!ROUTES[hash]) {
    hash = '#dashboard';
    window.location.hash = '#dashboard';
    return;
  }

  const routeConfig = ROUTES[hash];

  // 1. Hide all page views, show target view
  document.querySelectorAll('.page-view').forEach(view => {
    view.style.display = 'none';
    view.classList.remove('active');
  });

  const activeView = document.getElementById(routeConfig.viewId);
  if (activeView) {
    activeView.style.display = 'block';
    activeView.classList.add('active');
  }

  // 2. Update navigation active state
  document.querySelectorAll('.sidebar .nav-item').forEach(item => {
    if (item.getAttribute('href') === hash) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // 3. Update topbar breadcrumb
  const breadcrumbEl = document.getElementById('current-page-title');
  if (breadcrumbEl) {
    breadcrumbEl.textContent = routeConfig.title;
  }

  // 4. Scroll to top of main content
  const mainContent = document.getElementById('main-content');
  if (mainContent) {
    mainContent.scrollTop = 0;
  }

  // 5. Apply permissions
  applyRolePermissions(role);

  // 6. Invoke route enter hook
  if (typeof routeConfig.onEnter === 'function') {
    routeConfig.onEnter();
  }
}

/**
 * User Cabinet View Hook
 */
function enterCabinetView() {
  renderUserCabinetWindow();
}

/**
 * Dashboard View Hook: Animate count-up & render charts
 */
function enterDashboardView() {
  const stats = store.getStats();

  const elStudents = document.getElementById('stat-students-value');
  const elCourses = document.getElementById('stat-courses-value');
  const elRevenue = document.getElementById('stat-revenue-value');
  const elCompletion = document.getElementById('stat-completion-value');

  if (elStudents) animateCountUp(elStudents, stats.totalStudents, 1000);
  if (elCourses) animateCountUp(elCourses, stats.totalCourses, 900);
  if (elRevenue) animateCountUp(elRevenue, stats.revenue, 1200, '$');
  if (elCompletion) animateCountUp(elCompletion, stats.completionRate, 900, '', '%');

  setTimeout(() => {
    initDashboardCharts();
  }, 50);
}

/**
 * Students View Hook
 */
function enterStudentsView() {
  populateCourseOptions();
  renderStudentsTable();
}

/**
 * Courses View Hook
 */
function enterCoursesView() {
  renderCoursesGrid();
}

/**
 * Analytics View Hook
 */
function enterAnalyticsView() {
  setTimeout(() => {
    initAnalyticsCharts(30);
  }, 50);
}

/**
 * Settings View Hook
 */
function enterSettingsView() {
  const user = store.getUser();
  const theme = store.getTheme();

  const nameInput = document.getElementById('settings-name-input');
  const emailInput = document.getElementById('settings-email-input');
  const roleInput = document.getElementById('settings-role-input');
  const avatarInitials = document.getElementById('settings-avatar-initials');

  if (nameInput) nameInput.value = user.name;
  if (emailInput) emailInput.value = user.email || `${user.id}@itlive.uz`;
  if (roleInput) roleInput.value = user.roleTitle;
  if (avatarInitials) avatarInitials.textContent = user.avatar || user.initials || 'IT';

  // Highlight active theme card
  document.querySelectorAll('.theme-card').forEach(card => {
    if (card.dataset.theme === theme) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
}
