import path from 'path';
import Car from '../models/carsModel.js';
import { Op } from 'sequelize';
export default class CarsControllers {
      static addCarToInventory(req, res) {
      const { marca, modelo, ano, preco, categoria, cor, cambio, imagem } = req.body;
      Car.create({marca, modelo, ano, preco, categoria, cor, cambio, imagem})
      .then((newCarAdded) => res.status(201).json(newCarAdded))
      .catch((errormessage) => res.status(500).json({ errormessage: 'Erro ao inserir o carro na base de dados da Relâmpago McQueen.' }))
    }
      static getAllCars(req, res) {
      Car.findAll()
      .then((allCars) => res.status(200).json(allCars))
      .catch((err) => res.status(500).json({ message: 'Erro ao buscar a base de dados da Relâmpago McQueen.'}))
      }
       static getCarByID(req, res) {
        Car.findByPk(req.params.id)
        .then((foundCar) => {
         if (!foundCar) {
          res.status(404).json({ message: `Não temos este carro à venda na Relâmpago McQueen.` })
        }
        res.status(200).json(foundCar)       
        })
        .catch((err) => res.status(500).json({ message: 'Erro ao buscar este carro na base de dados da Relâmpago McQueen.'}))
        }
      static deleteCarFromInventory(req, res) {
        const { id } = req.params;
        Car.destroy({ where: { id } })
        .then((deletedCar) => {
          if (!deletedCar) {
          res.status(404).json({ message: `Não é possível deletar este carro, ele não consta na base de dados da Relâmpago McQueen.` })
          }
        res.status(204).json({ message: `Carro deletado da base de dados da Relâmpago McQueen.` })   
        })
        .catch((err) => res.status(500).json({ message: 'Erro ao deletar este carro na base de dados da Relâmpago McQueen.'}))
      }
      static getCarByName(req, res) {
        const { modelo } = req.params;
        Car.findAll({ where: { modelo: { [Op.iLike]: `%${modelo}%` }}})
      .then((foundCarModel) => {
        if (!foundCarModel) {
          res.status(404).json({ message: `No momento não temos este modelo de carro disponível na Relâmpago McQueen.` })
        }
        res.status(200).json(foundCarModel)       
        })
      .catch((err) => res.status(500).json({ message: 'Erro ao buscar este modelo na base de dados da Relâmpago McQueen.'}))
      }  
      static updateCarInfoPartially(req, res) {
        const { id } = req.params;
        Car.update(req.body, { where: { id } })
        .then((partialUpdatedCar) => res.status(204).json(partialUpdatedCar))
        .catch((err) => res.status(500).json({ message: 'Erro ao buscar este modelo na base de dados da Relâmpago McQueen.'}))
      }
      static updateCarInfo(req, res) {
        const { id } = req.params;
        Car.update(req.body, { where: { id } })
        .then(() => res.status(204).end())
        .catch((err) => res.status(500).json({ message: 'Erro ao buscar este modelo na base de dados da Relâmpago McQueen.'}))
      }
}   

