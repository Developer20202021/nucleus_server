const express = require("express");
const EducationModel = require("../Models/EducationModel");


const educationRouter = express.Router();



educationRouter.post("/add-education-section", async (req, res)=>{


    const AddEducation = await new EducationModel(req.body);

    try {

        AddEducation.save((err)=>{

            if (err) {

                res.status(500).json({msg:"Server Side Error!!"})
                
            }
            else{

                res.status(200).json({msg:"Education Section Added Successful"})
            }





        })
        
    } catch (error) {
        
    }

})



// education section find by email 


educationRouter.get("/per-person-education/:email", async (req, res)=>{


    const {email} = req.params;


    const MyEducationSection = await EducationModel.find({email:email});

    try {

        if (MyEducationSection.length>0) {

            res.status(200).json(MyEducationSection)
            
        }

        else{

            res.status(500).json({msg:"Server Side Error!"})
        }
        
    } catch (error) {
        
    }






})




// delete education 

educationRouter.delete("/delete-education-section/:id", async (req, res)=>{


    const {id} = req.params;


    const DeleteEducation = await EducationModel.delete({_id:id});

    try {

        if (DeleteEducation.length>0) {

            res.status(200).json({msg:"Delete successful"})
            
        }
        else{

            res.status(500).json({msg:"Server Side Error!"})
        }
        
    } catch (error) {
        
    }









})



module.exports = educationRouter;