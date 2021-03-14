### _This project is not in a complete or portfolio ready state, and should not be considered representiational of professional work._


# Galactic Age Calculator

#### This application determines a user's age based on a planet's solar years.

#### By Collin Chapman

## Preview

  * Follow this [path](https://colchapm.github.io/galactic-age-calculator/) to view the project on GitHub Pages

## Technologies Used

* _Babel 7.6.4_
* _Babel/plugin-transform-modules-commonjs 7.6.0_
* _Bootstrap 4.5.0_
* _clean-webpack-plugin 3.0.0_
* _CSS_
* _css-loader 3.2.0_
* _eslint 6.3.0_
* _eslint-loader 3.0.0_
* _file-loader 1.1.6_
* _HTML5_
* _html-loader 0.5.5_
* _html-webpack-plugin 3.2.0_
* _JavaScript ES6_
* _Jest 24.9.0_
* _jQuery 3.5.1_
* _Node Package Manager 6.14.9_
* _popper.js 1.16.1_
* _style-loader 1.0.0_
* _webpack 4.39.3_
* _webpack-cli 3.3.8_
* _webpack-dev-server 3.11.2_

## Description

This goal of this project is to solidify my knowledge of Test Driven Development and Modern Environments within JavaScript. A solar year lasts 365 days on planet Earth. However, the length of a solar year varies form planet to planet. For instance, a solar year on Mercury lasts 88 days. This application is supposed to determine a user's age based on a planet's solar years. Furthermore, based on average life expectancy, this application will tell the user how many years they have left to live or how many years they have lived beyond life expectancy.

## Setup/Installation Requirements

* _Open the terminal on your local machine_
* _If [Node.js](https://nodejs.org/en/) and [Node Package Manager (npm)](https://www.npmjs.com/) are not installed on your local device, follow the instructions [here](https://www.learnhowtoprogram.com/intermediate-javascript/getting-started-with-javascript/installing-node-js)_
* _Navigate to the directory inside of which you wish to house this project_
* _Clone this project with the following command  `$ git clone <https://github.com/colchapm/galactic-age-calculator.git>`_
* _Navigate to the top level of the repository with the command `$ galactic-age-calculator`_
* _Recreate project environment and install required dependencies with terminal command `$ npm install`_
* _Create production environment with terminal command `$ npm run build`_
* Open project in a development server in the browswer of your choice with the command `$ npm run start`_
* _Lint code with the command `$ npm run lint`_
* _Run tests in Jest with the command `$ npm test`_

## Specifications

| Behavior | Input | Output |
|:---: |:---:|:---:|
| The program should return the age in Mercury years | When it receives 30 | It should return 7|
| The program should return the age in Venus years | When it receives 30 | It should return 19|
| The program should return the age in Mars years | When it receives 30 | It should return 56|
| The program should return the age in Jupiter years | When it receives 30 | It should return 356|
| The program should either return the number of years left to live on Earth or if current age exceeds average life expectancy, return the number of years lived beyond life expectancy | When it receives 30 | It should return 'You have 43 years left to live before reaching average life expectancy on Earth.'|

## Known Bugs

* If the user's age equals the calculated life expectancy, the application should return a message stating 'You are [age] years old and that is equal to the average life expectancy on Earth'. It is currently not doing this. 

## License

[MIT](https://choosealicense.com/licenses/mit/)

_Copyright (c) **2021 Collin Chapman**_

## Contact Information

cchap14@gmail.com