const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PaymentModel = require("./Models/PaymentModel");
const PaymentRouter = require("./Router/PaymentRouter");
const TeacherRouter = require("./Router/TeacherRouter");
const StudentRouter = require("./Router/StudentRouter");
const RoutineRouter = require("./Router/RoutineRouter");
const ResultRouter = require("./Router/ResultRouter");
const educationRouter = require("./Router/EducationRouter");
const SettingRouter = require("./Router/SettingRouter");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


    mongoose.connect("mongodb://nucleus:nucleus2022@cluster0-shard-00-00.l9s4l.mongodb.net:27017,cluster0-shard-00-01.l9s4l.mongodb.net:27017,cluster0-shard-00-02.l9s4l.mongodb.net:27017/nucleus?ssl=true&replicaSet=atlas-rb992z-shard-0&authSource=admin&retryWrites=true&w=majority",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    
    )
.then(()=>{

    console.log("connection successful");
})
.catch(err=>{

    console.log(err);
})



app.get("/", (req, res)=>{


        res.json({mahadi:"hasan"})

})









app.use("/payment", PaymentRouter);
app.use("/teacher", TeacherRouter);
app.use("/student", StudentRouter);

app.use("/routine",RoutineRouter);
app.use("/exam",ResultRouter);
app.use("/education",educationRouter);
app.use("/setting-function", SettingRouter)












app.listen(5000,()=>{


    console.log("Server is running");
})
