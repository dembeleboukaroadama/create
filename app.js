require('babel-register')
const bodyParser=require('body-parser')
const express=require('express')
const morgan=require('morgan')('dev')
const twig=require('twig')
const app=express();
const port=8080;
const axios=require('axios')

 
const mysql=require('mysql')




app.use(morgan)
app.use(bodyParser.json())
//app.use(bodyParser.urlencode({extended:true}))

const db=mysql.createConnection({

	host:'localhost',
	database:'resto',
	user:'root',
	password:''
})

db.connect((err)=>{

	if(err){
		console.log(err.message)

	}else{

		console.log('reussite de connexion')

		//page d'acceuille
		app.get('/', (req,res)=>{
	res.render('index.twig')

})
//ajout d'ne nouvelle reservation
 

	
 
//recupere la liste des repas au menu
 
app.get('/repas', (req, res) => { 
  //res.render('repas.twig')
	

	               if (req.query.max != undefined && req.query.max > 0) { 
 
                    db.query('SELECT * FROM repas LIMIT 0, ?', [req.query.max], (err, result) => { 
                        if (err){ 
                            res.json(error(err.message)) 
                        } else { 
                              
                                
                                  res.json((result))
                                  
                                }
                               
                             } 

                        )
                    }
 
                 else if (req.query.max != undefined) { 
                    res.json(error('Wrong max value')) 
                } else { 
 
                    db.query('SELECT * FROM repas', (err, result) => { 
                        if (err) { 
                            res.json(error(err.message)) 
                        } else {
                                 
                                res.json((result))
                                
                                }
                               
                             }                            
                             
                             )
                      }       
                        
                
                    
 
                
            

//recuperation de toutes les restaurants
  app.get('/resto', (req, res) => { 
  //res.render('resto.twig')

                if (req.query.max != undefined && req.query.max > 0) { 
 
                    db.query('SELECT * FROM restodispo LIMIT 0, ?', [req.query.max], (err, result) => { 
                        if (err) { 
                            res.json(error(err.message)) 
                        } else { 
                            res.json((result)) 
                        } 
                    }) 
 
                }else if (req.query.max != undefined) { 
                    res.json(error('Wrong max value')) 
                } else { 
 
                    db.query('SELECT * FROM restodispo', (err, result) => { 
                        if (err) { 
                            res.json(error(err.message)) 
                        } else { 
                            res.json((result)) 
                            } 
                    }) 
 
                } 
            })
  //recuperation de toutes les reservations
app.get('/reserves', (req, res) => { 

  //res.render('reserves.twig')
    

                   if (req.query.max != undefined && req.query.max > 0) { 
 
                    db.query('SELECT * FROM reserves LIMIT 0, ?', [req.query.max], (err, result) => { 
                        if (err){ 
                            res.json(error(err.message)) 
                        } else { 
                                  res.json((result))
                                }
                               
                             } 

                        )
                    }
                })
                    if (req.query.max != undefined) { 
                    res.json(error('Wrong max value')) 
                } else { 
 
                    db.query('SELECT * FROM reserves', (err, result) => { 
                        if (err) { 
                            res.json(error(err.message)) 
                        } else {
                                res.json((result))
                                }
                             }                            
                             )
                      } 
	//reservations
    app.get('/reservations', (req,res)=>{

        res.render('reservation.twig')
    })

    //Contacts
     app.get('/contact', (req,res)=>{

        res.render('contact.twig')
    })
     //reserver
     app.post('/reserver', (req,res)=>{

        db.query('INSERT INTO reserves(nom) VALUES(?)', [req.body.nom], (err,result)=>{
            if(err){
                res.json(error(err.message))
            }else{
                db.query('INSERT INTO reserves(nom) VALUES(?)', [req.body.nom], (err,result)=>{})
            }
        })
     })
    
	 
})
 app.listen(port, ()=>{
    console.log('start on prot', +port)
 }
 )
 }})