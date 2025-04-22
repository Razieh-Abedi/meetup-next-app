# Meetup Events App

A full-stack web application built with **Next.js** that allows users to view, create, and explore event meetups. The app is optimized for performance using features like Static Site Generation (SSG), dynamic routing, and layout optimization. Data is stored and fetched from a **MongoDB Atlas** cloud database, and the app is deployed on **Vercel**.

## 🚀 Live Demo

🔗 [View the app on Vercel](https://meetup-next-app-iota.vercel.app/)

## 📂 Features

- 🔍 **View Events** – Browse a list of meetups with titles, images, and addresses.
- 📝 **Event Details** – Click on a meetup to view detailed information.
- ➕ **Create Events** – Add new meetups through a form.
- ⚡ **Optimized Rendering** – Uses **Static Site Generation (SSG)** and **fallbacks** for performance.
- 📦 **MongoDB Integration** – Uses MongoDB Atlas for persistent data storage.
- 📁 **Dynamic Routing** – Implemented for individual event pages.
- 🎨 **Styled with CSS Modules** – Scoped styles for components.
- 🧱 **Layout Optimization** – Shared layout components across pages using `app/pages` structure.

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Vercel](https://vercel.com/)

## 🧑‍💻 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Razieh-Abedi/meetup-next-app.git
cd meetup-next-app

npm install

### 2. Create a .env.local file in the root directory:

MONGODB_URI=your_mongodb_connection_string

```
