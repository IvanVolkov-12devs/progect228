module.exports = (sequelize, type) => {
    return sequelize.define('message', {
        id: {
            type: type.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        email:{
            type:type.STRING,
            allowNull:false
        },
        title:{
            type:type.STRING,
            allowNull: false
        },
        message:{
          type:type.STRING,
          allowNull:false
        },
        CreatedAt:{
            type:type.DATE,
            allowNull:false        }

UpdatedAt:{
            type:type.DATE,
    allowNull:false
}
})};