var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
    'article-one' :{
    title: "Article One",
    date: "September 11th 2017",
    heading: "This is Article one's page.",
    content: `<p>
                    Considering the gravity of the topic on hand, I suggest that you immediately cease this pursuit. One man's definition of something being interesting could only under the most arbitrary of circumstances hold true for the next. The arbitrary nature of these circumstances could somewhat be mitigated if there was some degree of familiarity between the two men in question. However, this is merely a disclaimer as one can only hope for a less than nominal amount of familiarity between say a kitten and a smilodon, or to draw a closer parallel to our relationship, between a man... and a <b>GOD</b>
                </p>
                <p> Also</p>
                <div class='center'>
                    <img id='compliment' src="https://i1.sndcdn.com/artworks-000235377844-0eqgkx-t500x500.jpg" class="img-medium"/>
                </div>    
                `
    },
    'article-two' : {
    title: "Article Two",
    date: "September 11th 2017",
    heading: "This is Article two's page.",
    content: `<p>
                    This is the first paragraph under article two!! Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor.
                </p>
                `
    },
    'article-three' : {
    title: "Article Three",
    date: "September 11th 2017",
    heading: "This is Article three's page.",
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

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

//Sample Webapp code begins
app.get('/article-zero', function (req, res){
   res.sendFile(path.join(__dirname, 'ui', 'sample.html'));
});
app.get('/ui/sample.css', function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'sample.css'));
});
app.get('/ui/sample.js', function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'sample.js'));
});
// Sample webapp code ends


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
