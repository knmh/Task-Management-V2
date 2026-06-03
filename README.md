# Task Manager API

A REST API for managing tasks with JWT authentication, role-based access (admin, user, moderator), and admin capabilities to change user roles. Built with Express.js, TypeScript, TypeORM, and PostgreSQL.

## Features

- User signup & login with JWT (15 min token expiry)
- Authentication via `requiredAuth` middleware
- Role-based authorization via `requiredRole`
- Full CRUD for users (only admin can delete)
- Full CRUD for tasks (each user sees/edits only their own tasks)
- Admin can change roles of other users (`PATCH /api/v1/admin/users/:userId/role`)
- Centralized error handling (`AppError` + `errorHandler`)
- `catchAsync` wrapper to prevent server crashes from async errors
- Migration support using TypeORM CLI

## Tech Stack

- Node.js + Express 5
- TypeScript
- TypeORM (with PostgreSQL)
- jsonwebtoken (JWT)
- bcryptjs (password hashing)
- dotenv (environment variables)

## Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v14 or higher)

### Steps

1. Clone the repository:
```bash
git clone https://github.com/knmh/Task-Management-V2.git
cd Task-Management-V2
