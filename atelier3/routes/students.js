
// hothom iinik mghamtha
var express = require('express');
const { exists } = require('../models/student.js');
var router = express.Router();
//


//import Schema
var Student=require('../models/student.js')
//

router.get('/', (req, res, next)=> {
   Student.find((err,Students)=>{
    if(err){console.log(err)
    }else{
        res.json({title:'liste des etudiant' ,studentList:Students})
    }

   });
   
  //  res.json({message:'Hello'});
  });


router.post('/',(req,res,next)=>{
   
   
    var student=new Student({name:req.body.Name,age:req.body.Age});
    Student.findOne({name:student.name},(err,student)=>{
    
        if(err){
          
            console.log(err)
        } else if(student != null){

            res.json({message:'Name already exist'})
        } else if(student == null){

            new Student({name:req.body.Name,age:req.body.Age}).save((err,newStudent)=>{
                if(err){
                    console.log('there is an error:',err);
                    }else{
                       res.json(newStudent);
                    }
                 })
        }
    
    
    })
 

}
)
    
router.get('/age',(req,res,next)=>{
    Student.find({age:{$gte : 18}},(err,students)=>{
        if(err){console.log(err)
        }else{
            res.json({title:'Student' ,students})
        }
    
       });

})

router.get('/note',(req,res,next)=>{
    Student.find({note:{$gt:10}},(err,students)=>{
        if(err){console.log(err)
        }else{
            res.json({title:'Student' ,students})
        }
    
       }).sort('note');
    
    
})



router.get('/:id',(req,res,next)=>{
    Student.findById(req.params.id,(err,student)=>{
        if(err){console.log(err)
        }else{
            res.json({title:'Student' ,student})
        }
    
       });

})


router.delete('/:id',(req,res,next)=>{
   
 Student.findByIdAndDelete(req.params.id,(err, student)=>{
    if(err){console.log(err)}
    else{
        res.json({message:'Done'})
    }

 });

})



router.put('/plusdeux',(req,res,next)=>{

    Student.updateMany({age:{$gt:18},name:/^a/},{$inc:{note:2}},(err,student)=>{
    
    if(err){
    console.log(err)
    
    }else{
      res.json(student)
    

        }
    
    
    })
    
    
    }
    
    
    
    )
router.put('/:id',(req,res,next)=>{

Student.findByIdAndUpdate(req.params.id,
    {
        name:req.body.Name,age:req.body.Age,note:req.body.Note
},(err,student)=>{

if(err){
console.log(err)

}else{
res.json(student)



    }


})


}



)





router.get('/find/:name',(req,res,next)=>{
    Student.findOne({name:req.params.name},(err,student)=>{
        if(err){console.log(err)
        }else{
            res.json({title:'Student' ,student})
        }
    
       });

})












  module.exports = router;