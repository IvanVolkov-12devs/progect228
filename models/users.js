// module.exports = (sequelize, type)=>{
//     return sequelize.define('users',{
//
//         id:{
//             type:type.INTEGER.UNSIGNED,
//             primaryKey:true,
//             autoIncrement:true
//                    },
//         username:{
//             type:type.STRING,
//        //     unique: true
//         },
//         password:type.STRING,
//         // unique: true
//     })
// };
module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        username:{
            type:type.STRING,
            unique: true,
            allowNull:false
      },
password:{
        type:type.CHAR,
allowNull:false

},
        createdAt:{
            type:type.DATE,
            allowNull:true

        },
updatedAt:{
  type:type.DATE,
   allowNull:true

}
    })
};
