/* ==========================================================================
   State Management & LocalStorage Store (5 Roles & Neumorphism Edition)
   IT LIVE Academy Admin Dashboard
   ========================================================================== */

import {
  ROLES,
  INITIAL_STUDENTS,
  INITIAL_COURSES,
  INITIAL_CHARTS_DATA,
  INITIAL_NOTIFICATIONS,
  INITIAL_HOMEWORK,
  INITIAL_MENTOR_SUBMISSIONS
} from './data.js';

const STORAGE_KEYS = {
  STUDENTS: 'itlive_students',
  COURSES: 'itlive_courses',
  USER: 'itlive_user',
  ROLE: 'itlive_role',
  HOMEWORK: 'itlive_homework',
  SUBMISSIONS: 'itlive_submissions',
  THEME: 'itlive_theme',
  AUTH: 'itlive_auth',
  NOTIFICATIONS: 'itlive_notifications'
};

class Store {
  constructor() {
    this.init();
  }

  init() {
    if (!localStorage.getItem(STORAGE_KEYS.STUDENTS)) {
      localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(INITIAL_STUDENTS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.COURSES)) {
      localStorage.setItem(STORAGE_KEYS.COURSES, JSON.stringify(INITIAL_COURSES));
    }
    if (!localStorage.getItem(STORAGE_KEYS.ROLE)) {
      localStorage.setItem(STORAGE_KEYS.ROLE, 'admin');
    }
    if (!localStorage.getItem(STORAGE_KEYS.USER)) {
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(ROLES.admin));
    }
    if (!localStorage.getItem(STORAGE_KEYS.HOMEWORK)) {
      localStorage.setItem(STORAGE_KEYS.HOMEWORK, JSON.stringify(INITIAL_HOMEWORK));
    }
    if (!localStorage.getItem(STORAGE_KEYS.SUBMISSIONS)) {
      localStorage.setItem(STORAGE_KEYS.SUBMISSIONS, JSON.stringify(INITIAL_MENTOR_SUBMISSIONS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.THEME)) {
      localStorage.setItem(STORAGE_KEYS.THEME, 'dark');
    }
    if (localStorage.getItem(STORAGE_KEYS.AUTH) === null) {
      localStorage.setItem(STORAGE_KEYS.AUTH, 'true');
    }
    if (!localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS)) {
      localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(INITIAL_NOTIFICATIONS));
    }
  }

  /* ---------------- 5 Role Management ---------------- */
  getCurrentRole() {
    return localStorage.getItem(STORAGE_KEYS.ROLE) || 'admin';
  }

  getRoleDetails(roleId = null) {
    const id = roleId || this.getCurrentRole();
    return ROLES[id] || ROLES.admin;
  }

  setCurrentRole(roleId) {
    if (!ROLES[roleId]) roleId = 'admin';
    localStorage.setItem(STORAGE_KEYS.ROLE, roleId);
    
    // Also synchronize active user profile with selected role
    const roleUser = ROLES[roleId];
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(roleUser));

    // If blocked, auth is still maintained but UI restricts to blocked screen
    this.emitChange('role', roleId);
    this.emitChange('user', roleUser);
    return roleUser;
  }

  getAllRoles() {
    return ROLES;
  }

  /* ---------------- Homework & Uyga Vazifa ---------------- */
  getHomework() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.HOMEWORK);
      return data ? JSON.parse(data) : INITIAL_HOMEWORK;
    } catch {
      return INITIAL_HOMEWORK;
    }
  }

  submitHomework(taskId, submissionData) {
    const list = this.getHomework();
    const index = list.findIndex(h => h.id === taskId);
    if (index !== -1) {
      list[index].status = 'Under Review';
      list[index].submittedDate = new Date().toISOString().split('T')[0];
      list[index].submissionNote = submissionData.note || '';
      list[index].githubUrl = submissionData.url || '';
    } else {
      list.unshift({
        id: 'hw-' + Date.now(),
        title: submissionData.title || 'Yangi uyga vazifa',
        course: submissionData.course || 'Python Backend',
        status: 'Under Review',
        deadline: 'Tekshirilmoqda',
        submittedDate: new Date().toISOString().split('T')[0],
        ...submissionData
      });
    }
    localStorage.setItem(STORAGE_KEYS.HOMEWORK, JSON.stringify(list));
    this.emitChange('homework', list);
    return list;
  }

  /* ---------------- Mentor Submissions & Grading ---------------- */
  getSubmissions() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SUBMISSIONS);
      return data ? JSON.parse(data) : INITIAL_MENTOR_SUBMISSIONS;
    } catch {
      return INITIAL_MENTOR_SUBMISSIONS;
    }
  }

  gradeSubmission(submissionId, score, feedback) {
    const subs = this.getSubmissions();
    const index = subs.findIndex(s => s.id === submissionId);
    if (index !== -1) {
      subs[index].status = 'Reviewed';
      subs[index].score = score;
      subs[index].feedback = feedback;
      localStorage.setItem(STORAGE_KEYS.SUBMISSIONS, JSON.stringify(subs));
      this.emitChange('submissions', subs);
      return subs[index];
    }
    return null;
  }

  /* ---------------- Students ---------------- */
  getStudents() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.STUDENTS);
      return data ? JSON.parse(data) : INITIAL_STUDENTS;
    } catch {
      return INITIAL_STUDENTS;
    }
  }

  saveStudents(students) {
    localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(students));
    this.emitChange('students', students);
  }

  addStudent(student) {
    const students = this.getStudents();
    const newStudent = {
      id: 'std-' + Date.now().toString().slice(-4),
      ...student,
      initials: this.generateInitials(student.name),
      avatarBg: this.getRandomGradient()
    };
    students.unshift(newStudent);
    this.saveStudents(students);
    return newStudent;
  }

  updateStudent(id, updatedFields) {
    const students = this.getStudents();
    const index = students.findIndex(s => s.id === id);
    if (index !== -1) {
      students[index] = {
        ...students[index],
        ...updatedFields,
        initials: updatedFields.name ? this.generateInitials(updatedFields.name) : students[index].initials
      };
      this.saveStudents(students);
      return students[index];
    }
    return null;
  }

  deleteStudent(id) {
    const students = this.getStudents();
    const filtered = students.filter(s => s.id !== id);
    this.saveStudents(filtered);
    return filtered;
  }

  /* ---------------- Courses ---------------- */
  getCourses() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.COURSES);
      return data ? JSON.parse(data) : INITIAL_COURSES;
    } catch {
      return INITIAL_COURSES;
    }
  }

  saveCourses(courses) {
    localStorage.setItem(STORAGE_KEYS.COURSES, JSON.stringify(courses));
    this.emitChange('courses', courses);
  }

  addCourse(course) {
    const courses = this.getCourses();
    const newCourse = {
      id: 'crs-' + Date.now().toString().slice(-4),
      studentsCount: course.studentsCount || 0,
      completionRate: course.completionRate || 80,
      status: 'Active',
      instructorInitials: this.generateInitials(course.instructor),
      ...course
    };
    courses.unshift(newCourse);
    this.saveCourses(courses);
    return newCourse;
  }

  updateCourse(id, updatedFields) {
    const courses = this.getCourses();
    const index = courses.findIndex(c => c.id === id);
    if (index !== -1) {
      courses[index] = {
        ...courses[index],
        ...updatedFields,
        instructorInitials: updatedFields.instructor ? this.generateInitials(updatedFields.instructor) : courses[index].instructorInitials
      };
      this.saveCourses(courses);
      return courses[index];
    }
    return null;
  }

  deleteCourse(id) {
    const courses = this.getCourses();
    const filtered = courses.filter(c => c.id !== id);
    this.saveCourses(filtered);
    return filtered;
  }

  /* ---------------- Live Dynamic Stats ---------------- */
  getStats() {
    const students = this.getStudents();
    const courses = this.getCourses();

    // Baseline calculation to match exact visual targets (1,245 students, 48 courses, $24,560 revenue, 83% completion)
    const baseStudents = 1245 - INITIAL_STUDENTS.length;
    const totalStudents = baseStudents + students.length;

    const baseCourses = 48 - INITIAL_COURSES.length;
    const totalCourses = baseCourses + courses.length;

    const totalRate = courses.reduce((acc, c) => acc + (Number(c.completionRate) || 83), 0);
    const avgRate = courses.length ? Math.round(totalRate / courses.length) : 83;

    const studentDiff = students.length - INITIAL_STUDENTS.length;
    const courseDiff = courses.length - INITIAL_COURSES.length;
    const totalRevenue = 24560 + (studentDiff * 250) + (courseDiff * 300);

    return {
      totalStudents,
      studentsTrend: '+12%',
      totalCourses,
      coursesTrend: '+8%',
      revenue: totalRevenue,
      revenueTrend: '+15%',
      completionRate: avgRate,
      completionTrend: '+5%'
    };
  }

  /* ---------------- Category Distribution ---------------- */
  getCategoryDistribution() {
    const courses = this.getCourses();
    const counts = {
      Development: 0,
      Design: 0,
      Business: 0,
      Other: 0
    };

    courses.forEach(c => {
      const cat = c.category;
      if (counts[cat] !== undefined) {
        counts[cat]++;
      } else {
        counts.Other++;
      }
    });

    const total = courses.length || 1;
    const devPct = Math.round((counts.Development / total) * 100);
    const designPct = Math.round((counts.Design / total) * 100);
    const bizPct = Math.round((counts.Business / total) * 100);
    const otherPct = Math.max(0, 100 - (devPct + designPct + bizPct));

    return {
      labels: ['Development', 'Design', 'Business', 'Other'],
      values: [devPct, designPct, bizPct, otherPct],
      colors: ['#2f6bff', '#8b5cf6', '#22c55e', '#64748b']
    };
  }

  /* ---------------- User Profile ---------------- */
  getUser() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.USER);
      return data ? JSON.parse(data) : ROLES.admin;
    } catch {
      return ROLES.admin;
    }
  }

  saveUser(user) {
    const updated = {
      ...this.getUser(),
      ...user,
      initials: this.generateInitials(user.name)
    };
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(updated));
    this.emitChange('user', updated);
    return updated;
  }

  /* ---------------- Theme & Auth ---------------- */
  getTheme() {
    return localStorage.getItem(STORAGE_KEYS.THEME) || 'dark';
  }

  setTheme(theme) {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
    document.documentElement.setAttribute('data-theme', theme);
    this.emitChange('theme', theme);
  }

  getAuth() {
    return localStorage.getItem(STORAGE_KEYS.AUTH) === 'true';
  }

  setAuth(status) {
    localStorage.setItem(STORAGE_KEYS.AUTH, status ? 'true' : 'false');
    this.emitChange('auth', status);
  }

  /* ---------------- Notifications ---------------- */
  getNotifications() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS);
      return data ? JSON.parse(data) : INITIAL_NOTIFICATIONS;
    } catch {
      return INITIAL_NOTIFICATIONS;
    }
  }

  markAllNotificationsRead() {
    const notifs = this.getNotifications().map(n => ({ ...n, read: true }));
    localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(notifs));
    this.emitChange('notifications', notifs);
    return notifs;
  }

  /* ---------------- Reset Demo Data ---------------- */
  resetDemoData() {
    localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(INITIAL_STUDENTS));
    localStorage.setItem(STORAGE_KEYS.COURSES, JSON.stringify(INITIAL_COURSES));
    localStorage.setItem(STORAGE_KEYS.ROLE, 'admin');
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(ROLES.admin));
    localStorage.setItem(STORAGE_KEYS.HOMEWORK, JSON.stringify(INITIAL_HOMEWORK));
    localStorage.setItem(STORAGE_KEYS.SUBMISSIONS, JSON.stringify(INITIAL_MENTOR_SUBMISSIONS));
    localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(INITIAL_NOTIFICATIONS));
    localStorage.setItem(STORAGE_KEYS.THEME, 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    this.emitChange('reset', true);
  }

  /* ---------------- Helper Utilities ---------------- */
  generateInitials(name = '') {
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return (name.slice(0, 2) || 'IT').toUpperCase();
  }

  getRandomGradient() {
    const gradients = [
      'linear-gradient(135deg, #2563eb, #1d4ed8)',
      'linear-gradient(135deg, #8b5cf6, #7c3aed)',
      'linear-gradient(135deg, #ec4899, #db2777)',
      'linear-gradient(135deg, #10b981, #059669)',
      'linear-gradient(135deg, #f59e0b, #d97706)',
      'linear-gradient(135deg, #06b6d4, #0891b2)',
      'linear-gradient(135deg, #6366f1, #4f46e5)'
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
  }

  /* ---------------- Event Bus ---------------- */
  emitChange(key, value) {
    window.dispatchEvent(new CustomEvent('store-change', { detail: { key, value } }));
  }
}

export const store = new Store();
