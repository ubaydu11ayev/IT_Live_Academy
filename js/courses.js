/* ==========================================================================
   Courses Management Module (CRUD, Category Filter, Card Grid)
   IT LIVE Academy Admin Dashboard
   ========================================================================== */

import { store } from './store.js';
import { openModal, closeModal, showConfirmModal, showToast } from './ui.js';

let courseSearchQuery = '';
let activeCategory = 'All';
let editingCourseId = null;

/**
 * Initialize Courses module
 */
export function initCoursesModule() {
  const searchInput = document.getElementById('course-search');
  const categoryFilter = document.getElementById('course-category-filter');
  const addBtn = document.getElementById('add-course-btn');
  const form = document.getElementById('course-form');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      courseSearchQuery = e.target.value.trim().toLowerCase();
      renderCoursesGrid();
    });
  }

  if (categoryFilter) {
    categoryFilter.addEventListener('change', (e) => {
      activeCategory = e.target.value;
      renderCoursesGrid();
    });
  }

  if (addBtn) {
    addBtn.addEventListener('click', () => {
      openAddCourseModal();
    });
  }

  if (form) {
    form.addEventListener('submit', handleCourseFormSubmit);
  }

  renderCoursesGrid();
}

/**
 * Filter courses list
 */
function getFilteredCourses() {
  let list = store.getCourses();

  if (courseSearchQuery) {
    list = list.filter(c =>
      c.title.toLowerCase().includes(courseSearchQuery) ||
      c.instructor.toLowerCase().includes(courseSearchQuery) ||
      c.category.toLowerCase().includes(courseSearchQuery)
    );
  }

  if (activeCategory !== 'All') {
    list = list.filter(c => c.category.toLowerCase() === activeCategory.toLowerCase());
  }

  return list;
}

/**
 * Render responsive courses card grid
 */
export function renderCoursesGrid() {
  const grid = document.getElementById('courses-grid');
  const countEl = document.getElementById('courses-count-badge');
  if (!grid) return;

  const courses = getFilteredCourses();

  if (countEl) {
    countEl.textContent = `${courses.length} Courses`;
  }

  if (courses.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--muted);" class="card">
        <p style="font-size: 16px; font-weight: 500;">No courses found matching your search or category filter.</p>
        <button class="btn btn-secondary" style="margin-top: 14px;" id="reset-course-filter-btn">Clear Filters</button>
      </div>
    `;
    const resetBtn = document.getElementById('reset-course-filter-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        courseSearchQuery = '';
        activeCategory = 'All';
        const sInput = document.getElementById('course-search');
        const cSelect = document.getElementById('course-category-filter');
        if (sInput) sInput.value = '';
        if (cSelect) cSelect.value = 'All';
        renderCoursesGrid();
      });
    }
    return;
  }

  grid.innerHTML = courses.map(c => {
    const rate = Math.min(100, Math.max(0, Number(c.completionRate) || 80));
    return `
      <div class="card course-card">
        <div>
          <div class="course-header">
            <span class="badge badge-category">${escapeHtml(c.category)}</span>
            <div class="table-actions">
              <button class="btn-icon" data-action="edit-course" data-id="${c.id}" title="Edit Course" aria-label="Edit Course ${escapeHtml(c.title)}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </button>
              <button class="btn-icon btn-icon-danger" data-action="delete-course" data-id="${c.id}" title="Delete Course" aria-label="Delete Course ${escapeHtml(c.title)}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
              </button>
            </div>
          </div>

          <h3 class="course-title">${escapeHtml(c.title)}</h3>

          <div class="course-instructor">
            <div class="instructor-avatar">${escapeHtml(c.instructorInitials || 'IT')}</div>
            <span>Instructor: <strong>${escapeHtml(c.instructor)}</strong></span>
          </div>

          <div class="course-meta-row">
            <div class="course-students-count">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <span>${Number(c.studentsCount || 0).toLocaleString()} enrolled</span>
            </div>
            <div class="course-price">$${Number(c.price || 0)}</div>
          </div>
        </div>

        <div>
          <div class="progress-section">
            <div class="progress-info">
              <span>Avg. Completion</span>
              <strong>${rate}%</strong>
            </div>
            <div class="progress-track" role="progressbar" aria-valuenow="${rate}" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-fill" style="width: ${rate}%;"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Attach event listeners to card actions
  grid.querySelectorAll('[data-action="edit-course"]').forEach(btn => {
    btn.addEventListener('click', () => openEditCourseModal(btn.dataset.id));
  });

  grid.querySelectorAll('[data-action="delete-course"]').forEach(btn => {
    btn.addEventListener('click', () => confirmDeleteCourse(btn.dataset.id));
  });
}

/**
 * Open Modal to Add Course
 */
function openAddCourseModal() {
  editingCourseId = null;
  const form = document.getElementById('course-form');
  const title = document.getElementById('course-modal-title');
  if (title) title.textContent = 'Create New Course';
  if (form) {
    form.reset();
    document.getElementById('course-id-input').value = '';
    document.getElementById('course-rate-input').value = 85;
    document.getElementById('course-students-input').value = 45;
  }
  openModal('modal-course');
}

/**
 * Open Modal to Edit Course
 */
function openEditCourseModal(id) {
  const course = store.getCourses().find(c => c.id === id);
  if (!course) return;

  editingCourseId = id;
  const title = document.getElementById('course-modal-title');
  if (title) title.textContent = 'Edit Course';

  document.getElementById('course-id-input').value = course.id;
  document.getElementById('course-title-input').value = course.title;
  document.getElementById('course-category-input').value = course.category;
  document.getElementById('course-instructor-input').value = course.instructor;
  document.getElementById('course-price-input').value = course.price;
  document.getElementById('course-students-input').value = course.studentsCount;
  document.getElementById('course-rate-input').value = course.completionRate;

  openModal('modal-course');
}

/**
 * Handle Add/Edit Course Form Submit
 */
function handleCourseFormSubmit(e) {
  e.preventDefault();

  const titleInput = document.getElementById('course-title-input');
  const catInput = document.getElementById('course-category-input');
  const instructorInput = document.getElementById('course-instructor-input');
  const priceInput = document.getElementById('course-price-input');
  const studentsInput = document.getElementById('course-students-input');
  const rateInput = document.getElementById('course-rate-input');

  const title = titleInput.value.trim();
  const category = catInput.value;
  const instructor = instructorInput.value.trim();
  const price = Number(priceInput.value) || 0;
  const studentsCount = Number(studentsInput.value) || 0;
  const completionRate = Number(rateInput.value) || 80;

  if (!title || title.length < 3) {
    showToast('Validation Error', 'Course title must be at least 3 characters long.', 'error');
    titleInput.focus();
    return;
  }

  if (!instructor || instructor.length < 2) {
    showToast('Validation Error', 'Please enter instructor name.', 'error');
    instructorInput.focus();
    return;
  }

  if (editingCourseId) {
    store.updateCourse(editingCourseId, {
      title,
      category,
      instructor,
      price,
      studentsCount,
      completionRate
    });
    showToast('Success', `Course "${title}" updated successfully.`, 'success');
  } else {
    store.addCourse({
      title,
      category,
      instructor,
      price,
      studentsCount,
      completionRate
    });
    showToast('Success', `Course "${title}" created successfully.`, 'success');
  }

  closeModal('modal-course');
  renderCoursesGrid();
}

/**
 * Confirm and delete course
 */
function confirmDeleteCourse(id) {
  const course = store.getCourses().find(c => c.id === id);
  if (!course) return;

  showConfirmModal({
    title: 'Delete Course',
    message: `Are you sure you want to delete "${course.title}"? This will remove it from the catalog and recalculate analytics.`,
    confirmText: 'Delete Course',
    confirmType: 'danger',
    onConfirm: () => {
      store.deleteCourse(id);
      showToast('Course Removed', `Course "${course.title}" has been removed.`, 'info');
      renderCoursesGrid();
    }
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
