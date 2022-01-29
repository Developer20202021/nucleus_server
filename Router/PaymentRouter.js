const express = require("express");

const mongoose = require("mongoose");
const PaymentModel = require("../Models/PaymentModel");
const StudentModel = require("../Models/StudentModel");


const PaymentRouter = express.Router();





// payment receive post method
PaymentRouter.post("/student/receive-payment", async (req, res)=>{


    console.log(req.body);

    const receivePayment = await new PaymentModel(req.body);


    try {



        receivePayment.save((err)=>{


            if (err) {
                console.log(err);
    
                res.status(500).json({msg:"Server Side Error!!"})
            }
    
            else{
    
                res.status(200).json({msg:"Payment Receive Successful"})
            }
    
    
    
    
        })





        
    } catch (error) {

        console.log(error);
        
    }

})




// per student payment view get method

PaymentRouter.get("/per-student-paid-payment/:email", async (req, res)=>{


    const {email} = req.params;

    const perStudentPayment = await PaymentModel.find({email:email});

                try {


                    if (perStudentPayment.length>0) {

                        res.status(200).json(perStudentPayment)
                
                        console.log(perStudentPayment);
                
                        
                    }
                
                    else{
                
                        res.status(500).json({msg:"Server Side Error!!"})
                    }




                    
                } catch (error) {

                    console.log(error);
                    
                }

})



// see all due payment student using StudentModel.js


PaymentRouter.get("/all-student-due-payment", async (req, res)=>{


    const getAllDuePaymentStudent = await StudentModel.find({paymentStatus:"Due"});

   try {

    if (getAllDuePaymentStudent.length>0) {

        res.status(200).json(getAllDuePaymentStudent)

        console.log(getAllDuePaymentStudent);
    }

    else{

        res.status(500).json({msg:"Server Side Error!!"})
    }
       
   } catch (error) {

    console.log(error);
       
   }



})









// due payment search by Student ID 

PaymentRouter.get("/due-payment-student-id-query", async (req, res)=>{


    const {studentID} = req.query;


    const dueStudentByID = await StudentModel.find({studentID:studentID});

   
    try {

        if (dueStudentByID.length>0) {
    
            res.status(200).json(dueStudentByID)
    
            console.log(dueStudentByID);
        }
    
        else{
    
            res.status(500).json({msg:"Server Side Error!!"})
        }
           
       } catch (error) {
    
        console.log(error);
           
       }




} )





// due payment search by class 

PaymentRouter.get("/due-payment-class-query", async (req, res)=>{


    const {className} = req.query;


    const dueStudentByClass = await StudentModel.find({className:className});

   
    try {

        if (dueStudentByClass.length>0) {
    
            res.status(200).json(dueStudentByClass)
    
            console.log(dueStudentByClass);
        }
    
        else{
    
            res.status(500).json({msg:"Server Side Error!!"})
        }
           
       } catch (error) {
    
        console.log(error);
           
       }




} )





// due payment search by payment status  

PaymentRouter.get("/due-payment-paymentstatus-query", async (req, res)=>{


    const { paymentStatus} = req.query;


    const dueStudentByStatus = await StudentModel.find({paymentStatus:paymentStatus});

   
    try {

        if (dueStudentByStatus.length>0) {
    
            res.status(200).json(dueStudentByStatus)
    
            console.log(dueStudentByStatus);
        }
    
        else{
    
            res.status(500).json({msg:"Server Side Error!!"})
        }
           
       } catch (error) {
    
        console.log(error);
           
       }




} )




// due payment search by email 

PaymentRouter.get("/due-payment-email-query", async (req, res)=>{


    const { email} = req.query;


    const dueStudentByEmail = await StudentModel.find({email:email});

   
    try {

        if (dueStudentByEmail.length>0) {
    
            res.status(200).json(dueStudentByEmail)
    
            console.log(dueStudentByEmail);
        }
    
        else{
    
            res.status(500).json({msg:"Server Side Error!!"})
        }
           
       } catch (error) {
    
        console.log(error);
           
       }




} )


module.exports = PaymentRouter;
