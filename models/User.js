const { DataTypes } = require('sequelize')

const conn = require('../db/conn')

const User = conn.define('User', {
    name: {
        type: DataTypes.STRING,
        require: true
    },
    email: {
        type: DataTypes.STRING,
        require: true
    },
    password: {
        type: DataTypes.STRING,
        require: true
    },
})

module.exports = User