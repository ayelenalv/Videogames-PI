const { DataTypes } = require ('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('genre', {
        name: {
        type: DataTypes.STRING,
        /* primaryKey: true, */
        allowNull: false
        }
        
    });
    
}