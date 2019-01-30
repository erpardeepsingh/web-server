const express=require('express');
const port=process.env.port||3000;
const hbs=require('hbs');
hbs.registerPartials(__dirname+'/views/partials');
hbs.registerHelper('getyear',()=>{
return new Date().getFullYear()
});
hbs.registerHelper('toup',(text)=>{
return text.toUpperCase()
});
var app=express();
   // app.use((req,res,next)=>{
    //res.render('maintainence.hbs');
    //});--!>
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));
app.get('/about',(req,res)=>{
res.render('about.hbs',{
title:"About",
content:"Welcome to About Page",
});
});
app.get('/',(req,res)=>{
res.render('home.hbs',{
    title:"Home",
    content:"Welcome to Home Page",
    });
});
app.get('/data',(req,res)=>{
    res.send({
        name:"Pardeep",
        age:20
    });
});
app.get('/bad',(req,res)=>{
    res.send("<h1>Bad Request</h1>");
})

app.listen(port,()=>
{
    console.log("Listening At ",port);
});
