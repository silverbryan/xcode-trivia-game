const { DataTypes } = require('sequelize');

module.exports = sequelize => {
    sequelize.define('question', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        options: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        }
    });
}