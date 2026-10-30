/* ==========================================================================
   Students Management Module (CRUD, Filter, Search, Pagination)
   IT LIVE Academy Admin Dashboard
   ========================================================================== */

import { store } from './store.js';
import { openModal, closeModal, showConfirmModal, showToast } from './ui.js';

let currentPage = 1;
const ITEMS_PER_PAGE = 8;
let studentSearchQuery = '';
let statusFilter = 'All';
let sortBy = 'newest';
let editingStudentId = null;

/**
 * Initialize Students module event listeners
 */
export function initStudentsModule() {
  const searchInput = document.getElementById('student-search');
  const statusSelect = document.getElementById('student-status-filter');
  const sortSelect = document.getElementById('student-sort');
  const addBtn = document.getElementById('add-student-btn');
  const form = document.getElementById('student-form');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      studentSearchQuery = e.target.value.trim().toLowerCase();
      currentPage = 1;
      renderStudentsTable();
    });
  }

  if (statusSelect) {
    statusSelect.addEventListener('change', (e) => {
      statusFilter = e.target.value;
      currentPage = 1;
      renderStudentsTable();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sortBy = e.target.value;
      renderStudentsTable();
    });
  }

  if (addBtn) {
    addBtn.addEventListener('click', () => {
      openAddStudentModal();
    });
  }

  if (form) {
    form.addEventListener('submit', handleStudentFormSubmit);
  }

  // Populate course options in student modal
  populateCourseOptions();

  // Render initial table
  renderStudentsTable();
}

/**
 * Populate course select options dynamically from store
 */
export function populateCourseOptions() {
  const courseSelect = document.getElementById('student-course-input');
  if (!courseSelect) return;

  const courses = store.getCourses();
  courseSelect.innerHTML = '<option value="">Select a course...</option>' +
    courses.map(c => `<option value="${escapeHtml(c.title)}">${escapeHtml(c.title)}</option>`).join('');
}

/**
 * Filter, sort, and paginate students
 */
function getFilteredAndSortedStudents() {
  let list = store.getStudents();

  // Search filter
  if (studentSearchQuery) {
    list = list.filter(s =>
      s.name.toLowerCase().includes(studentSearchQuery) ||
      s.email.toLowerCase().includes(studentSearchQuery) ||
      s.course.toLowerCase().includes(studentSearchQuery)
    );
  }

  // Status filter
  if (statusFilter !== 'All') {
    list = list.filter(s => s.status.toLowerCase() === statusFilter.toLowerCase());
  }

  // Sorting
  list.sort((a, b) => {
    if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
    if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
    if (sortBy === 'oldest') return new Date(a.joinDate) - new Date(b.joinDate);
    // default newest
    return new Date(b.joinDate) - new Date(a.joinDate);
  });

  return list;
}

/**
 * Render students data table
 */
export function renderStudentsTable() {
  const tbody = document.getElementById('students-table-body');
  const paginationInfo = document.getElementById('students-pagination-info');
  const paginationControls = document.getElementById('students-pagination-controls');
  if (!tbody) return;

  const filtered = getFilteredAndSortedStudents();
  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE) || 1;

  if (currentPage > totalPages) currentPage = totalPages;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);
  const currentBatch = filtered.slice(startIndex, endIndex);

  if (currentBatch.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 40px; color: var(--muted);">
          No students found matching your criteria.
        </td>
      </tr>
    `;
    if (paginationInfo) paginationInfo.textContent = 'Showing 0 of 0 students';
    if (paginationControls) paginationControls.innerHTML = '';
    return;
  }

  tbody.innerHTML = currentBatch.map(s => {
    const statusClass = s.status.toLowerCase() === 'active'
      ? 'badge-active'
      : s.status.toLowerCase() === 'completed'
      ? 'badge-completed'
      : 'badge-paused';

    return `
      <tr>
        <td>
          <div class="data-table-avatar">
            <div class="avatar-circle" style="background: ${s.avatarBg || 'linear-gradient(135deg, #2563eb, #1d4ed8)'};">
              ${escapeHtml(s.initials || 'ST')}
            </div>
            <div class="student-meta">
              <span class="student-name">${escapeHtml(s.name)}</span>
              <span class="student-email">${escapeHtml(s.email)}</span>
            </div>
          </div>
        </td>
        <td>
          <span style="font-weight: 500;">${escapeHtml(s.course)}</span>
        </td>
        <td>
          <span class="badge ${statusClass}">
            <span class="badge-dot"></span>
            ${escapeHtml(s.status)}
          </span>
        </td>
        <td>
          <span style="color: var(--muted); font-size: 13px;">${formatDate(s.joinDate)}</span>
        </td>
        <td style="text-align: right;">
          <div class="table-actions" style="justify-content: flex-end;">
            <button class="btn-icon" data-action="edit-student" data-id="${s.id}" title="Edit Student" aria-label="Edit Student ${escapeHtml(s.name)}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            </button>
            <button class="btn-icon btn-icon-danger" data-action="delete-student" data-id="${s.id}" title="Delete Student" aria-label="Delete Student ${escapeHtml(s.name)}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  // Attach action button clicks
  tbody.querySelectorAll('[data-action="edit-student"]').forEach(btn => {
    btn.addEventListener('click', () => openEditStudentModal(btn.dataset.id));
  });

  tbody.querySelectorAll('[data-action="delete-student"]').forEach(btn => {
    btn.addEventListener('click', () => confirmDeleteStudent(btn.dataset.id));
  });

  // Render pagination controls
  renderPagination(totalItems, totalPages, startIndex, endIndex);
}

/**
 * Render pagination numbers & prev/next
 */
function renderPagination(totalItems, totalPages, startIndex, endIndex) {
  const paginationInfo = document.getElementById('students-pagination-info');
  const paginationControls = document.getElementById('students-pagination-controls');

  if (paginationInfo) {
    paginationInfo.textContent = `Showing ${startIndex + 1} to ${endIndex} of ${totalItems} students`;
  }

  if (!paginationControls) return;

  let controlsHtml = `
    <button class="page-btn" id="prev-page-btn" ${currentPage === 1 ? 'disabled' : ''} aria-label="Previous page">
      &lsaquo;
    </button>
  `;

  for (let p = 1; p <= totalPages; p++) {
    controlsHtml += `
      <button class="page-btn ${p === currentPage ? 'active' : ''}" data-page="${p}">
        ${p}
      </button>
    `;
  }

  controlsHtml += `
    <button class="page-btn" id="next-page-btn" ${currentPage === totalPages ? 'disabled' : ''} aria-label="Next page">
      &rsaquo;
    </button>
  `;

  paginationControls.innerHTML = controlsHtml;

  const prevBtn = document.getElementById('prev-page-btn');
  const nextBtn = document.getElementById('next-page-btn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderStudentsTable();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++;
        renderStudentsTable();
      }
    });
  }

  paginationControls.querySelectorAll('[data-page]').forEach(btn => {
    btn.addEventListener('click', () => {
      currentPage = parseInt(btn.dataset.page, 10);
      renderStudentsTable();
    });
  });
}

/**
 * Open Modal to Add Student
 */
function openAddStudentModal() {
  editingStudentId = null;
  populateCourseOptions();
  const form = document.getElementById('student-form');
  const title = document.getElementById('student-modal-title');
  if (title) title.textContent = 'Add New Student';
  if (form) {
    form.reset();
    document.getElementById('student-id-input').value = '';
    document.getElementById('student-date-input').value = new Date().toISOString().split('T')[0];
  }
  openModal('modal-student');
}

/**
 * Open Modal to Edit Student
 */
function openEditStudentModal(id) {
  populateCourseOptions();
  const student = store.getStudents().find(s => s.id === id);
  if (!student) return;

  editingStudentId = id;
  const title = document.getElementById('student-modal-title');
  if (title) title.textContent = 'Edit Student Details';

  document.getElementById('student-id-input').value = student.id;
  document.getElementById('student-name-input').value = student.name;
  document.getElementById('student-email-input').value = student.email;
  document.getElementById('student-course-input').value = student.course;
  document.getElementById('student-status-input').value = student.status;
  document.getElementById('student-date-input').value = student.joinDate;

  openModal('modal-student');
}

/**
 * Handle Add/Edit Student Form Submission with Validation
 */
function handleStudentFormSubmit(e) {
  e.preventDefault();

  const nameInput = document.getElementById('student-name-input');
  const emailInput = document.getElementById('student-email-input');
  const courseInput = document.getElementById('student-course-input');
  const statusInput = document.getElementById('student-status-input');
  const dateInput = document.getElementById('student-date-input');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const course = courseInput.value.trim();
  const status = statusInput.value;
  const joinDate = dateInput.value || new Date().toISOString().split('T')[0];

  // Validation
  if (!name || name.length < 2) {
    showToast('Validation Error', 'Please enter a valid student name (at least 2 characters).', 'error');
    nameInput.focus();
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    showToast('Validation Error', 'Please enter a valid email address.', 'error');
    emailInput.focus();
    return;
  }

  if (!course) {
    showToast('Validation Error', 'Please select an enrolled course.', 'error');
    courseInput.focus();
    return;
  }

  if (editingStudentId) {
    // Update existing
    store.updateStudent(editingStudentId, { name, email, course, status, joinDate });
    showToast('Success', `Student "${name}" updated successfully.`, 'success');
  } else {
    // Add new
    store.addStudent({ name, email, course, status, joinDate });
    showToast('Success', `Student "${name}" registered successfully.`, 'success');
  }

  closeModal('modal-student');
  renderStudentsTable();
}

/**
 * Confirm and delete student
 */
function confirmDeleteStudent(id) {
  const student = store.getStudents().find(s => s.id === id);
  if (!student) return;

  showConfirmModal({
    title: 'Delete Student',
    message: `Are you sure you want to permanently remove "${student.name}" from IT LIVE Academy? This action cannot be undone.`,
    confirmText: 'Delete Student',
    confirmType: 'danger',
    onConfirm: () => {
      store.deleteStudent(id);
      showToast('Student Removed', `Student "${student.name}" has been deleted.`, 'info');
      renderStudentsTable();
    }
  });
}

/**
 * Utility: Format ISO date string to friendly readable format
 */
function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
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
