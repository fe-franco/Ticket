'use strict'
const express = require('express')
const router = express.Router()
const fs = require('fs');
const path = require('path');
const files = fs.readdirSync(__dirname).filter(file => file !== 'index.js');    
  
files.forEach(file => {
    const { name } = path.parse(file); 
   router.use('/'+name.substring(0, name.length - 6).replace('.','-'), require(`./${name}`))

});

module.exports = router
