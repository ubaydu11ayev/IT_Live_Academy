/* ==========================================================================
   SPA Hash Router
   IT LIVE Academy Admin Dashboard
   ========================================================================== */

import { store } from './store.js';
import { animateCountUp } from './ui.js';
import { initDashboardCharts, initAnalyticsCharts } from './charts.js';
import { renderStudentsTable, populateCourseOptions } from './students.js';
import { renderCoursesGrid } from './courses.js';

const ROUTES = {
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
  // Initial route handle
  handleRoute();
}

/**
 * Handle route transition
 */
export function handleRoute() {
  let hash = window.location.hash || '#dashboard';
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

  // 5. Invoke route enter hook
  if (typeof routeConfig.onEnter === 'function') {
    routeConfig.onEnter();
  }
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

  // Render Charts
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
  if (emailInput) emailInput.value = user.email;
  if (roleInput) roleInput.value = user.role;
  if (avatarInitials) avatarInitials.textContent = user.initials || 'IT';

  // Highlight active theme card
  document.querySelectorAll('.theme-card').forEach(card => {
    if (card.dataset.theme === theme) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
}

