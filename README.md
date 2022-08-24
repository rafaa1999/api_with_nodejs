# api_with_nodejs

## Description
a fully functional example project based on the `MVC` pattern dealing with all these concept :
- REST API
    - CRUD
    -HTTP methods
- JWT 
- ORM
- Request Validation

## Technologies
- Nodejs
- Sequelize
- Javascript
- Express js & Express.js Middelware


## Installation
```
npm install
```


## Running the app
right here we can open two terminal to run the backend using ``` node index.js``` and run the frontend using ``` npm start ``` to run the whole application
or we can run them both using one command but we need to install npm packege names concurrently
```
npm concurrently
```
We need now to do some modification in the package.json:
```
"scripts": {
    "server":"nodemon index.js" ,
    "test": "echo \"Error: no test specified\" && exit 1",
    "client":"cd ../client && npm start",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },
```
## License

[MIT](https://choosealicense.com/licenses/mit/)
