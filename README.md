[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

# example-supertest-api-test

This is an example code for testing api using [Jest](https://jestjs.io) and [supertest](https://github.com/ladjs/supertest) library.

### Expecttations:

- Response status code should be 200
- Response body should be format JSON
- Data response body should be macthing with data testing

### Data User :

```bash
const users = [
  { id: 1, name: "achmad" },
  { id: 2, name: "john" },
  { id: 3, name: "george" },
  { id: 4, name: "harry" },
  { id: 5, name: "kelly" },
  { id: 6, name: "olivia" },
  { id: 7, name: "peter" },
];
```

in the testing, user data id and name have to be macthed with user data id that requested in testing.

## Requirement

- [![Node.js](https://img.shields.io/badge/node-18.17.0-brightgreen?logo=node.js&logoColor=white "Node.js")](https://nodejs.org)

## Installation

You can install the project by clone it via GitHub :

```bash
git clone https://github.com/achmadprayoogo/example-supertest-api-test.git
npm install
```

## Running Tests

To run tests using [Jest](https://jestjs.io), run the following command

```bash
  npm run test
```

you can test also in postman with the following URL

```bash
  localhost:3000/
```

or with id parameter

```bash
  localhost:3000/1
```

## Authors

- [@achmadprayoogo](https://www.github.com/achmadprayoogo)
