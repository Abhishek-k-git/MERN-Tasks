### Task Management App

A simple yet powerful task management application that helps users create, edit, and organize tasks with a weekly overview. The app allows for task tracking, status updates, and calendar integration to enhance productivity.

#### Table of Contents

-  [Features](#features)
-  [Technologies Used](#technologies-used)
-  [Installation](#installation)
-  [Usage](#usage)
-  [API Integration](#api-integration)

#### Features

-  **Create, Edit, and Delete Tasks**: Manage your tasks with ease using intuitive modals.
-  **Weekly Calendar View**: Navigate through weeks and select dates to view specific tasks.
-  **Search Functionality**: Quickly find tasks by searching for titles or descriptions.
-  **Status Tracking**: Easily update task status (In Progress, Completed) with checkboxes.
-  **Weekly Overview**: Get a summary of tasks grouped by week, with progress indicators.
-  **Responsive Design**: Works seamlessly on both desktop and mobile devices.

#### Technologies Used

-  **Frontend**:
   -  React.js
   -  Tailwind CSS
   -  React-Router-Dom
-  **State Management**:
   -  Redux Toolkit
-  **Backend**:
   -  Node.js
   -  Express.js
   -  MongoDB
   -  RESTful API
-  **Others**:
   -  React Query for data fetching

#### Installation

##### Prerequisites

Make sure you have the following installed:

-  Node.js (v14 or higher)
-  npm or yarn

##### Steps to Install

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/task-management-app.git
   cd task-management-app
   Install Dependencies:
   ```

Using npm:

bash
Copy code
npm install
Or using yarn:

bash
Copy code
yarn install
Run the Application:

bash
Copy code
npm start
Or:

bash
Copy code
yarn start
Open your browser and navigate to http://localhost:3000.

#### Usage
Creating a Task:

Click on "Create New Task" button.
Fill in the task details and select a date.
Save the task.
Editing a Task:

Click on the "Edit" button next to the task you wish to modify.
Update the necessary fields and save.
Deleting a Task:

Click on the "Delete" button next to the task.
Confirm the deletion.
Navigating the Calendar:

Use the weekly calendar to select a date and view tasks associated with that date.
Searching Tasks:

Use the search bar to filter tasks by title or description.
API Integration
This app is designed to work with a RESTful API for task management. Make sure to set up your API endpoints in the api/tasksApi.js file.

#### Endpoints
GET /tasks - Fetch all tasks
POST /tasks - Create a new task
PUT /tasks/:id - Update an existing task
DELETE /tasks/:id - Delete a task
PATCH /tasks/:id/status - Update the status of a task
