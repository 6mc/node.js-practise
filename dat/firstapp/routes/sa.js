var express = require('express');
var router = express.Router();

router.get('/',function(req,res) {
res.send('sa');
});

router.get('/:name',function(req,res) {
    res.send('sa'+req.params.name+' !');
});

module.exports=router;