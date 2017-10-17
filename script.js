var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");
    
app.use(express.static("css"));
app.use(express.static("js"));
    
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.get("/", function(req, res){
   res.render("rules"); 
});

app.get("/game", function(req, res){
   res.render("game"); 
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server Started!!!");
});
    