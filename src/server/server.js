const express = require('express');
const fs = require('fs');
const path = require('path');
const cartRouter = require('./cartRouter.js');
const app = express();
const catalogJSONPath = path.resolve(__dirname, './db/products.json')

app.use(express.json());
app.use('/', express.static(path.resolve(__dirname, '../public')));
app.use('/api/cart', cartRouter);

app.get('/api/products', (req, res) => {
  fs.readFile(catalogJSONPath, 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({result: 0, text: err}));
    } else {
      res.send(data);
    }
  });
});

const port = 3000; 
app.listen(port, () => {
  console.log(`Listening ${port} port`);
});
