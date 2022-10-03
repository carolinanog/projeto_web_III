import { Sequelize, Model } from "sequelize";

export default class Car extends Model {
    static init(sequelize){
        super.init({
            marca: Sequelize.STRING(150),
            modelo: Sequelize.STRING(150),
            ano: Sequelize.INTEGER,
            preco: Sequelize.FLOAT,
            categoria: Sequelize.STRING(150),
            cor: Sequelize.STRING(100),
            cambio: Sequelize.STRING(50),
            imagem: Sequelize.STRING(150)
        }, {
        sequelize
        })
        return this
    }
}


