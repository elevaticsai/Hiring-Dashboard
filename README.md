# Recruitment Management System

A modern, full-featured recruitment management system built with React, TypeScript, and Tailwind CSS.

## Features

- 🔐 **Authentication System**
  - Email/Password login
  - Social authentication (Google, GitHub, Apple)
  - Password recovery
  - Protected routes

- 📊 **Dashboard**
  - Overview of recruitment metrics
  - Quick access to key features
  - Real-time statistics

- 💼 **Job Management**
  - Create and manage job postings
  - Track application status
  - Manage job requirements

- 👥 **Candidate Management**
  - Track candidate applications
  - Screening and evaluation
  - Interview scheduling

- 📅 **Interview Management**
  - Schedule interviews
  - Track interview status
  - Feedback collection

- 📋 **Recruitment Pipeline**
  - Application tracking
  - Candidate screening
  - Assessment management
  - Selection process
  - Onboarding

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Form Handling**: React Hook Form
- **Routing**: React Router
- **Icons**: Lucide React

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/recruitment-management.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Default Credentials

For testing purposes, use these credentials:
- Email: user@elevatics.ai
- Password: password

## Project Structure

```
src/
├── components/        # Reusable UI components
├── pages/            # Page components
│   ├── auth/         # Authentication pages
│   └── phases/       # Recruitment phase pages
├── store/            # State management
└── types/            # TypeScript types
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details