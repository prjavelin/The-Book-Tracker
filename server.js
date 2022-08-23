const express = require('express')
const app = express()
const axios = require('axios')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const PORT = 7788
require('dotenv').config
const APIroute = require('./routes/api')
app.use(express.json())

let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = "books"

// Static Files
app.use(express.static('public'))    

// set the view engine to ejs
app.set('view engine', 'ejs');

// Parsing middleware
// Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false })); // Deprecated
app.use(express.urlencoded({extended: true})); // New
// app.use('/',require('./routes'))
// use res.render to load up an ejs view file



// index page
app.get('/', function(req, res) {
    
      res.render('pages/index', {
      
      })
});

//The example I found on the fetch from the api on medium
// fetch(`https://www.googleapis.com/books/v1/volumes?q=search-terms&key=your-API-key)
//   .then(response => response.json())
//   .then(result => {
// this.setState({ books: result.items})
// })}




const axiosInstance = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes?q=${TERMS}&key=AIzaSyAakbxVUm0Q6ZBq60OZEu9HJrFeD9v_1UA'
})

//the response from stack overflow
app.get("/getBook", async (req, res, next) => {
  try {
    const response = await axiosInstance.get();
    console.log(response.data.result);

//     //You need To send data from using send method
    res.status(200).send(response.data.result);

//     //Or you can use json method to send the data
    res.status(200).json(response.data.result);

  } catch (err) {
    res.status(400).send(err);
  }
});


// app.get('/getBook', (request, response) => {
//   db.collection('todos').insertOne({thing: request.body.todoItem, completed: false})
//   .then(result => {
//       console.log('Todo Added')
//       response.redirect('/')
//   })
//   .catch(error => console.error(error))
// })




app.set('views','./views')
// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

// wish list page
app.get('/wish', function(req, res) {
    res.render('pages/wish');
  });

  // library page
app.get('/library', function(req, res) {
    res.render('pages/library');
  });

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
   })   