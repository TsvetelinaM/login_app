Prerequisites - installed Node.js

After cloning the repo locally run the following commands to install the required dependencies :

### `npm install` or `yarn add`

To run the application:

### `npm start` or `yarn start`

Overview:
A simple login app, that uses mocked data for validating entered user credentials - email and password. It shows an error if the entered info is wrong/missing or redirects the user to the Home page.
It contains not protected routes -> /login and /reset and protected -> /home.
On the /reset route a reset password form is shown that works with an existing in our mocked data email. If the email is wrong -> the user will see an error message shown in the right top corner or if it is successful -> a success message will appear.
The error handling is presented through notistack.
The app supports localization - two languages - BG and EN (the language dropdown is located in the top right corner).
The state management is handled using Redux.

Folder Structure:

Public:
└───i18n
public/i18n -> bg.json
public/i18n -> en.json

Src:
├───assets
│ └───images
├───components
│ ├───buttons
│ ├───containers
│ ├───dropdowns
│ ├───form
│ ├───headers
│ └───layout
├───pages
│ ├───home
│ ├───localization
│ ├───login
│ ├───main
│ ├───notFound
│ └───reset
└───services
├───api
├───i18n
├───snackbar
├───utils
└───validations

In the assets folder are stored all assets needed for the app - like images.

Components - reusable small parts, styled using styled-components library.
Pages - the whole pages used for the routing. The components needed for them are stored in the Components folder.
Services:
api-> the mocked data used for the login functionality ('users.json')
i18n-> configurations for the localization
snackbar -> configuration for the used notification system
utils -> variables used in the application or other common util functions
validations -> main validations used in the application.
