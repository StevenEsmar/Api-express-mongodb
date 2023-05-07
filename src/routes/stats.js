const express = require('express')
const router = express.Router();

var humans = 400;
var mutants = 150;
var ratio = mutants/humans;

router.get('/stats', function(req,res){
    res.send(`{“count_mutant_dna”:${mutants}, “count_human_dna”:${humans}: “ratio”:${ratio}}`);
});


module.exports = router;