var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var bodyParser = require('body-parser');
// var session = require('express-session');
var session = require('express-session');


var config = {
  user: 'manickvennimalai',
  database: 'manickvennimalai',
  host: 'db.imad.hasura-app.io',
  port: '5432',
  password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(session({
    secret: 'someRandomSecretValue',
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 30}
}));

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    // var comment = data.comment;
    var htmlTemplate = `
        <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
            <link href="http://s3.amazonaws.com/codecademy-content/courses/ltp2/css/bootstrap.min.css" rel="stylesheet">
            <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date.toDateString()}
                </div>
                <div>
                    ${content}
                </div>
            </div>
            <script src='https://code.jquery.com/jquery-3.1.0.min.js'>
            </script>
            <script type="text/javascript" src="/ui/main.js"></script>
        </body>
    </html>
    `;
    return htmlTemplate;
}
    
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

function hash(input, salt) {
    var hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
    return ['pbkdf2', '10000', salt, hashed.toString('hex')].join('$');
}

app.get('/hash/:input', function(req, res) {
   
   var hashedString = hash (req.params.input, 'this-is-a-string');
   
   res.send(hashedString); 
});

app.post('/create-user', function(req, res) {
    
    // {"username": "Manick", "password": "password"}
    
    var username = req.body.username;
    var password = req.body.password;
    
    var salt = crypto.randomBytes(128).toString('hex');
    var dbString = hash (password, salt); 
   
    pool.query('INSERT INTO "user" (username, password) VALUES ($1, $2)', [username, dbString], function (err, result) {
       
       if (err) {
           res.status(500).send(err.toString());
       } else {
            res.send('User successfully created: ' + username);
       }  
       
    });
});

app.post('/login' ,  function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
   
    pool.query('SELECT * FROM "user" WHERE username = $1', [username], function (err, result) {
       if (err) {
           res.status(500).send(err.toString());
       } else {
            if (result.rows.length === 0) {
                res.send(403).send("Username/Password is invalid");
                console.log("Error, 0 rows thrown");
           } else {
                // Match Password
                var dbString = result.rows[0].password;
                var salt = dbString.split('$')[2];
                var hashedPassword = hash(password, salt);
                if (hashedPassword === dbString) {
                    
                    //set session
                    // req.session.auth = {userId: result.rows[0].id};
                    //set cookie with session ID
                    req.session.auth = {userId: result.rows[0].id};
                    //Internally on the server side, it maps the session ID to an object
                    //{auth: {userId}}
                    
                    res.send('Creds correct');
                    
                } else {
                    res.send(403).send("Username/Password is invalid");
                    console.log("Error in matching password");
                }
           }
       }  
    });
});

app.get("/check-login", function(req, res) {
  if (req.session && req.session.auth && req.session.auth.userId) {
      res.send('User is currently logged in: ' + req.session.auth.userId.toString());
  } else {
      res.send('You are not logged in.');
  }
});

app.get('/logout', function(req, res) {
    delete req.session.auth;
    res.send("You have been logged out");
});

var pool = new Pool(config);

app.get('/get-articles', function (req, res) {
   pool.query('SELECT * FROM articles ORDER BY date DESC', function (err, result) {
       if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   }); 
});

app.get('/test-db', function(req, res) {
    //make a select request
    // return a response with the resutl
    pool.query('SELECT name FROM test', function (err, result) {
        if (err) {
            res.status(500).send(err.toString());
        }else {
            res.send(JSON.stringify(result.rows));
        }
    });
    
});

var counter = 0;
app.get('/counter', function(req, res){
    counter += 1;
    // can only send strings as responses, so counter.toString() is required
    res.send(counter.toString()); 
});

// //Sample Webapp code begins
// app.get('/article-zero', function (req, res){
//   res.sendFile(path.join(__dirname, 'ui', 'sample.html'));
// });
// app.get('/ui/sample.css', function(req, res){
//     res.sendFile(path.join(__dirname, 'ui', 'sample.css'));
// });
// app.get('/ui/sample.js', function(req, res){
//     res.sendFile(path.join(__dirname, 'ui', 'sample.js'));
// });
// // Sample webapp code ends

var comments=[];
app.get('/comments', function(req, res){
   var comment = req.query.comment;
   
   comments.push(comment);
   
   res.send(JSON.stringify(comments));
});

var names = [];
app.get('/submit-name', function(req, res) {
    //Get the name from the request
    var name = req.query.name; //Takes the value from the query-string ?name=_____
    
    names.push(name);
    
    //JSON: Javascript object notation, used to convert complex obects to strings
    
    res.send(JSON.stringify(names)); //TODO
});


app.get('/articles/:articleName', function(req, res){
    // articleName == article-one to article-six
    // articles[articleName] == selected {} object based on url
    pool.query(" SELECT * FROM article WHERE title = $1", [req.params.articleName], function(err, result) {
       if (err) {
           res.status(500).send(err.toString());
       } else {
           if (result.rows.length === 0) {
               res.status(404).send('Article not found');
           } else {
               var articleData = result.rows[0];
               res.send(createTemplate(articleData));
           }
       }
    });
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/Pewds_Mannen.jpg', function(req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'Pewds_Mannen.jpg'));
});





// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
