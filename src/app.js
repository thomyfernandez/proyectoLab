import express from "express";
import { dirname } from "path";
import config from "./config";
import LTSroutes from './routes/STLtable.routes';

const path = require('path');
const morgan = require('morgan');
const mssql = require('mssql');
const myConnection = require('express-myconnection');


const app = express();

//settings
app.set('port', config.port);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
/*
app.use(myConnection(mssql, {
    host: 'localhost',
    user: 'root',
    password: '1166163488',
    port: '3000'
}))
*/
//routes

app.use(LTSroutes)

export default app