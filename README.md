## About the app

This is a simple Weather App, that giving the information about current weather at user's location.
Or they can searching for other locations too.

The production version is available at: [weather-nab.netlify.app](https://weather-nab.netlify.app/)

## How it work?

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [https://localhost:3000](https://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

### Deployment

I've already setted up the environment for production deployment via [Netlify](https://www.netlify.com/).
Everytime you push codes to the `main` branch, it will be deployed automatically.

## Development

If you want to contribute for this project, please take a look at this section.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Technology

- `scss` for building styles
- `React Hooks` for building components
- `Jest` for testing functions

### Project Structure

#### src/

This is main folder, all codes for production App will be in here.

- `index.js` entry file for running app.

- `index.scss` global styles will be written here

- `apis/` handlers for fetching data from api.
Each file just handle one api, name of the file should be consistent with what they are doing.

- `components/` this is place to store the components, each component will includes 4 files `.jsx` `.module.css` `.test.js`.
If you want to create a new component, please following the rules:
1. Name of the component's folder should be Capitalize.
2. Name of the `.jsx` `.module.scss` `.test.js` files should be the same as Folder.
3. `index.js` file just do one job is export component from `.jsx` file.

- `hooks/` you can write some custom hooks here.

- `images/` store the images here

- `styles/` this folder is for writing the utils scss like `variables` `mixins` or `functions`

- `utils/` this folder incules `constant.js`, the file you can store some constants for using in app. Beside, there are a lot of utils function handler that will be reuse many time in app. Feel free to write your own utils function, just make it more meaning and name it `Camelcase`.

#### config/

This folder includes some config files to run `webpack` in development mode, or for production build.

#### scripts/

Scripts to run server local, for run test and build production.
