# heinzelmann.digital

This project is the Angular-based implementation of heinzelmann.digital, a personal website.

## Local Development Setup

1. **Prerequisites:**
   - Node.js (LTS version)
   - npm (comes with Node.js)

2. **Installation:**
   ```
   npm install
   ```

3. **Running the application:**
   ```
   npm start
   ```
   This will start the development server. Navigate to `http://localhost:4200/` in your browser.

4. **Building for production:**
   ```
   npm run build:gh-pages
   ```
   The build artifacts will be stored in the `docs/` directory, ready for GitHub Pages deployment.

## Deployment

This project is configured for deployment on GitHub Pages. The production build is set up to use the correct base href for the GitHub Pages environment.

## Project Structure

- `src/app/`: Contains the main application code
- `src/assets/`: Stores static assets including images and markdown files
- `src/index.html`: The main HTML file
- `angular.json`: Angular CLI configuration file
- `package.json`: NPM package configuration

## Additional Information

For more information on Angular CLI commands, run `ng help` or check out the [Angular CLI Overview and Command Reference](https://angular.io/cli).
