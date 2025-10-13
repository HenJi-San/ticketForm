# 🎟️ TicketForm — Coding Conf Ticket Generator  

[**Live Demo**](https://stylekyoku.github.io/biography/)

---

## ✨ Overview  
**TicketForm** is a front-end application that allows users to generate a personalized conference ticket by filling in a simple registration form.  
The app validates user input (name length, email format, and image size) and dynamically creates a custom ticket with a unique ticket number and user details.  

The project is based on the [Frontend Mentor challenge](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w) and focuses on **form handling**, **input validation**, and **UI responsiveness**.

---

## ⚡ Tech Stack  
- ⚛️ **React JS** — component-based UI rendering  
- 💅 **Chakra UI** — utility-first component styling  
- 🧩 **Formik** — simplified form state management  
- ✅ **Yup** — schema-based validation  
- 🚀 **Vite** — fast development and build tool  
- 🌐 **Git & GitHub Pages** — version control and deployment  

---

## 🪄 Key Features  
- 🧾 Fully validated form using Formik + Yup  
- 🖼️ Image upload with file size restriction (max 500 KB)  
- 💌 Email and name validation (min. 3 characters)  
- 🎟️ Automatic generation of a personalized ticket with a unique ID  
- 🧱 Responsive, **desktop-first** layout  
- 🎨 Background decorations using positioned SVG assets  
- ⚙️ Chakra UI props used directly in component definitions for clean styling  

---

## 🧠 Implementation Details  
- The **form state** and validation logic are managed by **Formik** and **Yup**, ensuring real-time feedback and clean separation of logic.  
- **useState** is used to track form data and the generated ticket object.  
- **useEffect** handles state updates when the ticket is generated.  
- **Chakra UI** provides lightweight and declarative component styling without separate CSS files.  
- The layout is designed in a **desktop-first** approach, with responsive breakpoints for smaller screens.  

---

## 🚀 Deployment  
The project is deployed manually via the **`gh-pages`** branch:  
1. The production build is generated with `npm run build`.  
2. The contents of the `/dist` folder are pushed to the `gh-pages` branch.  
3. GitHub Pages serves the static build directly from that branch.  

No CI/CD pipeline is currently used.

---

## 💼 What This Project Demonstrates  
This project highlights:  
- Ability to build **adaptive and interactive forms** with validation  
- Competence in using **Formik** and **Yup** for structured form logic  
- Understanding of **component hierarchy** and data flow in React  
- Skill in **translating a design specification** (from Frontend Mentor) into a functional front-end implementation  
- Awareness of **clean UI layout** and **semantic structure**  

---

## 🧭 Getting Started  

### 🔧 Installation  
```bash
git clone https://github.com/StyleKyoku/ticketForm.git
cd ticketForm
npm install
npm run dev
```

### 🧱 Build for Production  
```bash
npm run build
```

### 🌐 Deploy to GitHub Pages  
```bash
npm run deploy
```

---

## 👨‍💻 About the Author  

Created by **Nikita Zhdanov** —  
a frontend developer passionate about clean architecture, adaptive design, and SCSS token systems.  
Currently studying **Computer Science at Dublin City University (DCU)**.  

📧 **Email:** nikita.zhdanov.ie@gmail.com  
💬 **Telegram:** [@stylekyoku](https://t.me/stylekyoku)

---

### 🧩 Preview  
![TicketForm Screenshot](./preview.png)
