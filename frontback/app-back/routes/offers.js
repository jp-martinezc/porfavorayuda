var express = require('express');
var router = express.Router();
const Mongolib = require("../db/Mongolib");

/* GET home page. */
router.get('/', function (req, res, next) {
    Mongolib.getDatabase(db => {
        Mongolib.findDocuments(db, docs => {
            res.send(docs);
        })
    })
});

router.post('/offers', function(req, res){
    res.send({
        type: 'POST',
        name: req.body.name,
        roll: req.body.roll
    });
});

router.put('/offers/:id',function(req,res,next){
    Job.findOneAndUpdate({_id: req.params.id},req.body).then(function(job){
        Job.findOne({_id: req.params.id}).then(function(job){
            res.send(job);
        });
    });
});


router.delete('/offers/:id',function(req,res,next){
    Job.findOneAndDelete({_id: req.params.id}).then(function(job){
        res.send(job);
    });
});

module.exports = router;