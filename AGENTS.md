# Repository Guidelines

## Project Structure & Module Organization
This repository is a Vite + React frontend prototype. Entry points live in `src/main.jsx` and `src/Router.jsx`. Page-level views are split between top-level files such as `src/HomePage.jsx` and role-specific screens under `src/components/` (`StudentApp`, `ParentApp`, `TeacherApp`, `SchoolDashboard`, etc.). Global styles are in `src/index.css`, with Tailwind and PostCSS configured in `tailwind.config.js` and `postcss.config.js`. Build output is written to `dist/`; treat that directory as generated. Root HTML and planning PDFs are reference material, not runtime code.

## Build, Test, and Development Commands
Run `npm install` to restore dependencies. Use `npm run dev` to start the Vite dev server on port `3000`. Use `npm run build` to produce a production bundle in `dist/`; this is the most reliable validation step in the current snapshot. Use `npm run preview` to inspect the built app locally. `npm run lint` exists in `package.json`, but currently fails because no ESLint config file is committed.

## Coding Style & Naming Conventions
Follow the existing React component pattern: PascalCase for components (`TeacherAssignments.jsx`), camelCase for state and handlers (`currentPage`, `navigateToPage`), and single quotes in JS/JSX. Prefer 2-space indentation to match the active entry files. Keep components focused on one page or layout concern, and colocate new role-specific screens in `src/components/`. Preserve Tailwind utility usage instead of introducing one-off CSS files unless the style is shared. Save edited text files as UTF-8 to avoid encoding issues.

## Testing Guidelines
There is no committed automated test suite yet. Before opening a PR, run `npm run build` and manually smoke-test the main routes exposed by `src/Router.jsx` in `npm run dev`. When adding tests, place them near the feature as `*.test.jsx` and prefer React-friendly tooling consistent with Vite.

## Commit & Pull Request Guidelines
This workspace snapshot does not include `.git`, so no local history is available to infer a project-specific convention. Use short, imperative commit subjects such as `Add teacher assignment summary` and keep each commit scoped to one change. PRs should include a brief description, linked requirement when available, manual test steps, and screenshots or short recordings for UI changes.

## Architecture Notes
Routing is currently handled manually in `src/Router.jsx` through component state and `window.history.pushState`, not React Router. Keep new navigation logic consistent with that approach unless you are explicitly refactoring the navigation layer.
