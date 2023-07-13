const mongoose = require("mongoose");
const Customer = require("./customer");

mongoose.connect(
  "mongodb+srv://alisahib1998:alisahib@cluster0.iavobrj.mongodb.net/?retryWrites=true&w=majority",
  (error) => {
    if (!error) {
      console.log("connected");
    }
    else{
        console.log("unconnected",error);
    }
  }
);

// const customer1 = new Customer({
//   name: "Alisahib",
//   city: "Azerbaycan",
// });
// customer1.save((error)=>{
//     if(error){
//         throw error;
//     }
//     console.log("customer saved");
// });

// Customer.find({},(error,data)=>{
//     if(error){
//         throw error
//     }
//     console.log(data);
// })
Customer.findById("64af26dbff441878e5caebe4",(error,data)=>{
    if(error){
        throw error
    }
    console.log(data);
    // data.city = "Rusiya"
    data.remove((error)=>{
        if(error){
            throw error;
        }
        console.log("customer deleted");
    });
})


// Customer.find({},(error,data)=>{
//     if(error){
//         throw error
//     }
//     console.log(data);
// }).where("city").equals("Azerbaycan")