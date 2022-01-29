const { json } = require("express");
const express = require("express");
const SettingModel = require("../Models/SettingModel");

const SettingRouter = express.Router();





// update Private key 



SettingRouter.put("/update-private-key", async (req, res)=>{

    const privateKey = req.body;

    const updateKey = await SettingModel.findOneAndUpdate({key:"0"}, {$set:privateKey});

    try {

        if (updateKey.length>0) {
            res.status(200),json({msg:"Updated"})
        }
        else{
            res.status(500).json({msg:"Server Side Error!!"})
        }
        
    } catch (error) {
        
    }


})




// private key match 



SettingRouter.post("/private-key-sing-in", async (req, res)=>{


    const privateKey = req.body;

    const getOldPrivatekey = await SettingModel({});

    try {

        if (getOldPrivatekey.length>0) {

          if ( getOldPrivatekey.privateKey === privateKey) {

            res.status(200).json({msg:"done"})
              
          }

          else{

            res.status(400).json({msg:"Wrong!!"})
          }
            
        }

        else{

            res.status(500).json({msg:"Server Side Error!!"})
        }
        
    } catch (error) {
        
    }





})


module.exports = SettingRouter;