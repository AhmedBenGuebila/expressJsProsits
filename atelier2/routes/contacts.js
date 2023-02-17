// hothom iinik mghamtha
var express = require('express');
var router = express.Router();
//


//import Schema
var Contact=require('../models/contact.js')
//

router.get('/', (req, res, next)=> {
   Contact.find((err,contacts)=>{
    if(err){console.log(err)
    }else{
        res.json({title:'liste des contact' ,contactsList:contacts})
    }

   });
   
  //  res.json({message:'Hello'});
  });


router.post('/',(req,res,next)=>{
    var connect=new Contact({fullName:req.body.contactName,phone:req.body.contactNumber})
    connect.save((err,newContact)=>{
            if(err){
                console.log('there is an error:',err);
            }else{
                res.json(newContact);

            }
        
        
        })
    })

router.get('/:id',(req,res,next)=>{
    Contact.findById(req.params.id,(err,contact)=>{
        if(err){console.log(err)
        }else{
            res.json({title:'Contact' ,contact})
        }
    
       });

})


router.delete('/delete/:id',(req,res,next)=>{
   
 Contact.findByIdAndDelete(req.params.id,(err, cont)=>{
    if(err){console.log(err)}
    else{
        res.json({message:'Done'})
    }

 });

})

router.put('/update/:id',(req,res,next)=>{

Contact.findByIdAndUpdate(req.params.id,
    {
        fullName:req.body.contactName,phone:req.body.contactNumber
},(err,contact)=>{

if(err){
console.log(err)

}else{
res.json(contact)



    }


})


}



)





  module.exports = router;