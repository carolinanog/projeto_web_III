import path from 'path';
import Car from '../models/carsModel.js';

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
      // static getCarByID(req, res) {
      // Car.findByPk(req.params.id)
      // .then((oneFound) => res.status(200).json(oneFound))
      // .catch((err) => res.status(500).json({ message: 'Erro ao buscar este carro na base de dados da Relâmpago McQueen.'}))
      // }
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
      .catch((err) => res.status(500).json({ message: 'Erro ao buscar este carro na base de dados da Relâmpago McQueen.'}))
      }
      static getCarByName(req, res) {
      Car.findAll(req.params.modelo)
      .then((foundCarModel) => {
        if (!foundCarModel) {
          res.status(404).json({ message: `Não temos este modelo de carro à venda na Relâmpago McQueen.` })
        }
        res.status(200).json(foundCarModel)       
        })
      .catch((err) => res.status(500).json({ message: 'Erro ao buscar este carro na base de dados da Relâmpago McQueen.'}))
      }  
}
   
//       static deleteCarFromInventory(req, res) {
//       Car.destroy(req.params.id)
//       .then((deletedCar) => res.status(204).end())
//       .catch((err) => res.status(500).json({ message: 'Erro ao deletar este carro da base de dados da Relâmpago McQueen.'}))
//        }
//        static getCarByName(req, res) {
//       Car.findOne(req.params.modelo, (err, result) => {

//       })
//             .then((allCars) => res.status(200).json(allCars))
//             .catch((err) => res.status(500).json({ message: 'Erro ao buscar a base de dados da Relâmpago McQueen.'}))
//       }

//         static updateAllCarInfo(req, res) {
//     Car.updateComplete(req.params.id, req.body, (err, result) => {
//       if (err) {
//         res.status(500).json({ error: err });
//       } else {
//         res.status(204).end();
//       }
//     });
//   }

//   updateCarInfoPartially(req, res) {
//     ProductDAO.updatePartial(req.params.id, req.body, (err, result) => {
//       if (err) {
//         res.status(500).json({ error: err });
//       } else {
//         res.status(204).end();
//       }
//     });
//   }

//   deleteCarFromInventory(req, res) {
//     ProductDAO.removeOne(req.params.id, (err, result) => {
//       if (err) {
//         res.status(500).json({ error: err });
//       } else {
//         res.status(204).end();
//       }
//     });
//   }
// }






//       static async getCarByName(req, res) {
//       const allCars = await Car.findAll()
//             .then(() => res.status(200).json())
//             .catch((err) => res.status(500).json({ message: 'Erro ao buscar a base de dados da Relâmpago McQueen.' }))
//       }
//       static async updateAllCarInfo(req, res) {
//       const allCars = await Car.findAll()
//             .then(() => res.status(200).json())
//             .catch((err) => res.status(500).json({ message: 'Erro ao buscar a base de dados da Relâmpago McQueen.' }))
//       }
//       static async updateCarInfoPartially(req, res) {
//       const allCars = await Car.findAll()
//             .then(() => res.status(200).json())
//             .catch((err) => res.status(500).json({ message: 'Erro ao buscar a base de dados da Relâmpago McQueen.' }))
//       }
//       static async deleteCarFromInventory(req, res) {
//       const allCars = await Car.findAll()
//             .then(() => res.status(200).json())
//             .catch((err) => res.status(500).json({ message: 'Erro ao buscar a base de dados da Relâmpago McQueen.' }))
//       }
// };

