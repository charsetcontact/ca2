const getdb = require('../util/database').getdb;
const mongodb = require('mongodb');

module.exports = class Data{
    constructor(fname, lname, phone, address, id){
        this.fname = fname;
        this.lname = lname;
        this.phone = phone;
        this.address = address;
        this._id = id;
    }

    save(){
        const db = getdb();
        return db.collection('data').insertOne(this);
    }

    update(){
        const db = getdb();
        return db.collection('data').updateOne({ _id: new mongodb.ObjectID(this._id) }, { $set: this });
    }

    static get(id){
        const db = getdb();
        return db.collection('data').find({ _id: new mongodb.ObjectID(id) }).next();
    }

    static getAll(){
        const db = getdb();
        return db.collection('data').find().toArray();
    }

    static delete(id){
        const db = getdb();
        return db.collection('data').deleteOne({ _id: new mongodb.ObjectID(id) });
    }
};