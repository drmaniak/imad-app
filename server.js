var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
    'article-one' :{
    title: "Article One",
    date: "September 11th 2017",
    heading: "This is Aricle one's page.",
    content: `<p>
                    This is the first paragraph under article one!! Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor.
                </p>
                `
    },
    'article-two' : {
    title: "Article Two",
    date: "September 11th 2017",
    heading: "This is Aricle two's page.",
    content: `<p>
                    This is the first paragraph under article two!! Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor.
                </p>
                `
    },
    'article-three' : {
    title: "Article Three",
    date: "September 11th 2017",
    heading: "This is Aricle three's page.",
    content: `<p>
                    This is the first paragraph under article three!! Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor.
                </p>
                `
    },
    
};

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `
        <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
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
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}
    
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req, res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName])); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
