const express = require("express");
const ResultModel = require("../Models/ResultModel");

const ResultRouter = express.Router();



// Add Result 

ResultRouter.post("/add-result", async (req, res)=>{

    const AddResult = await new ResultModel(req.body);

    try {

        AddResult.save((err)=>{


            if (err) {

                res.status(500).json({msg:"Server Side Error!!"});
                
            }

            else{

                res.status(200).json({msg:"Result Add Successful"})



            }




        })
        
    } catch (error) {
        
    }




})



// per student result 



ResultRouter.get("/get-per-student-result/:email", async (req, res)=>{


    const {email} = req.params;


    const perStudentResult = await ResultModel.find({email:email});

    try {


        if (perStudentResult.length>0) {

            res.status(200).json(perStudentResult);
            
        }
        else{

            res.status(500).json({msg:"Server Side Error!!"})
        }



        
    } catch (error) {
        
    }





})




ResultRouter.delete("/delete-per-student-result/:id", async (req, res)=>{


    const {id} = req.params;

    const DeleteResult = await ResultModel.delete({_id:id});


    try {


        if (DeleteResult.length>0) {

            res.status(200).json({msg:"Result Delete "})

            
        }

        else{

            res.status(500).json({msg:"Server Side Error!!"});
        }
        
    } catch (error) {
        
    }





})



module.exports = ResultRouter;