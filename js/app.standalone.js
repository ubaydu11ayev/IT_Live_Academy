(() => {
  "use strict";

/* ==================== data.js ==================== */
/* ==========================================================================
   Initial Seed Data for IT LIVE Academy
   ========================================================================== */

const INITIAL_STUDENTS = [
  {
    id: "std-001",
    name: "Sardor Rahimov",
    email: "sardor.rahimov@gmail.com",
    course: "Python Backend (Django & FastAPI)",
    status: "Active",
    joinDate: "2024-01-14",
    avatarBg: "linear-gradient(135deg, #2563eb, #1d4ed8)",
    initials: "SR"
  },
  {
    id: "std-002",
    name: "Dilnoza Alimova",
    email: "dilnoza.alimova@mail.ru",
    course: "UI/UX Design Masterclass (Figma)",
    status: "Active",
    joinDate: "2024-01-20",
    avatarBg: "linear-gradient(135deg, #ec4899, #db2777)",
    initials: "DA"
  },
  {
    id: "std-003",
    name: "Jasurbek Umarov",
    email: "jasur.umarov@itlive.uz",
    course: "Frontend Development (React & Next.js)",
    status: "Completed",
    joinDate: "2023-11-05",
    avatarBg: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
    initials: "JU"
  },
  {
    id: "std-004",
    name: "Madina Karimova",
    email: "madina.k@yandex.ru",
    course: "SMM & Targeted Digital Marketing",
    status: "Active",
    joinDate: "2024-02-01",
    avatarBg: "linear-gradient(135deg, #f59e0b, #d97706)",
    initials: "MK"
  },
  {
    id: "std-005",
    name: "Bekzod Toshmatov",
    email: "bekzod.toshmatov@gmail.com",
    course: "Mobile App Development with Flutter",
    status: "Paused",
    joinDate: "2023-12-18",
    avatarBg: "linear-gradient(135deg, #06b6d4, #0891b2)",
    initials: "BT"
  },
  {
    id: "std-006",
    name: "Shahnoza Yusupova",
    email: "shahnoza.y@gmail.com",
    course: "Full-Stack JavaScript (Node.js & MERN)",
    status: "Active",
    joinDate: "2024-02-10",
    avatarBg: "linear-gradient(135deg, #10b981, #059669)",
    initials: "SY"
  },
  {
    id: "std-007",
    name: "Azamat Zokirov",
    email: "azamat.zokirov@itlive.uz",
    course: "Data Science & Machine Learning",
    status: "Active",
    joinDate: "2024-01-28",
    avatarBg: "linear-gradient(135deg, #6366f1, #4f46e5)",
    initials: "AZ"
  },
  {
    id: "std-008",
    name: "Nilufar Saidova",
    email: "nilufar.saidova@gmail.com",
    course: "UI/UX Design Masterclass (Figma)",
    status: "Completed",
    joinDate: "2023-10-12",
    avatarBg: "linear-gradient(135deg, #f43f5e, #e11d48)",
    initials: "NS"
  },
  {
    id: "std-009",
    name: "Bobur Mirzayev",
    email: "bobur.mirzo@gmail.com",
    course: "DevOps & Cloud Infrastructure",
    status: "Active",
    joinDate: "2024-02-15",
    avatarBg: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
    initials: "BM"
  },
  {
    id: "std-010",
    name: "Malika Xolmatova",
    email: "malika.x@mail.ru",
    course: "Graphic Design & Brand Identity",
    status: "Active",
    joinDate: "2024-02-18",
    avatarBg: "linear-gradient(135deg, #a855f7, #9333ea)",
    initials: "MX"
  },
  {
    id: "std-011",
    name: "Farrux Rustamov",
    email: "farrux.rustamov@gmail.com",
    course: "Cybersecurity & Ethical Hacking",
    status: "Paused",
    joinDate: "2023-12-04",
    avatarBg: "linear-gradient(135deg, #ef4444, #b91c1c)",
    initials: "FR"
  },
  {
    id: "std-012",
    name: "Gulnoza Qodirova",
    email: "gulnoza.qodirova@gmail.com",
    course: "English for IT Specialists",
    status: "Active",
    joinDate: "2024-02-22",
    avatarBg: "linear-gradient(135deg, #14b8a6, #0d9488)",
    initials: "GQ"
  },
  {
    id: "std-013",
    name: "Jahongir Ergashev",
    email: "jahongir.e@itlive.uz",
    course: "Python Backend (Django & FastAPI)",
    status: "Active",
    joinDate: "2024-02-25",
    avatarBg: "linear-gradient(135deg, #2563eb, #3b82f6)",
    initials: "JE"
  },
  {
    id: "std-014",
    name: "Umida Normatova",
    email: "umida.normatova@gmail.com",
    course: "IT Project Management & Agile",
    status: "Completed",
    joinDate: "2023-11-20",
    avatarBg: "linear-gradient(135deg, #eab308, #ca8a04)",
    initials: "UN"
  },
  {
    id: "std-015",
    name: "Sanjar Fayziyev",
    email: "sanjar.f@gmail.com",
    course: "Frontend Development (React & Next.js)",
    status: "Active",
    joinDate: "2024-03-01",
    avatarBg: "linear-gradient(135deg, #6366f1, #4338ca)",
    initials: "SF"
  },
  {
    id: "std-016",
    name: "Kamola Sobirova",
    email: "kamola.sobirova@mail.ru",
    course: "UI/UX Design Masterclass (Figma)",
    status: "Active",
    joinDate: "2024-03-05",
    avatarBg: "linear-gradient(135deg, #ec4899, #be185d)",
    initials: "KS"
  },
  {
    id: "std-017",
    name: "Akmal Nazarov",
    email: "akmal.nazarov@gmail.com",
    course: "Mobile App Development with Flutter",
    status: "Active",
    joinDate: "2024-03-10",
    avatarBg: "linear-gradient(135deg, #0284c7, #0369a1)",
    initials: "AN"
  },
  {
    id: "std-018",
    name: "Rayhon Shokirova",
    email: "rayhon.sh@gmail.com",
    course: "SMM & Targeted Digital Marketing",
    status: "Paused",
    joinDate: "2024-01-08",
    avatarBg: "linear-gradient(135deg, #f97316, #ea580c)",
    initials: "RS"
  },
  {
    id: "std-019",
    name: "Otabek Mahmudov",
    email: "otabek.m@itlive.uz",
    course: "Full-Stack JavaScript (Node.js & MERN)",
    status: "Active",
    joinDate: "2024-03-12",
    avatarBg: "linear-gradient(135deg, #10b981, #047857)",
    initials: "OM"
  },
  {
    id: "std-020",
    name: "Diyora Ismoilova",
    email: "diyora.i@gmail.com",
    course: "Data Science & Machine Learning",
    status: "Completed",
    joinDate: "2023-12-15",
    avatarBg: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
    initials: "DI"
  },
  {
    id: "std-021",
    name: "Rustam Jalilov",
    email: "rustam.jalilov@gmail.com",
    course: "DevOps & Cloud Infrastructure",
    status: "Active",
    joinDate: "2024-03-18",
    avatarBg: "linear-gradient(135deg, #3b82f6, #1e40af)",
    initials: "RJ"
  },
  {
    id: "std-022",
    name: "Mohira Temirova",
    email: "mohira.t@yandex.ru",
    course: "English for IT Specialists",
    status: "Active",
    joinDate: "2024-03-22",
    avatarBg: "linear-gradient(135deg, #14b8a6, #0f766e)",
    initials: "MT"
  }
];

// 20 courses perfectly distributed: 8 Dev (40%), 5 Design (25%), 4 Biz (20%), 3 Other (15%)
const INITIAL_COURSES = [
  // 1-8: Development (40%)
  {
    id: "crs-001",
    title: "Python Backend (Django & FastAPI)",
    category: "Development",
    instructor: "Anvar Narzullaev",
    instructorInitials: "AN",
    studentsCount: 310,
    price: 320,
    completionRate: 85,
    status: "Active"
  },
  {
    id: "crs-002",
    title: "Frontend Development (React & Next.js)",
    category: "Development",
    instructor: "Saidbek Arslonov",
    instructorInitials: "SA",
    studentsCount: 285,
    price: 290,
    completionRate: 84,
    status: "Active"
  },
  {
    id: "crs-003",
    title: "Full-Stack JavaScript (Node.js & MERN)",
    category: "Development",
    instructor: "Davron Karimov",
    instructorInitials: "DK",
    studentsCount: 195,
    price: 350,
    completionRate: 81,
    status: "Active"
  },
  {
    id: "crs-004",
    title: "Mobile App Development with Flutter",
    category: "Development",
    instructor: "Shaxzod Qodirov",
    instructorInitials: "SQ",
    studentsCount: 125,
    price: 310,
    completionRate: 80,
    status: "Active"
  },
  {
    id: "crs-005",
    title: "Data Science & Machine Learning",
    category: "Development",
    instructor: "Ibrohim Rustamov",
    instructorInitials: "IR",
    studentsCount: 90,
    price: 390,
    completionRate: 82,
    status: "Active"
  },
  {
    id: "crs-006",
    title: "Golang Microservices Architecture",
    category: "Development",
    instructor: "Bekzod Umarov",
    instructorInitials: "BU",
    studentsCount: 78,
    price: 360,
    completionRate: 83,
    status: "Active"
  },
  {
    id: "crs-007",
    title: "iOS Development with Swift & SwiftUI",
    category: "Development",
    instructor: "Javohir Qosimov",
    instructorInitials: "JQ",
    studentsCount: 65,
    price: 380,
    completionRate: 85,
    status: "Active"
  },
  {
    id: "crs-008",
    title: "Java Enterprise & Spring Boot",
    category: "Development",
    instructor: "Sardor Ahmedov",
    instructorInitials: "SA",
    studentsCount: 110,
    price: 330,
    completionRate: 82,
    status: "Active"
  },

  // 9-13: Design (25%)
  {
    id: "crs-009",
    title: "UI/UX Design Masterclass (Figma)",
    category: "Design",
    instructor: "Zulayho Mirzayeva",
    instructorInitials: "ZM",
    studentsCount: 160,
    price: 260,
    completionRate: 88,
    status: "Active"
  },
  {
    id: "crs-010",
    title: "Graphic Design & Brand Identity",
    category: "Design",
    instructor: "Nodira Aliyeva",
    instructorInitials: "NA",
    studentsCount: 95,
    price: 220,
    completionRate: 86,
    status: "Active"
  },
  {
    id: "crs-011",
    title: "3D Modeling & Motion Design (Blender)",
    category: "Design",
    instructor: "Timur Valiev",
    instructorInitials: "TV",
    studentsCount: 70,
    price: 290,
    completionRate: 83,
    status: "Active"
  },
  {
    id: "crs-012",
    title: "Mobile App UI/UX & Prototyping",
    category: "Design",
    instructor: "Kamila Tursunova",
    instructorInitials: "KT",
    studentsCount: 82,
    price: 270,
    completionRate: 84,
    status: "Active"
  },
  {
    id: "crs-013",
    title: "Web Typography & Visual Systems",
    category: "Design",
    instructor: "Aziza Karimova",
    instructorInitials: "AK",
    studentsCount: 55,
    price: 210,
    completionRate: 87,
    status: "Active"
  },

  // 14-17: Business (20%)
  {
    id: "crs-014",
    title: "SMM & Targeted Digital Marketing",
    category: "Business",
    instructor: "Temur Xusanov",
    instructorInitials: "TX",
    studentsCount: 110,
    price: 180,
    completionRate: 85,
    status: "Active"
  },
  {
    id: "crs-015",
    title: "IT Project Management & Agile / Scrum",
    category: "Business",
    instructor: "Gulchehra Saidova",
    instructorInitials: "GS",
    studentsCount: 75,
    price: 250,
    completionRate: 83,
    status: "Active"
  },
  {
    id: "crs-016",
    title: "Product Management in Tech Startups",
    category: "Business",
    instructor: "Rustam Fayz",
    instructorInitials: "RF",
    studentsCount: 60,
    price: 300,
    completionRate: 81,
    status: "Active"
  },
  {
    id: "crs-017",
    title: "Startup Pitching & Venture Funding",
    category: "Business",
    instructor: "Sarvar Ruziev",
    instructorInitials: "SR",
    studentsCount: 45,
    price: 260,
    completionRate: 82,
    status: "Active"
  },

  // 18-20: Other (15%)
  {
    id: "crs-018",
    title: "DevOps & Cloud Infrastructure (Docker, K8s)",
    category: "Other",
    instructor: "Farxod Dadajonov",
    instructorInitials: "FD",
    studentsCount: 65,
    price: 340,
    completionRate: 80,
    status: "Active"
  },
  {
    id: "crs-019",
    title: "Cybersecurity & Ethical Hacking",
    category: "Other",
    instructor: "Mansur Toshpulatov",
    instructorInitials: "MT",
    studentsCount: 52,
    price: 380,
    completionRate: 79,
    status: "Active"
  },
  {
    id: "crs-020",
    title: "English for IT Specialists & Interview Prep",
    category: "Other",
    instructor: "Madina Rahimova",
    instructorInitials: "MR",
    studentsCount: 140,
    price: 150,
    completionRate: 87,
    status: "Active"
  }
];

const INITIAL_STATS = {
  totalStudents: 1245,
  studentsTrend: "+12%",
  totalCourses: 48,
  coursesTrend: "+8%",
  revenue: 24560,
  revenueTrend: "+15%",
  completionRate: 83,
  completionTrend: "+5%"
};

const INITIAL_CHARTS_DATA = {
  months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  // Match the stepped bar height from photo: 0 to 1000 range
  studentsOverview: [320, 480, 620, 750, 840, 920, 980],
  categories: {
    labels: ["Development", "Design", "Business", "Other"],
    values: [40, 25, 20, 15],
    colors: ["#2f6bff", "#8b5cf6", "#22c55e", "#64748b"]
  },
  // Curved wave matching photo: crest at Feb (~17k), dip at Mar/Apr (~14k), wave at May (~21k), dip at Jun (~18k), peak at Jul ($24,560)
  revenueOverview: [11000, 18500, 13800, 19200, 15800, 21400, 24560]
};

const INITIAL_NOTIFICATIONS = [
  {
    id: "notif-1",
    title: "New Student Enrolled",
    message: "Sardor Rahimov enrolled in Python Backend.",
    time: "10 minutes ago",
    read: false
  },
  {
    id: "notif-2",
    title: "Course Updated",
    message: "React & Next.js syllabus updated to v15.",
    time: "2 hours ago",
    read: false
  },
  {
    id: "notif-3",
    title: "Monthly Milestone Reached",
    message: "Total revenue exceeded $24,000 for this month!",
    time: "1 day ago",
    read: false
  }
];

const INITIAL_USER = {
  name: "Alisher Qosimov",
  email: "admin@itlive.uz",
  role: "Head Administrator",
  initials: "AQ"
};


/* ==================== store.js ==================== */
/* ==========================================================================
   State Management & LocalStorage Store
   IT LIVE Academy Admin Dashboard
   ========================================================================== */


const STORAGE_KEYS = {
  STUDENTS: 'itlive_students',
  COURSES: 'itlive_courses',
  USER: 'itlive_user',
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
    if (!localStorage.getItem(STORAGE_KEYS.USER)) {
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(INITIAL_USER));
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
    // Offset by initial counts
    const baseStudents = 1245 - INITIAL_STUDENTS.length;
    const totalStudents = baseStudents + students.length;

    const baseCourses = 48 - INITIAL_COURSES.length;
    const totalCourses = baseCourses + courses.length;

    // Calculate dynamic completion rate (83% baseline)
    const totalRate = courses.reduce((acc, c) => acc + (Number(c.completionRate) || 83), 0);
    const avgRate = courses.length ? Math.round(totalRate / courses.length) : 83;

    // Revenue calculation: exactly $24,560 baseline
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
      return data ? JSON.parse(data) : INITIAL_USER;
    } catch {
      return INITIAL_USER;
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
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(INITIAL_USER));
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

const store = new Store();


/* ==================== ui.js ==================== */
/* ==========================================================================
   UI Helpers & Interaction Components
   (Modals, Toasts, Dropdowns, Sidebar, Count-Up Animations)
   ========================================================================== */

/**
 * Animate numbers counting up smoothly
 */
function animateCountUp(element, targetValue, duration = 1200, prefix = '', suffix = '') {
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
function showToast(title, message, type = 'info') {
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
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    const firstInput = modal.querySelector('input:not([type="hidden"]), select, textarea, button.btn-primary');
    if (firstInput) firstInput.focus();
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
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
function showConfirmModal({ title, message, confirmText = 'Confirm', confirmType = 'danger', onConfirm }) {
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
function setupUIListeners() {
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


/* ==================== charts.js ==================== */
/* ==========================================================================
   Chart.js Configurations & Rendering
   IT LIVE Academy Admin Dashboard
   ========================================================================== */



let studentsBarChartInstance = null;
let categoryDoughnutChartInstance = null;
let revenueLineChartInstance = null;

// Analytics page chart instances
let analyticsEnrollmentChartInstance = null;
let analyticsRevenueChartInstance = null;

/**
 * Returns theme-dependent chart colors
 */
function getChartThemeColors() {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  return {
    gridColor: isLight ? 'rgba(15, 23, 42, 0.07)' : 'rgba(255, 255, 255, 0.06)',
    tickColor: isLight ? '#64748b' : '#8fa3cc',
    tooltipBg: isLight ? '#ffffff' : '#0d1b3d',
    tooltipText: isLight ? '#0f172a' : '#e8eefc',
    tooltipBorder: isLight ? 'rgba(15, 23, 42, 0.1)' : 'rgba(255, 255, 255, 0.15)',
    cardBg: isLight ? '#ffffff' : '#11224a'
  };
}

/**
 * Initialize all dashboard charts
 */
function initDashboardCharts() {
  renderStudentsBarChart();
  renderCategoryDoughnutChart();
  renderRevenueLineChart();
}

/**
 * 1. Students Overview Bar Chart
 */
function renderStudentsBarChart() {
  const canvas = document.getElementById('studentsOverviewChart');
  if (!canvas || typeof Chart === 'undefined') return;

  const ctx = canvas.getContext('2d');
  const theme = getChartThemeColors();
  const months = INITIAL_CHARTS_DATA.months;
  const dataValues = INITIAL_CHARTS_DATA.studentsOverview;

  if (studentsBarChartInstance) {
    studentsBarChartInstance.destroy();
  }

  studentsBarChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: months,
      datasets: [
        {
          label: 'Students Enrolled',
          data: dataValues,
          backgroundColor: '#2f6bff',
          hoverBackgroundColor: '#4f85ff',
          borderRadius: 6,
          borderSkipped: false,
          barPercentage: 0.55,
          categoryPercentage: 0.7
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 900,
        easing: 'easeOutQuart'
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: theme.tooltipBg,
          titleColor: theme.tooltipText,
          bodyColor: theme.tooltipText,
          borderColor: theme.tooltipBorder,
          borderWidth: 1,
          padding: 10,
          displayColors: false,
          callbacks: {
            label: (context) => ` ${context.parsed.y.toLocaleString()} Students`
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            color: theme.tickColor,
            font: { family: 'Inter', size: 12 }
          }
        },
        y: {
          min: 0,
          max: 1000,
          grid: {
            color: theme.gridColor,
            drawBorder: false
          },
          ticks: {
            stepSize: 250,
            color: theme.tickColor,
            font: { family: 'Inter', size: 11 },
            callback: (val) => val.toLocaleString()
          }
        }
      }
    }
  });
}

/**
 * 2. Courses by Category Doughnut Chart
 */
function renderCategoryDoughnutChart() {
  const canvas = document.getElementById('categoryDoughnutChart');
  if (!canvas || typeof Chart === 'undefined') return;

  const ctx = canvas.getContext('2d');
  const theme = getChartThemeColors();
  const dist = store.getCategoryDistribution();

  if (categoryDoughnutChartInstance) {
    categoryDoughnutChartInstance.destroy();
  }

  categoryDoughnutChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: dist.labels,
      datasets: [
        {
          data: dist.values,
          backgroundColor: dist.colors,
          borderColor: theme.cardBg,
          borderWidth: 3,
          hoverOffset: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '72%',
      animation: {
        animateScale: true,
        animateRotate: true,
        duration: 900
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: theme.tooltipBg,
          titleColor: theme.tooltipText,
          bodyColor: theme.tooltipText,
          borderColor: theme.tooltipBorder,
          borderWidth: 1,
          padding: 10,
          callbacks: {
            label: (context) => ` ${context.label}: ${context.parsed}%`
          }
        }
      }
    }
  });

  // Update HTML Custom Legend
  updateCustomLegend(dist);
}

function updateCustomLegend(dist) {
  const legendContainer = document.getElementById('categoryLegend');
  if (!legendContainer) return;

  legendContainer.innerHTML = dist.labels.map((label, i) => `
    <div class="legend-item">
      <div class="legend-color-label">
        <span class="legend-indicator" style="background-color: ${dist.colors[i]};"></span>
        <span>${label}</span>
      </div>
      <span class="legend-value">${dist.values[i]}%</span>
    </div>
  `).join('');
}

/**
 * 3. Revenue Overview Line Chart
 */
function renderRevenueLineChart() {
  const canvas = document.getElementById('revenueLineChart');
  if (!canvas || typeof Chart === 'undefined') return;

  const ctx = canvas.getContext('2d');
  const theme = getChartThemeColors();
  const months = INITIAL_CHARTS_DATA.months;
  const revenueData = INITIAL_CHARTS_DATA.revenueOverview;

  // Create subtle blue gradient fill
  const gradient = ctx.createLinearGradient(0, 0, 0, 240);
  gradient.addColorStop(0, 'rgba(47, 107, 255, 0.35)');
  gradient.addColorStop(1, 'rgba(47, 107, 255, 0.01)');

  if (revenueLineChartInstance) {
    revenueLineChartInstance.destroy();
  }

  revenueLineChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: months,
      datasets: [
        {
          label: 'Monthly Revenue',
          data: revenueData,
          borderColor: '#2f6bff',
          borderWidth: 3,
          fill: true,
          backgroundColor: gradient,
          tension: 0.42,
          pointBackgroundColor: '#2f6bff',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: '#2f6bff',
          pointHoverBorderColor: '#ffffff'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 900,
        easing: 'easeOutQuart'
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: theme.tooltipBg,
          titleColor: theme.tooltipText,
          bodyColor: theme.tooltipText,
          borderColor: theme.tooltipBorder,
          borderWidth: 1,
          padding: 10,
          displayColors: false,
          callbacks: {
            label: (context) => ` $${context.parsed.y.toLocaleString()}`
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            color: theme.tickColor,
            font: { family: 'Inter', size: 12 }
          }
        },
        y: {
          min: 0,
          max: 30000,
          beginAtZero: true,
          grid: {
            color: theme.gridColor,
            drawBorder: false
          },
          ticks: {
            stepSize: 10000,
            color: theme.tickColor,
            font: { family: 'Inter', size: 11 },
            callback: (val) => {
              if (val === 0) return '$0';
              return `$${val / 1000}K`;
            }
          }
        }
      }
    }
  });
}

/**
 * Analytics Page Charts (with date filter)
 */
function initAnalyticsCharts(days = 30) {
  const canvas1 = document.getElementById('analyticsEnrollmentChart');
  const canvas2 = document.getElementById('analyticsRevenueChart');
  if (!canvas1 || !canvas2 || typeof Chart === 'undefined') return;

  const theme = getChartThemeColors();

  let labels, enrollmentData, revenueData;
  if (days === 7) {
    labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    enrollmentData = [12, 19, 15, 25, 22, 30, 28];
    revenueData = [1400, 2100, 1800, 3200, 2800, 4100, 3900];
  } else if (days === 90) {
    labels = ['Month 1', 'Month 2', 'Month 3'];
    enrollmentData = [340, 480, 620];
    revenueData = [28000, 39000, 52000];
  } else {
    // 30 days
    labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
    enrollmentData = [85, 110, 140, 175];
    revenueData = [5800, 7200, 8900, 11400];
  }

  // Enrollment bar
  if (analyticsEnrollmentChartInstance) analyticsEnrollmentChartInstance.destroy();
  const ctx1 = canvas1.getContext('2d');
  analyticsEnrollmentChartInstance = new Chart(ctx1, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'New Registrations',
        data: enrollmentData,
        backgroundColor: '#8b5cf6',
        borderRadius: 6,
        barPercentage: 0.5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: { ticks: { color: theme.tickColor } },
        y: { grid: { color: theme.gridColor }, ticks: { color: theme.tickColor } }
      }
    }
  });

  // Revenue line
  if (analyticsRevenueChartInstance) analyticsRevenueChartInstance.destroy();
  const ctx2 = canvas2.getContext('2d');
  const grad = ctx2.createLinearGradient(0, 0, 0, 240);
  grad.addColorStop(0, 'rgba(34, 197, 94, 0.35)');
  grad.addColorStop(1, 'rgba(34, 197, 94, 0.01)');

  analyticsRevenueChartInstance = new Chart(ctx2, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Period Revenue',
        data: revenueData,
        borderColor: '#22c55e',
        backgroundColor: grad,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#22c55e',
        pointBorderColor: '#ffffff',
        pointRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: { ticks: { color: theme.tickColor } },
        y: {
          grid: { color: theme.gridColor },
          ticks: {
            color: theme.tickColor,
            callback: (v) => `$${v.toLocaleString()}`
          }
        }
      }
    }
  });
}

/**
 * Re-render all charts when theme changes
 */
function refreshAllCharts() {
  renderStudentsBarChart();
  renderCategoryDoughnutChart();
  renderRevenueLineChart();
}


/* ==================== students.js ==================== */
/* ==========================================================================
   Students Management Module (CRUD, Filter, Search, Pagination)
   IT LIVE Academy Admin Dashboard
   ========================================================================== */



let currentPage = 1;
const ITEMS_PER_PAGE = 8;
let studentSearchQuery = '';
let statusFilter = 'All';
let sortBy = 'newest';
let editingStudentId = null;

/**
 * Initialize Students module event listeners
 */
function initStudentsModule() {
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
function populateCourseOptions() {
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
function renderStudentsTable() {
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


/* ==================== courses.js ==================== */
/* ==========================================================================
   Courses Management Module (CRUD, Category Filter, Card Grid)
   IT LIVE Academy Admin Dashboard
   ========================================================================== */



let courseSearchQuery = '';
let activeCategory = 'All';
let editingCourseId = null;

/**
 * Initialize Courses module
 */
function initCoursesModule() {
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
function renderCoursesGrid() {
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


/* ==================== router.js ==================== */
/* ==========================================================================
   SPA Hash Router
   IT LIVE Academy Admin Dashboard
   ========================================================================== */






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
function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  // Initial route handle
  handleRoute();
}

/**
 * Handle route transition
 */
function handleRoute() {
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


/* ==================== app.js ==================== */
/* ==========================================================================
   Application Entrypoint
   IT LIVE Academy Admin Dashboard
   ========================================================================== */







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


})();
