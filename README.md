<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />

</head>
<body>

  <h1>Badminton Court Booking System</h1>

  <p>
    This repository contains a full-stack badminton court booking system built as part of the hiring assignment.
    The project demonstrates backend design, database modeling, API development, and frontend integration for a
    real-world booking workflow.
  </p>

  <h2>Tech Stack</h2>
  <ul>
    <li>Frontend: React, Tailwind CSS</li>
    <li>Backend: Node.js, Express</li>
    <li>Database: PostgreSQL (Neon)</li>
    <li>ORM: Sequelize</li>
    <li>Authentication: JWT</li>
    <li>Deployment Target: Render (single service)</li>
  </ul>

  <h2>Setup Instructions (Local)</h2>

  <h3>Clone the repository</h3>
  <p>Clone the GitHub repository to your local machine.</p>

  <h3>Install dependencies</h3>
  <p>Install dependencies for both frontend and backend.</p>

  <h3>Environment variables</h3>
  <p>Create a <strong>.env</strong> file in the backend directory and add the following variables:</p>
  <ul>
    <li>DATABASE_URL (PostgreSQL connection string)</li>
    <li>JWT_KEY (secret key for JWT signing)</li>
    <li>PORT (optional, defaults to 7000)</li>
  </ul>

  <h3>Database setup</h3>
  <p>
    Ensure the PostgreSQL database is running and accessible.
    Sequelize will create the required tables automatically on startup.
  </p>

  <h3>Seed data</h3>
  <p>
    Run the seed script to populate courts, time slots, equipment, coaches, and pricing rules.
  </p>

  <h3>Run the application</h3>
  <p>
    Start the backend server.<br />
    Start the frontend development server.
  </p>

  <h3>Access the app</h3>
  <p>
    Frontend runs on the configured frontend port.<br />
    Backend APIs run on the configured backend port.
  </p>

  <h2>Setup Instructions (Production / Render)</h2>
  <ul>
    <li>Frontend is built and served as static files by the Express backend</li>
    <li>Single Render Web Service is used</li>
    <li>Environment variables are configured in the Render dashboard</li>
    <li>PostgreSQL is hosted on Neon</li>
  </ul>

  <h2>Assumptions Made</h2>
  <ul>
    <li>Time slots are predefined and fixed (e.g. 1-hour slots)</li>
    <li>A booking is valid for exactly one court and one time slot</li>
    <li>Equipment availability is tracked by quantity, not individual items</li>
    <li>Coach availability is assumed unless explicitly disabled</li>
    <li>Pricing rules are additive and stackable</li>
    <li>Pricing rules are configured by admin and not hardcoded</li>
    <li>User roles are limited to user and admin</li>
    <li>Payment processing is out of scope</li>
    <li>Cancellation, waitlist, and refund logic are not implemented (bonus scope)</li>
  </ul>

</body>
</html>
