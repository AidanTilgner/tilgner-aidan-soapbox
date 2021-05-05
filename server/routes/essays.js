const express = require('express');
const Router = express.Router();
const FS = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

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

//middleware for getting forms
Router.use(bodyParser.json);
Router.use(methodOverride('_method'));

//mongoDB URI
mongoURI = 'mongodb://localhost:27017/soapbox';

//Create mongo connection
const conn = mongoose.createConnection(mongoURI);

//Initialize gfs
let gfs;

conn.once('open', () => {
    //init stream
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('essays');
})

//Create storage engine
const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err){
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'essays'
                };
                resolve(fileInfo);
            });
        });
    }
});
const upload = multer({ storage });

//routing and calling of functions

//getting recommended essays from the database
Router.get('/', (req, res) => {
    res.json(getRecommendedEssays(essays)).status(200);
});

//posting a new file to the database
Router.post('/', upload.single('file'), (req, res) => {c
    console.log('file recieved')
    res.json({ file: req.file });
});

module.exports = Router;