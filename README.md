# IT LIVE Academy — Admin Dashboard

A modern, responsive, dark-themed Single Page Application (SPA) admin dashboard built for **IT LIVE Academy**.

Designed with standard HTML5, CSS3 (Custom Properties, CSS Grid, Flexbox), vanilla JavaScript (ES modules with standalone fallback), and Chart.js via CDN. No build tools or compiler required.

---

## Visual Design & Architecture

- **Dark Navy Theme**:
  - `--bg: #0a1530;`
  - `--sidebar: #0d1b3d;`
  - `--card: #11224a;`
  - `--border: rgba(255, 255, 255, 0.06);`
  - `--primary: #2f6bff;`
  - `--text: #e8eefc;`
  - `--muted: #8fa3cc;`
  - `--success: #22c55e;`
  - `--purple: #8b5cf6;`
  - `--warning: #f59e0b;`
- **Light Theme Support**: Easily toggled from the Settings page and persisted in `localStorage`.
- **Typography**: Inter (Google Fonts), fallback system sans-serif.
- **Card Styling**: 14px border radius, subtle translucent borders, soft elevation shadows, and a `-2px` hover lift with `0.2s` transition.
- **Spaced Scale**: Strict 8px spacing system for consistent layout rhythm.

---

## Features

### 1. Neumorphic Design System (Soft UI)
- **Signature Tactile Surfaces**: Dual opposing box-shadows (`--nm-flat`, `--nm-pressed`, `--nm-convex`, `--nm-concave`, `--nm-pill`) creating embossed and debossed physical depth.
- **Dark Navy Neumorphism**: Deep navy backgrounds (`#0c1733`, `#0f1c3d`) with soft luminescent highlights and deep drop shadows.
- **Soft Light Neumorphism**: Crisp modern soft-gray palette (`#e6eef8`) with realistic shadow diffusion.
- **Interactive States**: Buttons physically depress with inset shadows on click/active states.

### 2. User Cabinet & 5 Roles (Image 1 & 2)
- **macOS Window Interface**: Styled container with colored traffic light dots (red, yellow, green) and centered title.
- **5 Dynamic Roles**:
  1. **👑 Admin**: Full system control (Dashboard, Students directory, Courses catalog, Analytics, Settings).
  2. **🎓 Student**: Student Cabinet featuring active course progress and **"Uyga vazifalar"** (homework assignments checklist matching Image 2 with submit homework modal).
  3. **👨‍🏫 Mentor**: Teacher Cabinet for reviewing student homework submissions and assigning grades with feedback.
  4. **👤 Guest**: Restricted visitor portal with public course previews and registration prompts.
  5. **🚫 Blocked**: Restricted account state with warning, reason explanation, support contact, and unlock simulator.
- **Role Switcher Menu**: Accessible anytime from the topbar header dropdown or the User Cabinet cards.
- **Quick Role Logins**: 1-click role logins on the sign-in screen for instant testing.

### 3. Sidebar & Navigation
- **Branding**: Custom HTML/CSS logo badge (red rounded `IT` badge + white `LIVE ACADEMY` typography).
- **Navigation Items**: Inline SVG icons for Dashboard, Students, Courses, Analytics, Settings, and Logout.
- **Active State**: Solid vibrant blue (`#2f6bff`) rounded pill with glowing shadow.
- **Mobile Responsive**: Off-canvas drawer with smooth transition and backdrop overlay on viewports `< 900px`.

### 2. Topbar Header
- Hamburger button to toggle the sidebar.
- Notification bell with unread blue badge indicator and interactive 3-item notification dropdown.
- User profile chip with circular avatar and dropdown menu (Profile Settings, Logout).

### 3. Dashboard Page (`#dashboard`)
- **4 Stat Cards** with live count-up animation and synchronized calculations:
  - **Total Students**: `1,245` (`+12%`) — Blue icon
  - **Courses**: `48` (`+8%`) — Green icon
  - **Revenue**: `$24,560` (`+15%`) — Purple icon
  - **Completion Rate**: `83%` (`+5%`) — Cyan graduation cap icon
- **Row 2 Visuals**:
  - **Students Overview**: Monthly bar chart (Jan–Jul, 0–1,000 scale) with rounded bars.
  - **Courses by Category**: Doughnut chart with custom legend (Development 40%, Design 25%, Business 20%, Other 15%).
- **Row 3 Visuals**:
  - **Revenue Overview**: Smooth bezier spline line chart (Jan–Jul, $0–$30K) with blue gradient fill and point markers.

### 4. Students Directory (`#students`)
- Full **CRUD** operations (Add, Edit, Delete).
- Live search across student name, email, and course.
- Status filters: `All`, `Active`, `Completed`, `Paused`.
- Sorting by Newest, Oldest, Name (A-Z), and Name (Z-A).
- Pagination with 8 items per page and page index controls.
- Seeded with **22 realistic Uzbek student profiles** with gradient avatar initials.

### 5. Course Catalog (`#courses`)
- Full **CRUD** operations (Create, Edit, Delete).
- Live search and category filters (`All`, `Development`, `Design`, `Business`, `Other`).
- Responsive card grid displaying instructor info, enrolled count, pricing, and visual completion rate progress bars.
- Seeded with **20 specialized tech courses**.

### 6. Analytics & Insights (`#analytics`)
- Interactive date-range switcher (`Last 7 Days`, `Last 30 Days`, `Last 90 Days`).
- Dynamic chart updates and periodic registration/revenue comparisons.

### 7. Settings & Profile (`#settings`)
- Profile editor: Admin Name, Email, Role.
- Visual theme switcher: Dark Navy vs Light mode with immediate UI update.
- **Reset Demo Data**: One-click recovery of initial students, courses, and stats.

### 8. Authentication & Feedback
- Mock authentication with session persistence.
- Confirmation modals for critical operations (Delete, Logout, Data Reset).
- Floating toast notifications with auto-dismiss (Success, Error, Info).

---

## File Structure

```
├── index.html              # Main SPA HTML structure & modal containers
├── start.bat               # 1-click Windows launcher
├── css/
│   ├── variables.css       # Theme tokens, dark/light palette, spacing
│   ├── base.css            # CSS reset, typography, scrollbars, focus rings
│   ├── layout.css          # Sidebar, topbar, responsive breakpoints
│   ├── components.css      # Stat cards, badges, buttons, tables, modals, toasts
│   └── pages.css           # Dashboard grid, student filters, course cards
├── js/
│   ├── data.js             # Initial dataset (22 students, 20 courses, chart series)
│   ├── store.js            # Reactive localStorage store with dynamic stat computations
│   ├── router.js           # Hash routing engine (#dashboard, #students, etc.)
│   ├── ui.js               # Count-up animations, modals, toasts, dropdowns
│   ├── charts.js           # Chart.js configs for bar, doughnut, and line charts
│   ├── students.js         # Student table management, search, filters, pagination
│   ├── courses.js          # Course grid management, modal forms, category filters
│   ├── app.js              # Main application entry point (ES module)
│   └── app.standalone.js   # Dual-mode fallback script for direct file:// protocol
└── README.md               # Project documentation
```

---

## How to Run

You can run the project in any of the following ways:

### Method 1: 1-Click Launch (Windows)
Double-click `start.bat` in the root folder. It will start a local server and automatically open the dashboard in your default browser.

### Method 2: Python Local Server
Run in terminal:
```bash
python -m http.server 8080
```
Then navigate to: `http://localhost:8080/index.html`

### Method 3: Node / npx
```bash
npx serve .
```

### Method 4: VS Code Live Server
Right-click `index.html` in VS Code and choose **"Open with Live Server"**.

### Method 5: Direct File Opening
Double-click `index.html` directly to open via `file://`. The app includes a dual-mode script loader that runs cleanly even under browser local file restrictions.

---

## Testing & Verification

- **Browsers Tested**: Google Chrome, Microsoft Edge.
- **Breakpoints Tested**:
  - Desktop (1440px)
  - Laptop / Small Desktop (1024px)
  - Tablet (768px)
  - Mobile (375px)
- **Console Log**: `0 errors` verified through automated headless browser testing.

