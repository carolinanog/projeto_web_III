import express from 'express';
export const usersRouter = express.Router();

usersRouter.post("/users", (req, res) => {
    res.json(teste)
});