import express from 'express';
import CarsControllers from '../controllers/CarsControllers.js';
export const router = express.Router();
console.log(typeof CarsControllers.getAllCars)