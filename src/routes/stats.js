const express = require('express')
const router = express.Router();
const personModel = require("./../models/person");

router.get('/stats', function(req,res){
    
    var humans = 0;
    var mutants = 0;
    personModel
    .find()
    .then((data) => {
        for (var i in data){
            if (data.hasOwnProperty(i)) {
            if(data[i].mutant == false){
                humans += 1;
                }
            else{
                mutants += 1;
            }
            }
        };
        var ratio = mutants/humans;
        res.json({"ADN":{"count_mutant_dna":mutants, "count_human_dna":humans,"ratio": Number(ratio.toFixed(1))}})
        }
    )
    .catch((error) => res.json({message: error}))
});


module.exports = router;