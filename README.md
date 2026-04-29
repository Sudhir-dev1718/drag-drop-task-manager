# 🚀 Drag and Drop Task Management System

## 📌 Overview

This is a full-stack web application that allows users to manage tasks using a drag-and-drop interface. Tasks can be moved between different stages such as **To Do**, **In Progress**, and **Done**.

The frontend provides an interactive UI, and the backend handles data storage and updates using REST APIs.

---

## 🛠️ Tech Stack

### Frontend:

* React.js
* Axios
* @hello-pangea/dnd (Drag and Drop library)

### Backend:

* Spring Boot
* Spring Data JPA
* MySQL

---

## ⚙️ Features

* Create new tasks
* Drag and drop tasks between columns
* Update task status dynamically
* Delete tasks
* REST API integration

---

## 🧠 Key Concepts Used

* Drag and Drop (DnD)
* REST API Communication
* Optimistic UI Update
* Component-based architecture
* Layered architecture (Controller, Service, Repository)

---

## 🔄 How It Works

1. Frontend fetches tasks from backend using GET API
2. Tasks are displayed based on their status
3. When a task is dragged:

   * UI updates immediately (optimistic update)
   * PUT request is sent to backend
4. Backend updates database
5. UI reflects updated data

---

## 📡 API Endpoints

| Method | Endpoint        | Description        |
| ------ | --------------- | ------------------ |
| GET    | /api/tasks      | Get all tasks      |
| POST   | /api/tasks      | Create new task    |
| PUT    | /api/tasks/{id} | Update task status |
| DELETE | /api/tasks/{id} | Delete task        |

---

## ▶️ Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/drag-drop-task-manager.git
```

---

### 2. Backend Setup

```bash
cd dragdrop-backend
```

Update database config in `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/taskdb
spring.datasource.username=your_username
spring.datasource.password=your_password
```

Run backend:

```bash
mvn spring-boot:run
```

---

### 3. Frontend Setup

```bash
cd dragdrop-frontend
npm install
npm start
```

---

## 🚨 Important Notes

* Do not upload `node_modules` or `target` folders
* Use `.gitignore` properly
* Avoid exposing database credentials

---

## 💬 Author

Sudhir
Full Stack Java Developer (Fresher)
