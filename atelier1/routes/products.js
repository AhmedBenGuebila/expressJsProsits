var express = require('express');
var router = express.Router();
var products=require('../products.json');

router.get('/', function(req, res, next) {
    res.json(products);
  });
  router.get('/:id', function(req, res, next) {
    res.json(products[req.params.id]);
  }); 

  router.get('/:id/:qt', function(req, res, next) {
    res.json({"id":products[req.params.id],
              "qt" :req.params.qt,
              "unit_price":products[req.params.id]["price"],
              "total_price":req.params.qt*products[req.params.id]["price"],

            });
    }); 

  


  router.get('/test/test/test', function(req, res, next) {
    for(i=0;i<products.length;i++){
    res.send(products)

    }  
    }); 


  module.exports = router;