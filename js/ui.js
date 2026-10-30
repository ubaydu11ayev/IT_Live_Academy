/* ==========================================================================
   UI Helpers & Interaction Components
   (Modals, Toasts, Dropdowns, Sidebar, Count-Up Animations)
   ========================================================================== */

/**
 * Animate numbers counting up smoothly
 */
export function animateCountUp(element, targetValue, duration = 1200, prefix = '', suffix = '') {
  if (!element) return;
  const start = 0;
  const startTime = performance.now();
  const isFloat = String(targetValue).includes('.');

  function updateNumber(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out quad
    const easeProgress = 1 - (1 - progress) * (1 - progress);
    const current = start + (targetValue - start) * easeProgress;

    const formatted = isFloat 
      ? current.toFixed(1) 
      : Math.floor(current).toLocaleString('en-US');

    element.textContent = `${prefix}${formatted}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    } else {
      const finalFormatted = isFloat 
        ? targetValue.toFixed(1) 
        : targetValue.toLocaleString('en-US');
      element.textContent = `${prefix}${finalFormatted}${suffix}`;
    }
  }

  requestAnimationFrame(updateNumber);
}

/**
 * Display toast alert notification
 */
export function showToast(title, message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.setAttribute('role', 'alert');

  let iconSvg = '';
  if (type === 'success') {
    iconSvg = `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;
  } else if (type === 'error') {
    iconSvg = `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`;
  } else {
    iconSvg = `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
  }

  toast.innerHTML = `
    ${iconSvg}
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-message">${message}</div>
    </div>
    <button class="toast-close" aria-label="Close notification">&times;</button>
  `;

  container.appendChild(toast);

  // Force reflow for CSS transition
  void toast.offsetWidth;
  toast.classList.add('show');

  const closeBtn = toast.querySelector('.toast-close');
  const removeToast = () => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 250);
  };

  closeBtn.addEventListener('click', removeToast);

  // Auto dismiss after 3.2s
  setTimeout(removeToast, 3200);
}

/**
 * Modal Management
 */
export function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    const firstInput = modal.querySelector('input:not([type="hidden"]), select, textarea, button.btn-primary');
    if (firstInput) firstInput.focus();
    document.body.style.overflow = 'hidden';
  }
}

export function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

/**
 * Generic Confirm Dialog Modal Helper
 */
export function showConfirmModal({ title, message, confirmText = 'Confirm', confirmType = 'danger', onConfirm }) {
  const modal = document.getElementById('modal-confirm');
  if (!modal) return;

  const titleEl = document.getElementById('confirm-modal-title');
  const msgEl = document.getElementById('confirm-modal-message');
  const btnEl = document.getElementById('confirm-modal-btn');

  if (titleEl) titleEl.textContent = title;
  if (msgEl) msgEl.textContent = message;
  if (btnEl) {
    btnEl.textContent = confirmText;
    btnEl.className = `btn btn-${confirmType}`;
    // Replace with fresh clone to drop old event listeners
    const freshBtn = btnEl.cloneNode(true);
    btnEl.parentNode.replaceChild(freshBtn, btnEl);
    freshBtn.addEventListener('click', () => {
      closeModal('modal-confirm');
      if (typeof onConfirm === 'function') onConfirm();
    });
  }

  openModal('modal-confirm');
}

/**
 * Setup Global UI Listeners (Dropdowns, ESC key, Sidebar)
 */
export function setupUIListeners() {
  // Mobile sidebar hamburger
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebar-overlay');

  const toggleSidebar = () => {
    if (!sidebar) return;
    const isOpen = sidebar.classList.toggle('open');
    if (sidebarOverlay) {
      sidebarOverlay.classList.toggle('active', isOpen);
    }
  };

  const closeSidebar = () => {
    if (sidebar) sidebar.classList.remove('open');
    if (sidebarOverlay) sidebarOverlay.classList.remove('active');
  };

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', toggleSidebar);
  if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

  // Close sidebar on link click (mobile)
  document.querySelectorAll('.sidebar .nav-item').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) {
        closeSidebar();
      }
    });
  });

  // Notifications dropdown toggle
  const notifBtn = document.getElementById('notifications-btn');
  const notifDropdown = document.getElementById('notifications-dropdown');

  if (notifBtn && notifDropdown) {
    notifBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = notifDropdown.classList.toggle('active');
      closeAllDropdowns(notifDropdown);
    });
  }

  // User Profile dropdown toggle
  const userBtn = document.getElementById('user-menu-btn');
  const userDropdown = document.getElementById('user-dropdown');

  if (userBtn && userDropdown) {
    userBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      userDropdown.classList.toggle('active');
      closeAllDropdowns(userDropdown);
    });
  }

  // Click outside closes dropdowns
  window.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown-wrapper')) {
      closeAllDropdowns();
    }
  });

  // Modal dismiss buttons
  document.querySelectorAll('[data-dismiss="modal"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal-backdrop');
      if (modal) closeModal(modal.id);
    });
  });

  // Backdrop click dismiss
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal.id);
      }
    });
  });

  // Global ESC key listener
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllDropdowns();
      const activeModal = document.querySelector('.modal-backdrop.active');
      if (activeModal) closeModal(activeModal.id);
    }
  });
}

function closeAllDropdowns(except = null) {
  document.querySelectorAll('.dropdown-menu').forEach(menu => {
    if (menu !== except) {
      menu.classList.remove('active');
    }
  });
}

