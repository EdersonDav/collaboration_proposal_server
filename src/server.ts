import "reflect-metadata";
import cors from "cors";
import express from "express";

import { router } from './routes'

const app = express();

app.use(express.json())

app.use(router)

app.use(cors());


app.listen(5000, () => {
  console.log('server running on port 5000');
})