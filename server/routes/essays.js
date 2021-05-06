//default stuff
const express = require('express');
const Router = express.Router();
const FS = require('fs');
const path = require('path');

//mongo stuff
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');

let essays = JSON.parse(
    FS.readFileSync(
        path.resolve(
            __dirname,
            '../data/essays.json'),
            (err, data) => {
                if(err){
                    return err;
                }
                return data;
}));

const getRecommendedEssays = (essays) => {
    return essays;
}

//mongoDB URI
mongoURI = 'mongodb://localhost:27017/essays';

//Create mongo connection
const conn = mongoose.createConnection(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//Initialize gfs
let stream;

conn.once('open', () => {
    //init stream
    stream = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'essays',
    });
})

//Create storage engine
const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
            if (err) {
                return reject(err);
            }
            const filename = buf.toString('hex') + path.extname(file.originalname);
            const fileInfo = {
                filename: filename,
                bucketName: 'essays',
            };
            resolve(fileInfo);
            });
        });
    },
});
const upload = multer({ storage });

//routing and calling of functions

//getting recommended essays from the database
Router.get('/', (req, res) => {
    res.json(getRecommendedEssays(essays)).status(200);
});

//posting a new file to the database
Router.post('/', upload.single('file'), (req, res) => {
    res.json({ file: req.file });
});

module.exports = Router;