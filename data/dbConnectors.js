const mongoose = require('mongoose')
const Sequelize = require('sequelize')
const _ = require('lodash')
const casual = require('casual')
const fs = require('fs');
//MongoDB Connections

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/friends', { useNewUrlParser: true, useUnifiedTopology: true })
     
mongoose.set('useFindAndModify', false);
const friendsSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
    language: {
        type: String
    },
    email: {
        type: String
    },
    contact: {
        type: Array
    },
})

const Friends = mongoose.model('friends', friendsSchema);

// MYSQL Connection
const mysqlsequelize = new Sequelize('graphql_test_competes','prasun','chakraborty',{
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
})
mysqlsequelize.authenticate()
.then(function (err) {
    if (err) {
       console.log('There is connection in ERROR');
    } else {
       console.log('MYSQL Connection has been established successfully');
    }
   });
// SQLite Connection
// const sqlsequelize = new Sequelize('database', null, null, {
//     dialect: 'sqlite',
//     storage: './competitor.sqlite'
// });

const Competitor = mysqlsequelize.define('competitor', {
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    team: { type: Sequelize.STRING }
});
// fs.readdir(process.cwd(), function (err, files) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     if (true) {
//         Competitor.sync({ force: true }).then(() => {
//             _.times(20, (i) => {
//                 Competitor.create({
//                     firstName: casual.first_name,
//                     lastName: casual.last_name,
//                     team: casual.country,
//                 });
//             });
//         })
//     }
// });

module.exports = { Friends, Competitor }