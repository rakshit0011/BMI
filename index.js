const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"\\index.html");
})
function status(num){
    if(num<18.5){
        return "Underweight";
    }
    else if(num>=18.5 && num<24.9){
        return "Healthy";
    }
    else if(num>=24.9&&num<30){
        return "Overweight";
    }
    else{
        return "Obese";
    }
}
app.post("/",function(req,res){
    let weight = Number(req.body.num1);
    let height = Number(req.body.num2);
    let value = weight/(height*height);
    value = Math.round(value*10)/10;
    res.send(`Your BMI is ${value}, you are ${status(value)}`);
})
app.listen(200);