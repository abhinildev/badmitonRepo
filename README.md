Badminton Court Booking System

This repository contains a full-stack badminton court booking system built as part of the hiring assignment. The project demonstrates backend design, database modeling, API development, and frontend integration for a real-world booking workflow.

Tech Stack

Frontend: React, Tailwind CSS
Backend: Node.js, Express
Database: PostgreSQL (Neon)
ORM: Sequelize
Authentication: JWT
Deployment Target: Render (single service)

Setup Instructions (Local)

Clone the repository
Clone the GitHub repository to your local machine.

Install dependencies
Install dependencies for both frontend and backend.

Environment variables
Create a .env file in the backend directory and add the following variables:

DATABASE_URL (PostgreSQL connection string)

JWT_KEY (secret key for JWT signing)

PORT (optional, defaults to 7000)

Database setup
Ensure the PostgreSQL database is running and accessible.
Sequelize will create the required tables automatically on startup.

Seed data
Run the seed script to populate courts, time slots, equipment, coaches, and pricing rules.

Run the application
Start the backend server.
Start the frontend development server.

Access the app
Frontend runs on the configured frontend port.
Backend APIs run on the configured backend port.

Setup Instructions (Production / Render)

Frontend is built and served as static files by the Express backend

Single Render Web Service is used

Environment variables are configured in Render dashboard

PostgreSQL is hosted on Neon

Assumptions Made

Time slots are predefined and fixed (e.g. 1-hour slots)

A booking is valid for exactly one court and one time slot

Equipment availability is tracked by quantity, not individual items

Coach availability is assumed unless explicitly disabled

Pricing rules are additive and stackable

Pricing rules are configured by admin and not hardcoded

User roles are limited to user and admin

Payment processing is out of scope

Cancellation, waitlist, and refund logic are not implemented (bonus scope)
