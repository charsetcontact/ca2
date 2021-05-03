const Data = require('../models/data');

exports.getAll = (req, res, next) => {
    Data.getAll()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => console.log(err));
};

exports.add = (req, res, next) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const phone = req.body.phone;
    const address = req.body.address;
    const data = new Data(fname, lname, phone, address);
    data.save()
    .then(result => {
        res.status(200).json({ status: "okay" });
    })
    .catch(err => console.log(err));
};

exports.update = (req, res, next) => {
    const id = req.body.id;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const phone = req.body.phone;
    const address = req.body.address;
    Data.get(id)
    .then(data => {
        const updateddata = new Data(data.fname, data.lname, data.phone, data.address, data._id);
        if(data){
            if(fname){
                updateddata.fname = fname;
            }
            if(lname){
                updateddata.lname = lname;
            }
            if(phone){
                updateddata.phone = phone;
            }
            if(address){
                updateddata.address = address;
            }
            return updateddata.update();
        }
    })
    .then(result => {
        res.status(200).json({ status: "okay" });
    })
    .catch(err => console.log(err));
};

exports.delete = (req, res, next) => {
    const id = req.query.id;
    Data.delete(id)
    .then(result => {
        res.status(200).json({ status: "okay"});
    })
    .catch(err => console.log(err));
};