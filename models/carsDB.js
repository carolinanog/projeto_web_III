import sqlite3 from 'sqlite3';
import path from 'path';

export class CarsInventory {
    static getDB = new sqlite3.Database(path.resolve('.', 'database', 'cars.db'));
    static getAllCars = (cb) => {
        this.getDB.all(`SELECT marca, modelo, ano FROM cars`, cb)
    }
    static getOneCar = (modelo, ano, cb) => {
        this.getDB.get(`SELECT modelo FROM cars WHERE modelo = ?, ano = ?`, [modelo, ano], cb)
    }
    static getAllCarsDetails = (cb) => {
    this.getDB.all(`SELECT * FROM cars`, cb)
    }
}

