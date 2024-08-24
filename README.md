# User Profile Web Application

## Table of Contents

- [User Profile Web Application](#user-profile-web-application)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies Used](#technologies-used)
  - [File Structure](#file-structure)
  - [Customisation](#customisation)
  - [Contact](#contact)

## Overview

This project is a React-based web application designed to display a detailed user profile. It features a profile card with user information and interactive tabs showcasing various aspects of the user's background, skills and experience. The application uses React, Bootstrap for styling and custom CSS for additional styles.

## Features

- **Profile Card**: Displays user's profile picture, name, title and contact information.
- **Tabs**: Organises user information into tabs for easy navigation:
  - **About**: Detailed descriptions of the user's background, vision and tech toolbox.
  - **Experience**: Information about the user's professional experience and qualifications.
  - **Skills**: List of skills with buttons.
  - **Courses**: List of completed courses.
  - **Languages**: List of spoken languages and proficiency levels.
  - **Organisations**: Information about the organisations the user is involved with.
  - **Causes**: Causes the user supports.

## Installation

1. **Clone the repository**:

   ```zsh
   git clone https://github.com/jediahjireh/user-profile.git
   ```

2. **Navigate to the project directory**:

   ```zsh
   cd user-profile
   ```

3. **Install dependencies**:

   ```zsh
   npm install
   ```

## Usage

1. **Start the development server**:

   ```zsh
   npm run dev
   ```

2. **Open your browser and go to the [default localhost](http://localhost:5173) to view the application.**

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **ReactDOM**: Provides DOM-specific methods.
- **Bootstrap**: CSS framework for responsive design and styling.
- **React-Bootstrap**: Bootstrap components for React.
- **React Icons**: A library for using popular icons in React applications.

## File Structure

- **[src/main.jsx](src/main.jsx)**: Entry point of the application.
- **[src/custom.css](src/custom.css)**: Custom CSS file for additional styling.
- **[src/images/profile-picture.jpg](src/images/profile-picture.jpg)**: User's profile picture.
- **[src/components/UserProfile.jsx](src/components/UserProfile.jsx)**: Contains the `UserProfile` component that is populated with user data.
- **[src/components/UserData.jsx](src/components/UserData.jsx)**: Contains the `UserData` object that is passed as a prop.

## Customisation

- **Profile Picture**: Update `profile_picture` import to use a different image.
- **User Data**: Modify the `user` object to reflect different user information.
- **Styling**: Edit `custom.css` to change the appearance of the components.

## Contact

For any questions, please reach out to:

- **Email**: [jediahnaicker@gmail.com](mailto:jediahnaicker@gmail.com)
- **LinkedIn**: [Jediah Jireh Naicker](https://www.linkedin.com/in/jediahnaicker)
- **GitHub**: [jediahjireh](https://github.com/jediahjireh)

Feel free to adjust the sections as necessary for your project!
