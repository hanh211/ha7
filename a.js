const server=require('express');
const bodyParser=require('body-parser');
const {spawn}=require('child_process');
const app=server();
const port=process.env.PORT || 3000;
app.set("view engine","ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
  res.render('a')
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
