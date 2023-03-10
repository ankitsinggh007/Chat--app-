const express=require('express');
const http=require('http');

require('dotenv').config();

const PORT=process.env.PORT ||4000;
const app = express();
const server=http.createServer(app);




app.get('/',(req,res)=>{
    res.send("hi");
});

server.listen(PORT,()=>{
    console.log(`development server started on port ${PORT}`);
})