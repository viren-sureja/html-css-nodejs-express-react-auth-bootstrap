title: learning new language;

# path to whole project step wise

-  install
   express: to interact with the server
   mysql: to interact with mysql server
   body-parser: to send json data in our project
   nodemon: to restart whenever we change something in file

-  incase if error occur while connecting the db use this in workbench
   ALTER USER '<user_name>' IDENTIFIED WITH mysql_native_password BY '<password>';
   flush privileges;

-  req.params is object containing the object details.

-  if we get any problem regarding undefined instead of body then use this.

var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, function (req, res) {
res.send('welcome, ' + req.body.username)
})

// POST /api/users gets JSON bodies
app.post('/api/users', jsonParser, function (req, res) {
// create user in req.body
})

-
