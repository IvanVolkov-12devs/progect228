module.exports = (sequelize, type) => {
    return sequelize.define('message', {
        id: {
            type: type.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        FromUserId: {
            type: type.STRING,
            allowNull: false
        },
        ToUserId: {
            type: type.STRING,
            allowNull: false
        },
        email: {
            type: type.STRING,
            allowNull: false
        },
        title: {
            type: type.STRING,
            allowNull: false
        },
        message: {
            type: type.Sequelize.TEXT,
            allowNull: false
        },

        isNew: {
            type: type.BOOLEAN,
            //  allowNull: false,
            defaultValue: true
        },
        isDeleted: {
            type: type.BOOLEAN,
            //  allowNull:false,
            defaultValue: false
        },
        isFavorites: {
            type: type.BOOLEAN,
            //allowNull:false,
            defaultValue: false
        },
        createdAt: {
            type: type.DATE,
            allowNull: false
        },
        updatedAt: {
            type: type.DATE,
            allowNull: false
        }


    })
};