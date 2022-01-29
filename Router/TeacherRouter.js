const express = require("express");
const TeacherModel = require("../Models/teacherModel");



const TeacherRouter = express.Router();



TeacherRouter.post("/add-new-teacher", async (req, res)=>{


    console.log(req.body);

    const AddTeacher = await new TeacherModel(req.body);

    AddTeacher.save((err)=>{


        
    try {



        AddTeacher.save((err)=>{


            if (err) {
                console.log(err);
    
                res.status(500).json({msg:"Server Side Error!!"})
            }
    
            else{
    
                res.status(200).json({msg:"teacher Add Successful"})
            }
    
    
    
    
        })





        
    } catch (error) {

        console.log(error);
        
    }




    })


    })






    // see all teacher 


TeacherRouter.get("/all-teacher", async (req, res)=>{


    const allTeacher = await TeacherModel.find({});

    try {


        if (allTeacher.length>0) {

            res.status(200).json(allTeacher)
    
            console.log(allTeacher);
    
            
        }
    
        else{
    
            res.status(500).json({msg:"Server Side Error!!"})
        }




        
    } catch (error) {

        console.log(error);
        
    }




})




// see a teacher 

TeacherRouter.get("/per-teacher/:id", async (req, res)=>{

    const {id} = req.params;
    const teacher = await TeacherModel.find({_id:id});

    try {


        if (teacher.length>0) {

            res.status(200).json(teacher)
    
            console.log(teacher);
    
            
        }
    
        else{
    
            res.status(500).json({msg:"Server Side Error!!"})
        }

      
    } catch (error) {

        console.log(error);
        
    }

})






// Edit teacher 

TeacherRouter.put("/edit-per-teacher/:id",  (req, res)=>{

    const {id} = req.params;

    

    const editTeacher =  TeacherModel.findOneAndUpdate({_id:id}, {$set:req.body},(err)=>{


        if (err) {

            console.log(err);
            res.status(500).json({msg:"Server Side Error!!"})
            
        }
        else{

            res.status(200).json({msg:"Update successful"})
        }


    




    })





})





TeacherRouter.delete("/delete-a-teacher/:id", async (req, res)=>{


    const {id} = req.params;

    const DeleteTeacher = await TeacherModel.deleteOne({_id:id});


    try {


        if (DeleteTeacher.length>0) {
            
            res.status(200).json({msg:"teacher deleted Successful"})
        }
        else{

            res.status(500).json({msg:'server side error!!'})


        }
        
    } catch (error) {
        
    }







})





TeacherRouter.put("/add-receiver", async (req, res)=>{


        const email = req.body;

        const updateRole = await TeacherModel.findOneAndUpdate({email:email}, {$set:{role:"Staff"}});

        try {

            if (updateRole.length>0) {

                res.status(200).json({msg:"Receiver Add Successful"})
            }

            else{

                res.status(500).json({msg:"Server Side Error!"})
            }
            
        } catch (error) {
            
        }




})



module.exports = TeacherRouter;