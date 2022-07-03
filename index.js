const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())





const url = "https://news.ycombinator.com/"
// const url2 = "https://news.ycombinator.com/"

app.get('/', function (req, res) {
    res.json('This is YCombinatorScraper')
})

app.get("/result", function (req, res) {
    axios(url)
    .then((response) => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []

        $('.athing', html).each(function () { //<-- cannot be a function expression
            const title = $(this).text()
            const url = $(this).find(".title").find('a').attr('href')
            articles.push({
                title,
                url
            })
            // console.log(articles );
        }) 
      
         
        
    res.json(articles)
    }).catch((err) => {
    console.log(err)
    });

})

   

// }).catch(err => console.log(err))


app.listen(3000, function(){
    console.log("server started on port 3000")
});