const express = require('express');
const Router = express.Router();
const FS = require('fs');
const PATH = require('path');
let essays = JSON.parse(FS.readFileSync(PATH.resolve(__dirname,'../data/essays.json'), (err, data) => {
    if(err){
        return err;
    }
    return data;
}));

const getRecommendedEssays = (essays) => {
    return essays;
}

Router.get('/', (req, res) => {
    res.json(getRecommendedEssays(essays)).status(200);
})

module.exports = Router;