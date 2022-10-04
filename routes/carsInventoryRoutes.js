import express from 'express';
import path from 'path';
import CarsControllers from '../controllers/CarsControllers.js';


export const router = express.Router();


//display all cars
router.get('/McQueenInternalSystem/allCars', CarsControllers.getAllCars); 
// //display one car by id
router.get('/McQueenInternalSystem/carByID/:id', CarsControllers.getCarByID); 
//display cars by name
router.get('/McQueenInternalSystem/carByName/:modelo', CarsControllers.getCarByName); 
//add new car to the DB
router.post('/McQueenInternalSystem/addNewCar', CarsControllers.addCarToInventory);
//update car info completely
router.put('/McQueenInternalSystem/updatecarinfo/:id', CarsControllers.updateCarInfo);
//delete a car from the DB
router.delete('/McQueenInternalSystem/deleteCar/:id', CarsControllers.deleteCarFromInventory);