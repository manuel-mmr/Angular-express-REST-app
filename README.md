# Test App #

* Version 1.0
* Author: Manuel Mediavilla Rodriguez

### Description

REST application which includes the Client and Server side with Angular2
and Express - Node.js

The *Client* side implements the Master Detail Pattern displaying a list of objects retrieve from the Server side, and 
if an object is selected from the list, the application will retrieve and show the object details.

The *Server* side implements an API with the followings entry points:

* `/api/posts`: retrieve the list of objects.
* `/api/posts/:id`: retrieve the object details depending on te id.

### How do I get set up?

Run ` npm install ` to install the dependencies.

### Build

Run `ng run build` or `npm run build` to build the project. Navigate to `http://localhost:3000/`

Note: We need to have installed *angular-cli* to run the `ng run build` command, to install it 
run `npm install -g angular-cli`.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng run build`.
