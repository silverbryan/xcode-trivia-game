const { DataTypes } = require('sequelize');

module.exports = sequelize => {
    sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
}