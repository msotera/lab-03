//clears out console, gets rid of extra garbage whenever it reboots
console.clear

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

//register routes
//3 steps
//first - import the routes file
const routes = require('./routes');

//second - pass the router and execute express.Router() function
const router = routes(express.Router());

//third - register router with application 
app.use(router);


//error handlers
const { handle404Errors, errorHandler } = require('./errorHandling');
app.use('*', handle404Errors);
app.use(errorHandler);


app.listen(4000, () => console.log("Always Watching on port 4000"));