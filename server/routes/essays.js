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

//get essays as a variable
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

const getEssayById = (essays, id) => {
    return essays.find(essay => essay.id === id);
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

//getting a specific essay by id
Router.get('/:id', (req, res) => {
    let essay = getEssayById(essays, req.params.id);
    if(essay !== false){
        res.json(essay).status(200)
    }else{
        res.status(404);
    }
});

//changing the karma of an essay by id
Router.put('/:id/karma', (req, res) => {
    console.log(req.params.id)

    essay = getEssayById(essays, req.params.id)

    console.log(essay);
    console.log(req.body)
    
    newEssay = essay;
    newEssay.karma += req.body.karma;

    essays.splice(essays.indexOf(essay), 1, newEssay)

    FS.writeFileSync(
        path.resolve(
            __dirname,
            '../data/essays.json'),
        JSON.stringify(essays)
    )

    res.json(essays);
})

//posting a new file to the database
Router.post('/', (req, res) => {
    let newEssay = req.body;
    newEssay.id = crypto.randomBytes(12).toString('hex');
    newEssay.keywords = newEssay.thesis.split(' ');
    newEssay.karma = 0;

    essays.push(newEssay)

    FS.writeFileSync(
        path.resolve(
            __dirname,
            '../data/essays.json'),
        JSON.stringify(essays)
    )
    res.json(essays);
});

module.exports = Router;