/* ==========================================================================
   Initial Seed Data for IT LIVE Academy (Neumorphic & 5 Roles Edition)
   ========================================================================== */

export const ROLES = {
  admin: {
    id: "admin",
    name: "Alisher Qosimov",
    roleTitle: "Head Administrator",
    roleLabel: "Admin",
    badgeClass: "role-badge-admin",
    avatar: "AQ",
    description: "To'liq boshqaruv huquqiga ega tizim ma'muri.",
    permissions: ["dashboard", "students", "courses", "analytics", "settings", "cabinet"]
  },
  student: {
    id: "student",
    name: "Sardor Rahimov",
    roleTitle: "Python Backend Talabasi",
    roleLabel: "Student",
    badgeClass: "role-badge-student",
    avatar: "SR",
    description: "Kurslar o'rganuvchisi, uyga vazifalar topshiradi va reytingini kuzatadi.",
    permissions: ["cabinet", "courses", "settings"]
  },
  mentor: {
    id: "mentor",
    name: "Anvar Narzullaev",
    roleTitle: "Lead Mentor & Instructor",
    roleLabel: "Mentor",
    badgeClass: "role-badge-mentor",
    avatar: "AN",
    description: "Talabalarga dars beradi, uyga vazifalarni tekshiradi va baholaydi.",
    permissions: ["cabinet", "courses", "students", "settings"]
  },
  guest: {
    id: "guest",
    name: "Mehmon Foydalanuvchi",
    roleTitle: "Guest / Visitor",
    roleLabel: "Guest",
    badgeClass: "role-badge-guest",
    avatar: "MF",
    description: "Cheklangan mehmon rejimi. Faqat ochiq kurslarni ko'rishi mumkin.",
    permissions: ["cabinet", "courses"]
  },
  blocked: {
    id: "blocked",
    name: "Jasur Qobilov",
    roleTitle: "Account Blocked",
    roleLabel: "Blocked",
    badgeClass: "role-badge-blocked",
    avatar: "JQ",
    description: "Akkaunt qoidabuzarlik yoki to'lov muddati o'tganligi sababli bloklangan.",
    permissions: ["cabinet"]
  }
};

export const INITIAL_HOMEWORK = [
  {
    id: "hw-1",
    course: "Python Backend (Django & FastAPI)",
    title: "24-topshiriq: Login/Logout va rol menyusini qo'shish (3 commit)",
    status: "In Progress",
    deadline: "Bugun, 23:59",
    score: null,
    submittedDate: null
  },
  {
    id: "hw-2",
    course: "Frontend Development (React & Next.js)",
    title: "23-topshiriq: Neumorphism shaklidagi UI interfeys yaratish",
    status: "Completed",
    deadline: "28-Oktabr",
    score: "100 / 100",
    submittedDate: "2024-10-28"
  },
  {
    id: "hw-3",
    course: "Python Backend (Django & FastAPI)",
    title: "22-topshiriq: PostgreSQL Database Schema va Migrations",
    status: "Under Review",
    deadline: "26-Oktabr",
    score: "Kutilmoqda",
    submittedDate: "2024-10-26"
  },
  {
    id: "hw-4",
    course: "UI/UX Design Masterclass (Figma)",
    title: "21-topshiriq: User Cabinet va 5 Role uchun vizual prototip",
    status: "Completed",
    deadline: "24-Oktabr",
    score: "95 / 100",
    submittedDate: "2024-10-24"
  }
];

export const INITIAL_MENTOR_SUBMISSIONS = [
  {
    id: "sub-1",
    studentName: "Sardor Rahimov",
    course: "Python Backend",
    task: "Login/Logout va rol menyusi",
    date: "Bugun, 14:20",
    status: "Pending",
    githubUrl: "https://github.com/itlive/student-project"
  },
  {
    id: "sub-2",
    studentName: "Dilnoza Alimova",
    course: "UI/UX Design",
    task: "Neumorphic User Cabinet prototipi",
    date: "Bugun, 12:45",
    status: "Pending",
    githubUrl: "https://figma.com/file/sample"
  },
  {
    id: "sub-3",
    studentName: "Jasurbek Umarov",
    course: "Frontend Development",
    task: "Chart.js grafiklar integratsiyasi",
    date: "Kecha, 18:30",
    status: "Reviewed",
    githubUrl: "https://github.com/jasur/frontend-app"
  }
];

export const INITIAL_STUDENTS = [
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

export const INITIAL_COURSES = [
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

export const INITIAL_STATS = {
  totalStudents: 1245,
  studentsTrend: "+12%",
  totalCourses: 48,
  coursesTrend: "+8%",
  revenue: 24560,
  revenueTrend: "+15%",
  completionRate: 83,
  completionTrend: "+5%"
};

export const INITIAL_CHARTS_DATA = {
  months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  studentsOverview: [320, 480, 620, 750, 840, 920, 980],
  categories: {
    labels: ["Development", "Design", "Business", "Other"],
    values: [40, 25, 20, 15],
    colors: ["#2f6bff", "#8b5cf6", "#22c55e", "#64748b"]
  },
  revenueOverview: [11000, 18500, 13800, 19200, 15800, 21400, 24560]
};

export const INITIAL_NOTIFICATIONS = [
  {
    id: "notif-1",
    title: "Yangi topshiriq yuklandi",
    message: "24-Uyga vazifa: Login/logout va rol menyusi qo'shildi.",
    time: "10 daqiqa oldin",
    read: false
  },
  {
    id: "notif-2",
    title: "Uyga vazifa baholandi",
    message: "Neumorphism prototipi uchun 100/100 ball qo'yildi.",
    time: "2 soat oldin",
    read: false
  },
  {
    id: "notif-3",
    title: "Oylik maqsadga erishildi",
    message: "Oylik tushum $24,560 dan oshdi!",
    time: "1 kun oldin",
    read: false
  }
];

export const INITIAL_USER = ROLES.admin;
