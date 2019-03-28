const express=require('express')
const da=express();
const port=8091

da.get('/repas', (req,res)=>{
	axios.get('http://localhost:8080/api/v1/repas')
	.then((response) =>{
		console.log(response)
	})
	.catch((err)=>{
		console.log('erreur ')
	})
})

da.listen(port, ()=>{
	console.log('start on port',+port)
})