const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const MongoConnect = callback =>{
    MongoClient.connect(
        `mongodb+srv://${process.env.databaseName}:${process.env.databasePass}@cluster0.zh1cx.mongodb.net/ca2?retryWrites=true&w=majority`,
        { useUnifiedTopology: true }
    )
    .then(client => {
        _db = client.db();
        callback();
    })
    .catch(err => {
        console.log(err)
        throw err;
    });
};

const getdb = () => {
    if(_db)
        return _db;
    else throw "no db found";
}

exports.MongoConnect = MongoConnect;
exports.getdb = getdb;