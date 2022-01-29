const express = require("express");
const StudentModel = require("../Models/StudentModel");


const StudentRouter = express.Router();



StudentRouter.post("/add-new-student", async (req, res)=>{


    console.log(req.body);

    const AddStudent = await new StudentModel(req.body);

    AddStudent.save((err)=>{


        
    try {



        AddStudent.save((err)=>{


            if (err) {
                console.log(err);
    
                res.status(500).json({msg:"Server Side Error!!"})
            }
    
            else{
    
                res.status(200).json({msg:"Student Add Successful"})
            }
    
    
    
    
        })





        
    } catch (error) {

        console.log(error);
        
    }




    })


    })






    // see all student paid and due


StudentRouter.get("/all-student", async (req, res)=>{


    const allStudent = await StudentModel.find({});

    try {


        if (allStudent.length>0) {

            res.status(200).json(allStudent)
    
            console.log(allStudent);
    
            
        }
    
        else{
    
            res.status(500).json({msg:"Server Side Error!!"})
        }




        
    } catch (error) {

        console.log(error);
        
    }




})




// see a student 

StudentRouter.get("/per-student/:id", async (req, res)=>{

    const {id} = req.params;
    const Student = await StudentModel.find({_id:id});

    try {


        if (Student.length>0) {

            res.status(200).json(Student)
    
            console.log(Student);
    
            
        }
    
        else{
    
            res.status(500).json({msg:"Server Side Error!!"})
        }

      
    } catch (error) {

        console.log(error);
        
    }

})






// Edit Student 

StudentRouter.put("/edit-per-student/:id",  (req, res)=>{

    const {id} = req.params;

    

    const editStudent =  StudentModel.findOneAndUpdate({_id:id}, {$set:req.body},(err)=>{


        if (err) {

            console.log(err);
            res.status(500).json({msg:"Server Side Error!!"})
            
        }
        else{

            res.status(200).json({msg:"Update successful"})
        }


    




    })





})





StudentRouter.delete("/delete-a-student/:id", async (req, res)=>{


    const {id} = req.params;

    const DeleteStudent = await StudentModel.deleteOne({_id:id});


    try {


        if (DeleteStudent.length>0) {
            
            res.status(200).json({msg:"Student deleted Successful"})
        }
        else{

            res.status(500).json({msg:'server side error!!'})


        }
        
    } catch (error) {
        
    }







})




module.exports = StudentRouter;