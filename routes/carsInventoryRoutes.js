import express from 'express';
import path from 'path';
import CarsControllers from '../controllers/CarsControllers.js';
import multer from 'multer';


export const router = express.Router();
const fileName = multer.diskStorage({ destination: (req, file, cb) => cb(null,'path.resolve(./public/img-uploads/)'), filename: (req, file, cb) => cb(null, 'TESTE') });
const uploadedImgFiles = multer({ fileName }).single('imagem');

//display all cars
router.get('/McQueenInternalSystem/allCars', CarsControllers.getAllCars); 
// //display one car by id
router.get('/McQueenInternalSystem/carByID/:id', CarsControllers.getCarByID); 
//display cars by name
router.get('/McQueenInternalSystem/carByName/:modelo', CarsControllers.getCarByName); 
//add new car to the DB
router.post('/McQueenInternalSystem/addNewCar', uploadedImgFiles, CarsControllers.addCarToInventory);
//update car info 
router.put('/McQueenInternalSystem/updateCarInfo/:id', CarsControllers.updateCarInfo);
//delete a car from the DB
router.delete('/McQueenInternalSystem/deleteCar/:id', CarsControllers.deleteCarFromInventory);