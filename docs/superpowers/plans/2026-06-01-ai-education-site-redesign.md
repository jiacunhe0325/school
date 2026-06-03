# AI+教育网站改版 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rework the Vite + React prototype so the homepage presents the AI+教育建设方案 clearly and the student, parent, teacher, and school experiences all align with the approved role-based information architecture.

**Architecture:** Keep the existing manual router and role-app entrypoints, but replace the current prototype copy and fragmented page structures with a consistent content system. Reuse the existing layout shells where practical, rewrite the role landing pages and key secondary pages, and consolidate the message of the 11 modules into role-centered workflows.

**Tech Stack:** React, Vite, JSX, Tailwind CSS, lucide-react

---

### Task 1: Rewrite the top-level narrative

**Files:**
- Modify: `src/HomePage.jsx`
- Modify: `src/index.css`
- Verify: `npm run build`

- [ ] Replace the current corrupted homepage copy with a clean project-overview homepage.
- [ ] Add grouped module sections for educational teaching, student growth, future learning space, and school governance.
- [ ] Add role-entry cards for student, parent, teacher, and school.
- [ ] Add policy value, collaboration ecosystem, implementation保障, and CTA sections.

### Task 2: Rebuild the student-side experience

**Files:**
- Modify: `src/components/AppLayout.jsx`
- Modify: `src/components/StudentApp.jsx`
- Modify: `src/components/StudentHomePage.jsx`
- Modify: `src/components/WeakPointsPage.jsx`
- Modify: `src/components/CoursesPage.jsx`
- Modify: `src/components/QuizPage.jsx`
- Modify: `src/components/ProfilePage.jsx`
- Verify: `npm run build`

- [ ] Rename student navigation to match the new role narrative.
- [ ] Keep the existing student subpage routing pattern, but rewrite each key page around “今日任务 / 成长画像 / 拓展发展 / 我的档案”.
- [ ] Remove stale乱码 and legacy prototype framing that conflicts with the approved site direction.

### Task 3: Rebuild the parent-side experience

**Files:**
- Modify: `src/components/ParentLayout.jsx`
- Modify: `src/components/ParentHomePage.jsx`
- Modify: `src/components/ParentAssessmentPage.jsx`
- Modify: `src/components/ParentMessagesPage.jsx`
- Verify: `npm run build`

- [ ] Update the parent shell to present a clearer family collaboration workspace.
- [ ] Rewrite the parent home page around child status, support suggestions, family-school coordination, and growth overview.
- [ ] Rewrite the assessment and messages pages so they feel like part of the same approved role system.

### Task 4: Rebuild the teacher and school views

**Files:**
- Modify: `src/components/TeacherLayout.jsx`
- Modify: `src/components/TeacherApp.jsx`
- Modify: `src/components/SchoolLayout.jsx`
- Modify: `src/components/SchoolDashboard.jsx`
- Verify: `npm run build`

- [ ] Simplify the teacher experience into a coherent teaching workspace tied to lesson prep, classroom orchestration, evaluation, and research collaboration.
- [ ] Rewrite the school dashboard into a governance and project-results cockpit aligned with the建设方案.
- [ ] Ensure both pages connect their role narrative back to the platform’s 11 modules without flattening the site into a module list.

### Task 5: Verify and polish

**Files:**
- Verify: `src/Router.jsx`
- Verify: `src/main.jsx`
- Verify: `npm run build`

- [ ] Run the production build and fix all JSX/runtime errors.
- [ ] Smoke-check route entrypoints from homepage into each role app.
- [ ] Leave untouched prototype pages only if they no longer conflict with the revised IA.
