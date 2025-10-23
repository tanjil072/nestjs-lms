<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## nestjs-lms

A simple Learning Management System (LMS) API built with NestJS, TypeScript and MongoDB. This repository contains API endpoints for user registration/login, course management, and role-based authorization.

## Key features

- NestJS (TypeScript) server
- MongoDB (Mongoose) for persistence
- JWT authentication and role guards
- DTO validation using class-validator
- Unit and e2e tests with Jest

## Tech stack

- Node.js 18+ (or compatible)
- NestJS 11
- TypeScript
- MongoDB
- pnpm (recommended) or npm/yarn

## Prerequisites

- Node.js (v18 or later recommended)
- pnpm (recommended) or npm
- A running MongoDB instance (local or cloud)

## Installation

Clone the repo and install dependencies:

```bash
pnpm install
```

If you prefer npm:

```bash
npm install
```

## Environment variables

Create a `.env` file in the project root (or set environment variables in your host). The application expects at least the following variables:

- MONGO_URI - MongoDB connection string (required)
- JWT_SECRET - Secret used to sign JWT tokens (required)
- PORT - Optional. Defaults to 3000 if not set.

Example `.env`:

```env
MONGO_URI=mongodb://localhost:27017/nestjs-lms
JWT_SECRET=supersecretkey
PORT=3000
```

Note: `src/auth/constants.ts` reads `JWT_SECRET` from `process.env.JWT_SECRET` and `src/app.module.ts` reads `MONGO_URI`.

## Running the app

Development (watch mode):

```bash
pnpm run start:dev
```

Production build + start:

```bash
pnpm run build
pnpm run start:prod
```

Useful scripts (from `package.json`):

- `start` - Run compiled app via `nest start`
- `start:dev` - Start with watch
- `start:prod` - Run built `dist/main`
- `build` - Compile TypeScript
- `test` - Run Jest unit tests
- `test:e2e` - Run e2e tests
- `test:cov` - Test coverage

## API overview

This project contains the following modules/APIs (high level):

- Auth (register/login)
  - POST /auth/register - Register a new user
  - POST /auth/login - Authenticate and receive JWT
- Users
  - User creation is handled during registration
- Courses
  - CRUD endpoints for courses (protected by auth/roles)

Refer to the controllers in `src/auth`, `src/user`, and `src/course` for specific routes and DTO shapes.

## Tests

Run unit tests:

```bash
pnpm run test
```

Run e2e tests:

```bash
pnpm run test:e2e
```

Generate coverage report:

```bash
pnpm run test:cov
```

## Linting & Formatting

The project includes ESLint and Prettier configuration. To format code:

```bash
pnpm run format
```

To run lint autofix:

```bash
pnpm run lint
```

## Contribution

Contributions are welcome. Typical workflow:

1. Fork the repo
2. Create a branch for your feature/fix
3. Add tests for new behavior
4. Open a pull request with a clear description

## Notes & next steps

- Consider adding an OpenAPI (Swagger) setup for interactive API docs.
- Add more tests for services and guards.
- Add CI (GitHub Actions) for linting, tests and builds.

## License

This project is currently marked as `UNLICENSED` in `package.json`. Update `package.json` and this README if you add a license.

---

If you'd like, I can also add a minimal `.env.example` and enable Swagger docs. Tell me which you'd prefer next.
