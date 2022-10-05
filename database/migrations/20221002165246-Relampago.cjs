module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cars', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('gen_random_uuid()'),
        primaryKey: true,
        allowNull: false,
        autoIncrement: false,
        unique: true
      },
      marca: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      modelo: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      ano: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      preco: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      categoria: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      cor: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      cambio: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('cars')
  },
  tableName: "cars",
  schema: 'public'
};

