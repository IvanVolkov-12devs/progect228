module.exports = (sequelize, type) => {
    return sequelize.define('message', {
        id:{
            type: type.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        FromUserId:{
            type:type.STRING,
            unique: true,
            allowNull:false
        },
        ToUserId:{
            type:type.STRING,
            unique: true,
            allowNull:false
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
            allowNull:false
        },
        UpdatedAt:{
            type:type.DATE,
            allowNull:false
        },
        isNew:{
            type: type.BOOLEAN,
          //  allowNull: false,
            defaultValue: true
        },
        isDeleted:{
            type:type.BOOLEAN,
          //  allowNull:false,
            defaultValue: true
        },
        isFavorites:{
            type:type.BOOLEAN,
            //allowNull:false,
            defaultValue:true
        }
})};