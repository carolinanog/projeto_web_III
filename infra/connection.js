import { Sequelize } from 'sequelize';
import config from '../src/config.cjs';
import Car from '../models/carsModel.js';

const connectionPG = new Sequelize(config.development);
Car.init(connectionPG);