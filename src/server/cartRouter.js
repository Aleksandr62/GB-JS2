const express = require('express');
const fs = require('fs');
const path = require('path');
const handler = require('./handler.js');
const stat = require('./stat.js');
const router = express.Router();
const cartJSONPath = path.resolve(__dirname, './db/userCart.json');
const statJSONPath = path.resolve(__dirname, './db/stat.json'); 

router.get('/', (req, res) => {
  fs.readFile(cartJSONPath, 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      res.send(data);
    }
  });
});

router.post('/', (req, res) => {
  handler(req, res, 'add', cartJSONPath);
  stat(req, 'add', statJSONPath);  
});
router.put('/all', (req, res) => {
  handler(req, res, 'clear', cartJSONPath);
  stat(req, 'clear', statJSONPath);    
});
router.put('/:id', (req, res) => {
  handler(req, res, 'change', cartJSONPath);
  stat(req, 'change', statJSONPath);    
});
router.delete('/:id', (req, res) => {
  handler(req, res, 'delete', cartJSONPath);
  stat(req, 'delete', statJSONPath);     
});

module.exports = router;
