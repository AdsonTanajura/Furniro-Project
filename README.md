# Furniro

Furniro is a modern project developed to simulate a product management application. This repository uses various modern technologies to ensure efficiency, modularity, and ease of maintenance.

## Technologies Used

- **React**: Library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **Vite**: Fast and lightweight build tool for front-end development.
- **Redux Toolkit**: Centralized state management for React applications.
- **Styled-components**: Component styling using CSS-in-JS.
- **Clerk**: Authentication and user management.
- **Axios**: HTTP client for making API requests.
- **React Router DOM**: Route management for React applications.
- **Formik & Yup**: Tools for form management and data validation.
- **JSON-Server**: Mock REST API for development and testing.

## Available Scripts

- `dev`: Starts the development server using Vite.
- `build`: Builds the project for production.
- `lint`: Runs ESLint for static code analysis.
- `preview`: Starts a preview of the build.
- `db`: Starts JSON-Server to serve the mock API located at `./mock/db.json`.

## How to Run the Project

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/furniro.git
   ```

2. Navigate to the project directory:

   ```bash
   cd furniro
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. To simulate a REST API with JSON-Server, run:
   ```bash
   npm run db
   ```

## Project Structure

- **src/**: Contains the project's source code.

  - **components/**: Reusable components.
  - **pages/**: Application pages.
  - **store/**: Redux configuration and slices.
  - **styles/**: Global styles and styled-components configurations.
  - **services/**: API configurations and requests using Axios.
  - **utils/**: Reusable functions and helpers.

- **mock/**: Contains the `db.json` file used by JSON-Server to mock a REST API.

## Features

- Centralized state management with Redux Toolkit.
- User authentication using Clerk.
- Dynamic navigation with React Router DOM.
- Form validation with Formik and Yup.
- Mock API for local development with JSON-Server.

## Contribution

Contributions are welcome! Follow the steps below to contribute:

1. Fork the repository.
2. Create a branch for your feature or fix:
   ```bash
   git checkout -b my-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "My new feature"
   ```
4. Push to the remote repository:
   ```bash
   git push origin my-feature
   ```
5. Open a Pull Request for review.
