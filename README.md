# GitHub Repository Explorer

A responsive React web application that displays the most starred GitHub repositories created in the last 10 days with infinite scroll functionality.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Responsive](https://img.shields.io/badge/Design-Responsive-green)
![GitHub API](https://img.shields.io/badge/API-GitHub-black)

## 📋 Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Technical Details](#technical-details)
- [License](#license)

## ✨ Features

- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **🔍 Repository Listing**: Displays GitHub repositories in a clean, card-based layout
- **⭐ Star Information**: Shows repository star counts prominently
- **👤 Owner Details**: Displays repository owner avatar and username
- **📜 Infinite Scroll**: Automatically loads more repositories as you scroll
- **⚡ Real-time Data**: Fetches live data from GitHub's REST API
- **🎨 Clean UI**: Modern, GitHub-inspired user interface
- **🚦 Error Handling**: Graceful handling of API errors and rate limits

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kyawsoeye1998/GitHub-Repository-Explorer.git
   cd GitHub-Repository-Explorer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

## Usage

### Development Commands
   ```bash
      # Start development server
   npm start

   # Run tests
   npm test

   # Build for production
   npm run build

   # Serve production build locally
   npx serve -s build
   ```
### Project Structure
   ```bash
   github-repo-explorer/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.js          # App header with title and subtitle
│   │   ├── RepoList.js        # Main repository list with infinite scroll
│   │   ├── RepoCard.js        # Individual repository card component
│   │   └── LoadingSpinner.js  # Loading indicator component
│   ├── hooks/
│   │   └── useRepositories.js # Custom hook for API data management
│   ├── styles/
│   │   └── App.css           # Main stylesheet with responsive design
│   ├── utils/
│   │   └── api.js            # GitHub API utility functions
│   ├── App.js                # Root component
│   └── index.js              # Application entry point
├── package.json
└── README.md
   ```
## 🧩 Components

### RepoList
- **Main container component** that manages repository data
- **Implements infinite scroll** using Intersection Observer API
- **Handles loading states** and error scenarios
- **Manages pagination** and data fetching

### RepoCard
- **Displays individual repository information**
- **Shows repository name, description, star count, owner details**
- **Includes links** to GitHub repository and owner profile
- **Responsive card layout**

### Header
- **Application header** with title and date filter information
- **Responsive design** that adapts to different screen sizes
- **Displays current date range** filter

### useRepositories Hook
- **Custom React hook** for managing repository data
- **Handles API calls, pagination, and state management**
- **Implements error handling** and loading states
- **Manages infinite scroll** logic

## 🔧 Technical Details

### Technologies Used
- **React 18** - Frontend framework
- **CSS3** - Styling with responsive design
- **GitHub REST API** - Data source
- **Intersection Observer API** - Infinite scroll implementation

### Key Features Implementation

#### Responsive Design
- **Mobile-first CSS approach**
- **Flexbox and Grid layouts**
- **Media queries** for different screen sizes
- **Touch-friendly interface elements**

#### Infinite Scroll
- **Intersection Observer** for performance
- **Automatic loading** on scroll
- **Loading state management**
- **Error boundary implementation**

#### Error Handling
- **Network error detection**
- **API rate limit handling**
- **User-friendly error messages**
- **Graceful fallback states**

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.