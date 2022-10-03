import express from 'express';
import CarsControllers from '../controllers/CarsControllers.js';

export const router = express.Router();

//display all cars
router.get('/McQueenInternalSystem/allCars', CarsControllers.getAllCars); 
// //display one car by id
// router.get('/McQueenInternalSystem/cars/:id', CarsControllers.getCarByID); 
// // //display cars by name
// router.get('/McQueenInternalSystem/cars/:modelo', CarsControllers.getCarByName); 
//add new car to the DB
router.post('/McQueenInternalSystem/addNewCar', CarsControllers.addCarToInventory);
// // //update completely a car info
// router.put('/McQueenInternalSystem/updatecartotal/:id', CarsControllers.updateAllCarInfo);
// // //update partially a car info
// router.patch('/McQueenInternalSystem/updatecarpartial/:id', CarsControllers.updateCarInfoPartially);
// // //delete a car from DB
// router.delete('/McQueenInternalSystem/deletecar/:id', CarsControllers.deleteCarFromInventory);