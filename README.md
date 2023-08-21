# Full-Stack Todo List Project

## Overview

This is a full-stack Todo List project that allows users to create, manage, and organize their tasks. Users can add new tasks, mark tasks as completed, edit task names, and delete tasks.

### Features

- Create new tasks with a name and save them.
- Mark tasks as completed by checking a checkbox.
- Edit task names.
- Delete tasks.
- User-friendly and intuitive interface.

## Technologies Used

- **Frontend:**
  - React.js: A JavaScript library for building user interfaces.
  - HTML/CSS: For structuring and styling the web application.
  - Axios: For making HTTP requests to the backend.

- **Backend:**
  - Node.js: A JavaScript runtime for building server-side applications.
  - Express.js: A web application framework for Node.js.
  - MySQL: A relational database management system for storing task data.

## Getting Started

### Prerequisites

- Node.js and npm installed on your computer.
- MySQL database set up with the required schema.

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/guka20/to-do-list.git
   cd to-do-list

2. Install dependencies for both the frontend and backend:
    - cd back-end
    - npm install
    - cd to-do-list
    - npm install

3. configure the backend:

    ### Create a .env file in the backend directory and set up your MySQL database connection details. Example:
    
    - PORT=8000
    - DB_USR=Your username
    - DBPASSWORD=Your database password
    - DBNAME=Your database name
    - DBHOST=Your Host Name
    - DBPORT=Your database port

4. Start servers:

- **Frontend:**
    
    - cd to-do-list
    - npm start

- **Backend:**

    - cd back-end
    - npx nodemon app.js

# Access

Access the Todo List application in your web browser at [http://localhost:3000](http://localhost:3000).

# API Endpoints

The backend provides the following API endpoints:

- `GET /api`: Get a list of all tasks.
- `POST /api`: Create a new task.
- `PATCh /api/:id`: Update a task.
- `DELETE /api/:id`: Delete a task.

# Postman Collection

You can import the provided Postman JSON file to test the API endpoints.

# Contributing

Contributions are welcome! If you find any issues or have ideas for improvements, please open an issue or create a pull request.

# License

This project is licensed under the MIT License - see the LICENSE file for details.

# Acknowledgments

Thanks to the open-source community for creating the tools and libraries used in this project.
