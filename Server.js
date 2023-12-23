const express=require('express');
const bodyParser=require('body-parser');
const {spawn}=require('child_process');
const app=express();
app.use(express.static("views"));
const server=require("http").Server(app);
const io=require("socket.io")(server);
const port=process.env.PORT || 3000 || "http://example.com/views/index.ejs";
app.set("view engine","ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
  res.render('index')
});

app.get("/images", (req, res) => {
  // res.send('hello');
  res.json('hello')
});

app.get("/detect",(req, res) => {
  // res.send('xin chao');
  res.json('chao ban')
});

app.listen(port,()=>{
  console.log('listen 3000')
});
