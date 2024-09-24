# Design Code Challenge - Vue.js Application

This project is a Vue.js application built to demonstrate efficient use of modern development practices like component reuse, Tailwind CSS styling, TypeScript, unit testing with Vitest, and end-to-end testing with Cypress. The application solves three specific tasks, showcasing how to handle business days between dates, including fixed and dynamic holiday rules, with reusable form components and clean design.

## Project Overview

This project implements:

	•	A clean UI with reusable components.
	•	Tailwind CSS for responsive, modern styling.
	•	Three distinct tasks demonstrating date-based calculations.
	•	Separation of business logic and UI using modular helper functions.
	•	Unit testing and end-to-end testing to ensure quality.

## Tasks Implemented

	1.	Task 1: Weekdays Between Two Dates
Calculates weekdays (Monday-Friday) between two given dates.
	2.	Task 2: Business Days Between Two Dates (With Fixed Holidays)
Extends Task 1 by excluding public holidays from the business days count.
	3.	Task 3: Business Days Between Two Dates (With Dynamic Holiday Rules)
Further extends Task 2 by handling complex holiday rules, including dynamic date shifting for holidays falling on weekends.

## Key Features

	•	Component Reuse: Form and result components are reused across tasks for consistency and efficiency.
	•	TypeScript Integration: Type safety is maintained throughout the project for better code quality.
	•	Tailwind CSS: Provides a responsive and clean UI with minimal effort.
	•	Testing:
	•	Unit tests: Ensured using Vitest for critical functionality.
	•	End-to-End tests: Implemented with Cypress for a comprehensive testing approach.

## Tech Stack

	•	Vue.js 3: For building the application.
	•	TypeScript: Strongly typed language ensuring reliability.
	•	Tailwind CSS: Modern styling framework for responsive design.
	•	Vitest: Unit testing framework.
	•	Cypress: End-to-end testing.
	•	Vite: Fast build tool with excellent development server support.

## Recommended IDE Setup

VSCode + Volar (and disable Vetur).

## Project Setup

To get started with the project, follow these steps:

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
git clone https://github.com/nelvino/design-code-challenge.git
```

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
