require("dotenv").config()

module.exports= 
{
  development: {
    username: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.DATABASE,
    port: process.env.PORT_DB,
    host: process.env.HOST_DB,
    dialect: process.env.DIALECT,
    dialectOptions: {
      timezone: "America/Sao_Paulo"
    },
    define: {
      timestamps: true,
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at"
    },
    timezone: "America/Sao_Paulo"
  }
}
