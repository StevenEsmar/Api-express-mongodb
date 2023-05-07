const express = require('express')
const router = express.Router();
const personModel = require("./../models/person");

router.post('/mutant', function(req, res){
    const dnaInserted = req.body.dna;
    var counter = 0;
    for(var i=0; i < dnaInserted.length; i++) {
        for(var j=0; j < dnaInserted[i].length; j++) {
            if( (dnaInserted[i][j]==dnaInserted[i][j-1])&&
                (dnaInserted[i][j]==dnaInserted[i][j-2])&&
                (dnaInserted[i][j]==dnaInserted[i][j-3])){
                counter += 1; 
            } 
            if( (i == j)&&
                (i > 2)&&
                (dnaInserted[i][j]==dnaInserted[i-1][j-1])&&
                (dnaInserted[i][j]==dnaInserted[i-2][j-2])&&
                (dnaInserted[i][j]==dnaInserted[i-3][j-3])){
                counter += 1;
            }
            if( (i > 2)&&
                (dnaInserted[i][j]==dnaInserted[i-1][j])&&
                (dnaInserted[i][j]==dnaInserted[i-2][j])&&
                (dnaInserted[i][j]==dnaInserted[i-3][j])){
                counter += 1;
            }
        }
    }

    if(counter > 1){
        const person = personModel({
            dna:"sdfsdfsdfsd",
            mutant: true 
            }
        );
        
        person
            .save()
            .then((data)=>res.status(200).send("{mutant: true}"))
            .catch((error)=> res.send(error));    
        //return res.status(200).send("{mutant: true}");

    }else if (counter <= 1){        
        const person = personModel({
            dna:"asdasdasd",
            mutant: false
            }
        );
        
        person
            .save()
            .then((data)=>res.status(403).send("{mutant: false}"))
            .catch((error)=> res.send(error));    
        //return res.status(200).send("{mutant: true}");  
    }
});

module.exports = router;