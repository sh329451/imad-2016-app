var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));


var articles = {
'article-one' :{
    title:'Shashank bajpai Article-one',
  heading:'Article one',
     date:'Sept 5,2016',
  content:
            ` <p>
                    This is the content we want in my website. its good to learn code and web development in the nptel through imad a good initiative taken by both the institute and entreprenaur to make it successful we want more pepole to come and join us dont fear coding its just a simple any one can learn coding 
                </p>
                 <p>
                    This is the content we want in my website. its good to learn code and web development in the nptel through imad a good initiative taken by both the institute and entreprenaur to make it successful we want more pepole to come and join us dont fear coding its just a simple any one can learn coding 
                </p>
                 <p>
                    This is the content we want in my website. its good to learn code and web development in the nptel through imad a good initiative taken by both the institute and entreprenaur to make it successful we want more pepole to come and join us dont fear coding its just a simple any one can learn coding 
                </p> `
},
'article-two' :{
 title:'Shashank bajpai Article-two',
  heading:'Article two',
     date:'Sept 15,2016',
  content:
            ` <p>
                    This is the content we want in my website. its good to learn code and web development in the nptel through imad a good initiative taken by both the institute and entreprenaur to make it successful we want more pepole to come and join us dont fear coding its just a simple any one can learn coding 
                </p>
                `
},
'article-three':{ 
    title:'Shashank bajpai Article-three',
  heading:'Article three',
     date:'Sept 10,2016',
  content:
            ` <p>
                    This is the content we want in my website. its good to learn code and web development in the nptel through imad a good initiative taken by both the institute and entreprenaur to make it successful we want more pepole to come and join us dont fear coding its just a simple any one can learn coding 
                </p>
                `
},
};
function createTemplate(data){
var title = data.title;
var heading = data.heading;
var date = data.date;
var content = data.content;
var htmlTemplate= 
`<html>
    <head>
        <title>
            ${title}
            </title>
            <meta name= "viewpoint" content= "width-device-width,initial-scale=1"/>
             <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
            <div>
              <a href="/">Home</a>
                 </div>
                <hr/>
                ${heading}
                <div>
                ${date}
                </div>
                <div>
               ${content}
                </div>
                </div>
                </body>
</html>`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
var htmlTemplate= 
`<html>
    <head>
        <title>
            ${title}
            </title>
            <meta name= "viewpoint" content= "width-device-width,initial-scale=1"/>
             <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
            <div>
              <a href="/">Home</a>
                 </div>
                <hr/>
                ${heading}
                <div>
                ${date}
                </div>
                <div>
               ${content}
                </div>
                </div>
                </body>
</html>`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function(req,res){
    var articleName = req.param.articleName;
   res.send(createTemplate(articles[articleName])); 
   
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));


app.get('/:articleName', function(req,res){
    var articleName = req.param.articleName;
   res.send(createTemplate(articles[articleName])); 
   
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
