// const http = require('http');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/nodejsapi'
const bodyParser = require('body-parser');
//we use middleware so that any time client hits any request we gonna use body parser to parse that data
app.use(bodyParser.json());
mongoose.connect(url,{ 
		useNewUrlParser: true,
		useUnifiedTopology: true 
	},
	(error,db) =>{
	if (error) {
		console.log("this is the errrorrrrrrrrrrr =========>>>>>>>>>",error);
	}
	else{
		console.log("connected to database");
	}
});

//MIDDLEWARES
// all middlewares are a function that will be called when a specific route hits by the browser....
// for Eg:
// app.use('/posts',() => {
// 	console.log("middleware is running");
// });
 //ROUTES
 app.get('/',(req,res) =>{
 	res.send("currently at root path")
 });

 const postsRoute = require('./routes/posts');
 // const specificPostsRoute = require('./routes/posts');

 //using middleware while client requests for '/posts'
 app.use('/posts',postsRoute);

 //;isten to the server 
 app.listen(3000,() => {
 	console.log("server is running at port =>3000 ");
 })
 