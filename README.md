# Template for React Projects

Includes setup for:

- [No-Sweat™](#Acknowledgements) Eslint and Prettier Setup
- [TailwindCSS](https://tailwindcss.com/)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)

## Required VS Code Extension

- [ESlint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Instructions

1. Fork Repo

2. Clone new forked repo

```
git clone <newForkedRepoURL>
```

3. Change project name in `package.json` and `package-lock.json`

4. Install dependencies

```
npm install
```

5. You might have to restart VS Code for ESlint and Prettier to start working

## VS Code Configs

The `settings.json` in `.vscode` is needed for the editor to lint and fix the code. It is needed for [No-Sweat™](#Acknowledgements) Eslint and Prettier Setup.

## Acknowledgements

Thanks to [Wes Bos](https://github.com/wesbos) for [No-Sweat™ Eslint and Prettier Setup](https://github.com/wesbos/eslint-config-wesbos)

# React ReadMe

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs `npm run watch:css` first to create the file that tailwind uses for styles

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Runs `npm run buil:css` first to create the file that tailwind uses for styles

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
