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
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING
    })
}
