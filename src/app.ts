
import express from 'express';
import { format } from 'path';

import { BadgerBook } from './model/badger-book';

const errorHandler = require('errorhandler');
const morgan = require("morgan");
const app = express();
const rateLimit = require("express-rate-limit");
const bodyParser = require('body-parser');
const port = 56933;

app.use(morgan(':date ":method :url" :status :res[content-length] - :response-time ms'));

morgan.token('date', function() {
    var p = new Date().toString().replace(/[A-Z]{3}\+/,'+').split(/ /);
    return( p[2]+'/'+p[1]+'/'+p[3]+':'+p[4]+' '+p[5] );
});

process.on('uncaughtException', function (exception) {
    console.log(exception);
});

process.on('unhandledRejection', (reason, p) => {
    console.log("Unhandled Rejection at: Promise ", p, " reason: ", reason);
});

app.use(errorHandler({ dumpExceptions: true, showStack: true })); 

// JSON Body Parser Configuration
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Request Throttler
app.set('trust proxy', 1);
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 500 // limit each IP to 500 requests per windowMs (minute)
});
app.use(limiter);

// Allow CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/book', (req, res) => {
  res.send(BadgerBook.constructRandom());
});

const DEFAULT_NUM_BOOKS = 4;
app.get('/api/books', (req, res) => {
    let num_books = DEFAULT_NUM_BOOKS;
    if(req.query.amount) {
        const amount = parseInt(req.query.amount as string);
        if(amount < 0) { // assholes
            num_books = 0;
        } else if (amount > 50) { // malicious assholes
            num_books = 50;
        } else {
            num_books = amount;
        }
    }
    const books = []
    for(let i = 0; i < num_books; i++) { books.push(BadgerBook.constructRandom()); }
    res.send(books);
});

// Error Handling
app.use((err: any, req: any, res: any, next: any) => {
    let datetime: Date = new Date();
    let datetimeStr: string = `${datetime.toLocaleDateString()} ${datetime.toLocaleTimeString()}`;
    console.log(`${datetimeStr}: Encountered an error processing ${JSON.stringify(req.body)}`);
    res.status(400).send({
        "error-msg": "Oops! Something went wrong. Check to make sure that you are sending a valid request. Your recieved request is provided below. If it is empty, then it was most likely not provided or malformed. If you have verified that your request is valid, please contact the CS571 staff.",
        "error-req": JSON.stringify(req.body),
        "date-time": datetimeStr
    })
});

// Open Server for Business
app.listen(port, () => {
    console.log(`CS571 API :${port}`)
});