const { DataTypes } = require('sequelize');

module.exports = sequelize => {
    sequelize.define('game', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status: {
            type: DataTypes.ENUM('incomplete', 'finished'),
            defaultValue: 'incomplete',
            allowNull: false
        },
        points: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        time: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        }
    })
}