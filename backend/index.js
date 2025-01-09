const express=require("express")
const app=express()
const bodyParser=require("body-parser")
const cors=require("cors")
const dotenv=require("dotenv")
let mongoose=require("mongoose")

app.use(bodyParser.json())
app.use(cors())
dotenv.config()

mongoose.connect(process.env.ConnectionString)
.then(()=>{
    console.log("connected")
})


app.listen(4000,()=>{
    console.log("bu app 4000 portunda dinlenilir")
})

let ProductSchema = new mongoose.Schema({
    brandName:String,
    modelName:String,
    year:Number,
    CarisNew:Boolean,
    color:String
})

let ProductModel= mongoose.model("cars",ProductSchema)


app.get("/cars", async (req,res)=>{
    let cars= await ProductModel.find()
    res.send(cars)
})

app.post("/cars", async (req,res)=>{
    let newCar= ProductModel(req.body)
   await newCar.save()
   res.send({
     message:"Posted",
     data:req.body
   })
})

app.get("/cars/:id",async (req,res)=>{
    let id=req.params.id
    let mycar= await ProductModel.findById(id)
    res.send({
        message:"Success GetById",
        data:mycar
    })
})


app.delete("/cars/:id", async  (req,res)=>{
    let {id}=req.params
   await ProductModel.findByIdAndDelete(id)
   res.send({
    message:"Deleted",
})
})