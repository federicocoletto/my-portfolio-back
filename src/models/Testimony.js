const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Testimony = sequelize.define('testimony', {
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	comment: {
		type: DataTypes.TEXT,
		allowNull: false
	},
});

module.exports = Testimony;