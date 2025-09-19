# Todo App

A simple Todo application built with **ReactJS** and **Firebase Firestore**. Users can create, edit, and delete tasks, set a priority (high, medium, low), assign categories, and track due dates. The app supports user authentication and is deployed on Vercel.

## Live Demo

[https://todo-app-roan-three-12.vercel.app/](https://todo-app-roan-three-12.vercel.app/)

## Tech Stack

- ReactJS
- Firebase Firestore
- Firebase Authentication
- Vercel (Deployment)

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/RotimiJude/todo.git
   cd todo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Firestore and Authentication.
   - Add your Firebase config credentials to the project (typically in a `.env` or config file).
4. Start the app locally:
   ```bash
   npm start
   ```
5. To deploy, connect your repository to Vercel and follow their deployment instructions.

## Features

- Create, edit, and delete todo tasks
- Assign priority (high, medium, low) to each task
- Add descriptions, due dates, and categories
- User authentication (signup, login, logout)
- Route guarding and conditional display of user content
- Custom hooks for authentication and Firestore interactions
- Real-time data updates with Firestore
- Responsive design using TailwindCSS

## Design Decisions

- Used React hooks to organize logic and avoid repetition
- Created custom hooks for authentication and Firestore operations (`useFirestore`, `useCollection`)
- Route guarding to ensure only authenticated users can access certain pages
- Deployed using Vercel for easy hosting and CI/CD

---
