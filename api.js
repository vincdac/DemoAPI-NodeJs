var express = require('express');
var router = express.Router();
var demoModel = require('./demoSchema');


router.get('/save', function(req, res) {
    var newDemo = new demoModel({ 
        ewb:4758,
	to:"Mumbai",
	from:"delhi",
	vehicleNo:"MH01 1252"
      });

    newDemo.save(function(err, data) {
        if(err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});

router.post('/save', function(req, res) {
    var newDemo = new demoModel();
       newDemo.ewb = req.body.ewb;
       newDemo.to = req.body.to;
       newDemo.from = req.body.from;
       newDemo.vehicleNo = req.body.vehicleNo;
       
       newDemo.save(function(err, data){
           if(err){
               console.log(error);
           }
           else{
               res.send("Data inserted");
           }
       });
    });

    router.get('/findall', function(req, res) {
        demoModel.find(function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
            }
        });  
     });

     router.get('/findfirst', function(req, res) {
        demoModel.findOne({ewb:459}, 
        function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
            }
        });  
    });

    router.get('/delete', function(req, res) {
        demoModel.remove({ewb:459}, 
        function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
            }
        });  
    });

    router.delete('/delete', function(req, res) {
        demoModel.deleteOne((req.body.id), 
        function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
                console.log("Data Deleted!");
            }
        });  
    });

    router.put('/update/:id', function(req, res) {
        _id=req.params.id
       ewb = req.body.ewb;
       to = req.body.to;
       from = req.body.from;
       vehicleNo = req.body.vehicleNo;

       let newDemo= {
        ewb: ewb,
        to: to,
        from: from,
        vehicleNo: vehicleNo
       };

        demoModel.findByIdAndUpdate(_id, newDemo,
             function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                console.log(data);
                res.send(data);
                console.log("Data updated!");
            }
        });  
    });




module.exports = router;
