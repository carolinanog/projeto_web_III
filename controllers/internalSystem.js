import path from 'path';
import { CarsInventory } from '../models/carsDB.js';
const internalSystemTemplate = path.resolve('.', 'views', 'internalSystem.ejs');

export const getInternalSystem = ((req, res) => {
    CarsInventory.getAllCarsDetails((err, row) => {
    if(err) {
      return res.status(500).json({ message: 'Houve um problema ao acessar o banco de dados!' });
    };
    if(!row) {
      return res.status(404).json({ message: 'Dados de login e/ou senha incorretos!' });
    }
      res.render(internalSystemTemplate, {
        row 
        })
    });
}); 