const express = require("express");
const RoutineModel = require("../Models/RoutineModel");

const RoutineRouter = express.Router();




// Add A new Routine 

RoutineRouter.post("/add-routine", async (req, res)=>{

    const AddRoutine = await new RoutineModel(req.body);


                try {


                    AddRoutine.save((err)=>{

                        if (err) {
                            console.log(err);
                
                            res.status(500).json({msg:"Server Side Error!!"})
                        }
                
                        else{
                
                            res.status(200).json({msg:"Routine Add Successful"})
                        }
                
                
                
                    })




                    
                } catch (error) {
                    
                }



})





// get All Routine 


RoutineRouter.get("/all-routine", async (req, res)=>{


    const AllRoutine = await RoutineModel.find({});



    try {


       if (AllRoutine.length>0) {

        res.status(200).json(AllRoutine)
       
           
       }
       else{

        res.status(500).json({msg:"Server Side Error!!"})



       }
     
    } catch (error) {

        console.log(error);
        
    }


})



// Delete Routine


RoutineRouter.delete("/delete-routine/:id", async (req, res)=>{

    const {id} = req.params;


    const DeleteRoutine = await RoutineModel.deleteOne({_id:id});

    try {

        if (DeleteRoutine.length>0) {

            res.status(200).json({msg:"Routine Delete Successful"})
            
        }

        else{

            res.status(500).json({msg:"Server Side Error!!"})

        }
        
    } catch (error) {
        
    }

})




// per email find routine 

RoutineRouter.get("/my-routine/:email", async (req, res)=>{


    const email = req.params;

    const myRoutine = await RoutineModel.find({email:email});

    try {


        if (myRoutine.length>0) {

            res.status(200).json(myRoutine)
            
        }
        else{

            res.status(500).json({msg:"Server Side Error!!"})

        }
        
    } catch (error) {
        
    }

})








// due routine search by teacherSubject 

RoutineRouter.get("/due-routine-subject-name-query", async (req, res)=>{


    const {teacherSubject} = req.query;


    const teacherSubject = await RoutineModel.find({ teacherSubject:teacherSubject});

   
    try {

        if (teacherSubject.length>0) {
    
            res.status(200).json(teacherSubject)
    
            console.log(teacherSubject);
        }
    
        else{
    
            res.status(500).json({msg:"Server Side Error!!"})
        }
           
       } catch (error) {
    
        console.log(error);
           
       }




} )





// due routine search by class 

RoutineRouter.get("/due-routine-class-query", async (req, res)=>{


    const {className} = req.query;


    const RoutineByClass = await RoutineModel.find({className:className});

   
    try {

        if (RoutineByClass.length>0) {
    
            res.status(200).json(RoutineByClass)
    
            console.log(RoutineByClass);
        }
    
        else{
    
            res.status(500).json({msg:"Server Side Error!!"})
        }
           
       } catch (error) {
    
        console.log(error);
           
       }




} )





// due routine search by routine Type 

RoutineRouter.get("/due-routine-type-query", async (req, res)=>{


    const { routineType} = req.query;


    const searchByType = await RoutineModel.find({routineType:routineType});

   
    try {

        if (searchByType.length>0) {
    
            res.status(200).json(searchByType)
    
            console.log(searchByType);
        }
    
        else{
    
            res.status(500).json({msg:"Server Side Error!!"})
        }
           
       } catch (error) {
    
        console.log(error);
           
       }




} )




// due routine search by time 

RoutineRouter.get("/due-routine-time-query", async (req, res)=>{


    const { timeFrom } = req.query;


    const searchByTime = await RoutineModel.find({timeFrom:timeFrom});

   
    try {

        if (searchByTime.length>0) {
    
            res.status(200).json(searchByTime)
    
            console.log(searchByTime);
        }
    
        else{
    
            res.status(500).json({msg:"Server Side Error!!"})
        }
           
       } catch (error) {
    
        console.log(error);
           
       }




} )





// due routine search by teacher phone number  

RoutineRouter.get("/due-routine-phone-query", async (req, res)=>{


    const {  phoneNumber } = req.query;


    const searchByPhoneNumber = await RoutineModel.find({ phoneNumber: phoneNumber});

   
    try {

        if (searchByPhoneNumber.length>0) {
    
            res.status(200).json(searchByPhoneNumber)
    
            console.log(searchByPhoneNumber);
        }
    
        else{
    
            res.status(500).json({msg:"Server Side Error!!"})
        }
           
       } catch (error) {
    
        console.log(error);
           
       }




} )


module.exports = RoutineRouter;



