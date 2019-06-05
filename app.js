//load modules
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var feed = require("feed-read");

//set view engine to ejs
app.set('view engine', 'ejs');

//set upp public directory to serve static files
app.use(express.static('public'));

//Initiate bodyParser to parse request body
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//https://www.svt.se/nyheter/rss.xml
//http://feeds.idg.se/idg/ETkj
function getArticles(fn){
    feed("https://www.svt.se/nyheter/rss.xml", function(err, articles) {
        if (err) throw err;
        // Each article has the following properties:
        // 
        //   * "title"     - The article title (String).
        //   * "author"    - The author's name (String).
        //   * "link"      - The original article link (String).
        //   * "content"   - The HTML content of the article (String).
        //   * "published" - The date that the article was published (Date).
        //   * "feed"      - {name, source, link}
        // 
        //console.log(articles);
        fn(articles.slice(0,5));
    });
}

//Routes

app.get('/', (req, res) => {
    getArticles((result) =>{
        res.render('index', {articles : result});
    });
    
});


// Run server
console.log("Server is listening...")
app.set('port', process.env.PORT || 3003);
app.listen(app.get('port'));