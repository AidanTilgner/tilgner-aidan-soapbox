const express = require('express');
const Router = express.Router();
const FS = require('fs');
const PATH = require('path');
let topics = JSON.parse(FS.readFileSync(PATH.resolve(__dirname,'../data/topics.json'), (err, data) => {
    if(err){
        return err;
    }
    return data;
}));

const getRecommendedTopics = (topics) => {
    return topics;
}

Router.get('/', (req, res) => {
    res.json(getRecommendedTopics(topics)).status(200);
})

module.exports = Router;