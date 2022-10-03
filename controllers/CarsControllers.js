import path from 'path';
import Car from '../models/carsModel.js';
// const templateDisplayInventory = path.resolve('..', 'view', 'internalSystem.ejs');

export default class CarsControllers {
      static addCarToInventory(req, res) {
      const { marca, modelo, ano, preco, categoria, cor, cambio, imagem } = req.body
      console.log(req.body)
      Car.create({
            marca, 
            modelo,
            ano,
            preco,
            categoria,
            cor,
            cambio,
            imagem
      })
      .then(result => res.status(200).json(result))
      .catch((err) => res.status(500).json({ message: 'Erro ao buscar a base de dados da Relâmpago McQueen.' + err}))
      // res.status(200).json(newCarAdded);
      //res.status(500).json({ message: 'Erro ao inserir o carro na base de dados da Relâmpago McQueen.' });
    }
      static getAllCars(req, res) {
            Car.findAll()
                  .then(() => res.status(200).json())
                  .catch((err) => res.status(500).json({ message: 'Erro ao buscar a base de dados da Relâmpago McQueen.' + err}))
      }
      // static async getCarByID(req, res) {
      // const allCars = await Car.findAll()
      //       .then(() => res.status(200).json())
      //       .catch((err) => res.status(500).json({ message: 'Erro ao buscar a base de dados da Relâmpago McQueen.' }))
      // }
      // static async getCarByName(req, res) {
      // const allCars = await Car.findAll()
      //       .then(() => res.status(200).json())
      //       .catch((err) => res.status(500).json({ message: 'Erro ao buscar a base de dados da Relâmpago McQueen.' }))
      // }
      // static async updateAllCarInfo(req, res) {
      // const allCars = await Car.findAll()
      //       .then(() => res.status(200).json())
      //       .catch((err) => res.status(500).json({ message: 'Erro ao buscar a base de dados da Relâmpago McQueen.' }))
      // }
      // static async updateCarInfoPartially(req, res) {
      // const allCars = await Car.findAll()
      //       .then(() => res.status(200).json())
      //       .catch((err) => res.status(500).json({ message: 'Erro ao buscar a base de dados da Relâmpago McQueen.' }))
      // }
      // static async deleteCarFromInventory(req, res) {
      // const allCars = await Car.findAll()
      //       .then(() => res.status(200).json())
      //       .catch((err) => res.status(500).json({ message: 'Erro ao buscar a base de dados da Relâmpago McQueen.' }))
      // }
};




//     static async getAllCars(req, res) {
//       res.status(200).json({'message': 'GET ALL success'})
//     };
//     static async getCarByID(req, res) {
//       res.status(200).json({'message': 'GET BY ID success'})
//     };
//     static async getCarByName(req, res) {
//           res.status(200).json({'message': 'GET BY NAME success'})
//     };
//     static async updateAllCarInfo(req, res) {
//           res.status(200).json({'message': 'UPDATE ALL INFO success'})
//     };
//     static async updateCarInfoPartially(req, res) {
//           res.status(200).json({'message': 'UPDATE PARTIAL success'})
//     };
//     static async deleteCarFromInventory(req, res) {
//           res.status(200).json({'message': 'DELETE success'})
//     };
//}


