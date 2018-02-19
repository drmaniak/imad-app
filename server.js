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
    comment: "Comment on article two's page",
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
    comment: "Comment on article two's page",
    content: `<p>
                    This is the first paragraph under article two!! Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor.
                </p>
                `
    },
    'article-three' : {
    title: "Article Three",
    date: "September 11th 2017",
    heading: "This is Article three's page.",
    comment: "Comment on article two's page",
    content: `<p>
                    This is the first paragraph under article three!! Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor. Lorem Ipsum Dolor.
                </p>
                `
    },
    
};

var articles1 = {
    'article-four' : {
        title: 'Article-four| Manpak',
        heading: 'Article-four',
        date: '19th Feb 2018',
        content: `
            <p>
                This is article four's content.
            </p>
            <p>
                You shitpom
            </p>
        `
    },
    'article-five' : {
        title: 'Article-five| Manpak',
        heading: 'Article-five',
        date: '19th Feb 2018',
        content: `
            <p>
                This is article five's content.
            </p>
            <p>
                You shittypom
            </p>
        `
    },
    'article-six' : {
        title: 'Article-six| Manpak',
        heading: 'Article-six',
        date: '19th Feb 2018',
        content: `
            <p>
                This is article six's content.
            </p>
            <p>
                You shitpommen
            </p>
        `
    },

};
function createTemplate1(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate1 = `
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
                        ${date}
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
        return htmlTemplate1;
}

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var comment = data.comment;
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
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
                <div>
                    <form>
                        <div class='form-group'>
                            <textarea class='form-control status-box' id="comment" rows='2' placeholder="${comment}"></textarea>
                        </div>
                    </form>
                    <div class="button-group pull-right">
                        <button id="post_btn" type="submit" class="btn btn-primary">Post</button>
                    </div>
                    <ul id='commentlist' class="posts">
                    </ul>
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

var counter = 0;
app.get('/counter', function(req, res){
    counter += 1;
    res.send(counter.toString());
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

var comments=[];
app.get('/comments', function(req, res){
   var comment = req.query.comment;
   
   comments.push(comment);
   
   res.send(JSON.stringify(comments));
});

var names=[];
app.get('/submit-name', function(req, res){
   var name = req.query.name;
   
   names.push(name);
   //JSON: Javascript object notation
   res.send(JSON.stringify(names));
});

app.get('/:articleName1', function(req, res){
    // articleName1 == article-four or article-five or article-six
    // articles1[articleName1] == selected {} object based on url
    var articleName1 = req.params.articleName1;
    res.send(createTemplate1(articles1[articleName1]));
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





// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
