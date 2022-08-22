import express from "express";
import config from "./config";

import LTSroutes from './routes/STLtable.routes'

const app = express()

//settings
app.set('port', config.port)

app.use(LTSroutes)

export default app