const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


//delete a specific post
router.delete('/:id',async (req,res) => {
	try{
		const post = await Post.findById(req.params.id);
		// post.delete();
			// OR
		post.remove({_id:req.params.id})
		res.json({message: "successfully deleted the data with id"+ req.params.id})
	}catch(error){
		res.json({message:error});
	}
});

//get specific post 
router.get('/:id',async (req,res) =>{
 	// res.send("currently at posts path")
 	try{
 		const post = await Post.findById(req.params.id);
 		res.json(post);
 	}
 	catch(error){
 		res.json({message:error})
 	}

 });

//update specific post 
router.patch('/:id',async (req,res) =>{
 	// res.send("currently at posts path")
 	try{
 		const updatedPost = await Post.updateOne(
 			{ _id:    req.params.id },
 			{ 
 				$set: { title: req.body.title }, 
 				$set: { description: req.body.description } 
 			}

 			);
 		res.json(updatedPost);
 	}catch(error){
 		res.json({message:error})
 	}

 });

//get all posts
router.get('/',async (req,res) =>{
 	// res.send("currently at posts path")
 	try{
 		const posts = await Post.find();
 		res.json(posts);
 	}
 	catch(error){
 		res.json({message:error})
 	}

 });

//posts data to the database
router.post('/' , async (req,res) =>{
 	// console.log(req.body);
 	const post = new Post({
 		title:req.body.title,
 		description:req.body.description
 	});
 	try{
	 	const savedPost = await post.save();
	 	res.json(savedPost);
	 }catch(error){
	 	console.log(error);
	 }

 });

module.exports = router;

// function fun1(req, res){
//   return request.get('http://localhost:3000').catch((err) =>{console.log('found error');}).then((res) =>{console.log('get request returned.');});