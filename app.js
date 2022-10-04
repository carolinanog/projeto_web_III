import express from 'express';
import path from 'path';
import  { config } from 'dotenv';
import { router } from './routes/carsInventoryRoutes.js';
import './infra/connection.js';

const app = express();
const PORT = config().parsed.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(express.static(path.resolve()));
app.use(router);
app.set('view engine', 'ejs');


app.listen(PORT, () =>{
    console.log(`O servidor está funcionando na porta ${PORT}.`)
});
