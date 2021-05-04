const express = require('express');
const Router = express.Router();
const FS = require('fs');
const PATH = require('path');
let users = JSON.parse(FS.readFileSync(PATH.resolve(__dirname,'../data/users.json'), (err, data) => {
    if(err){
        return err;
    }
    return data;
}));

const getUserByUsername = (username) => {
    user = users.find(user => user.username === username);
    return user;
}

Router.get('/:username', (req, res) => {
    res.json(getUserByUsername(req.params.username)).status(200);
})

module.exports = Router;