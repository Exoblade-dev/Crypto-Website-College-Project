# Crypto Website — College Project

> A static, responsive educational website showcasing basic crypto market information and features. Built as a college project using plain HTML, CSS and JavaScript.

## Table of Contents

- [About](#about)
- [Live preview / Run locally](#live-preview--run-locally)
- [Project structure](#project-structure)
- [Features](#features)
- [How to develop](#how-to-develop)
- [Notes & assumptions](#notes--assumptions)
- [Contributing](#contributing)
- [License](#license)


## About

This repository contains a static website created for a college project to demonstrate an informational crypto-themed site. It includes pages for landing (`index.html`), login and account creation, a dashboard, and a contact page. Styling is organized under the `CSS/` folder and interactivity under `JS/`.


## Live preview / Run locally

This is a static site — no build step or backend is required. You can open the pages directly in your browser by double-clicking `index.html`, or serve the site from the project root to avoid mixed-content or CORS issues when loading assets.

Recommended ways to serve locally (PowerShell examples):

```powershell
# 1) Using Python 3 (available on most systems)
python -m http.server 5500

# Then open http://localhost:5500 in your browser.

# 2) Using VS Code Live Server extension: right-click `index.html` -> "Open with Live Server".

# 3) If you have Node.js installed, use http-server:
npx http-server -p 5500
```


## Project structure

Files and folders at the repository root:

- `index.html` — Landing / home page
- `login.html` — Login page
- `newAccount.html` — New account / signup page
- `dashboard.html` — Dashboard view with market visuals
- `contact.html` — Contact page
- `CSS/` — Stylesheets (multiple files: `style.css`, `login.css`, `dashboard.css`, `contact.css`, etc.)
- `JS/` — JavaScript files for interactivity (`script.js`, `login.js`, `dashboard.js`, `contact.js`)
- `image/` — Images and icons used across the site

If you add or move files, please update this README accordingly.


## Features

- Static, responsive layout using CSS
- Multiple pages: Home, Login, Create Account, Dashboard, Contact
- Separate CSS files for page-specific styles
- Small JavaScript modules for page behavior (form handling, minimal UX)


## How to develop

1. Clone the repository and open it in your editor (for example, VS Code).
2. Serve the project from the root directory (see "Run locally" above) so assets load correctly.
3. Edit HTML files directly, modify CSS in the `CSS/` folder, and update behaviors in `JS/`.

Tips:

- Use the browser devtools to inspect layout and debug styles or JS errors.
- Prefer small, focused commits that change one concern at a time (styling vs behavior).


## Notes & assumptions

- This project is a static front-end. No server-side code or database is included.
- Assumed license: MIT (see License below). If you prefer a different license, update the file and README.
- If you plan to connect this front-end to a real API later, guard any keys/secrets and do not commit them to this repo.


## Contributing

If you'd like to contribute:

1. Fork the repository (or create a branch if you have push access).
2. Create a descriptive branch name (e.g., `fix/login-form-validation`).
3. Make changes and test locally.
4. Open a pull request with a short description of the change.

For edits that affect file locations or filenames, update this README so the instructions stay accurate.


## License

This repository is provided as part of a college project. It is licensed under the MIT License — see the `LICENSE` file if you add one. If you want a different license, replace this section.


---

If you'd like, I can also:

- Add a minimal `LICENSE` file (MIT) and commit it.
- Generate a short `README` badge or screenshots for the readme.
- Add a one-line project description to the repository settings (if you want help with that).

Tell me which of those you'd like and I'll proceed.
