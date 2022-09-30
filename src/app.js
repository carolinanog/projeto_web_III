import express from 'express';
import path from 'path';
import pkg from 'dotenv';
import { router } from '../routes/routes.js';
import { ulid } from 'ulid';

const app = express();
const { PORT }= pkg.config().parsed;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve()));
app.use(router);
app.set('view engine', 'ejs');

app.listen(PORT, () =>{
    console.log(`O servidor está funcionando na porta ${PORT}. Acesse: http://localhost/internalSystemMcQueen`)
});