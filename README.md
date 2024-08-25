# Personal Task Manager with AI Assistant

## Project Summary

This application is a comprehensive personal task management tool that allows users to create, manage, and sync tasks with their Google Calendar. It features a React frontend for user interaction and task visualization, coupled with a FastAPI backend that interfaces with a database and integrates with Google Calendar API.

Key Features:
- Create and manage personal tasks
- Sync tasks with Google Calendar
- AI-powered assistant for task prioritization and rescheduling

## Technologies Used

This project leverages several cutting-edge technologies to provide a robust and user-friendly experience:

1. **Assistant-UI**: A powerful UI framework designed specifically for AI assistants, providing intuitive interfaces for user-AI interactions.

2. **MUI (Material-UI)**: A popular React UI framework that offers a comprehensive suite of UI tools and pre-built components, ensuring a sleek and responsive design.

3. **FastAPI**: A modern, fast (high-performance) web framework for building APIs with Python 3.6+ based on standard Python type hints.

## Getting Started

To get started with the Personal Task Manager, follow these steps:

1. Clone the repository and navigate to the project root.
2. Set up the frontend:
   cd frontend
   npm install
   npm start
3. Access the app at `http://localhost:3000`.

## Using the App

1. Create tasks by entering task details in the main interface.
2. View and manage your tasks in the task list.
3. Use the sync button to synchronize your tasks with Google Calendar.
4. Utilize the AI assistant:
- Click on the assistant icon on the right side of the screen to open the chat interface.
- Ask the AI to help you reschedule your daily priorities or provide task management advice.

## AI Assistant

The AI assistant is designed to help you optimize your task management. You can:
- Ask for help in prioritizing tasks
- Get suggestions for rescheduling
- Receive personalized productivity tips

Example: "Can you help me reschedule my tasks for today? I have an unexpected meeting at 2 PM."

## Key Scripts

- `npm start`: Run the app in development mode
- `npm test`: Run tests
- `npm run build`: Build the app for production

## Google Calendar Integration

To use the Google Calendar sync feature, you'll need to set up Google Calendar API credentials. Instructions for this setup can be found in the `docs/google-calendar-setup.md` file.

## Contributing

We welcome contributions to improve the Personal Task Manager. Please see our `CONTRIBUTING.md` file for guidelines on how to contribute.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.