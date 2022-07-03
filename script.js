const feedDisplay = document.querySelector('#feed')
const feedDisplay2 = document.querySelector('#feed2')



fetch('http://localhost:3000/result')
    .then(response => {return response.json()})
    .then(data => {
        data.forEach(articles => {
            const articleItem = 
            `<div>
            <h3 style="background-color: #fb651e" >` + articles.title + `</h3>
            <a href="` + articles.url + `">` + articles.url + `</a>
            </div>`
            feedDisplay.insertAdjacentHTML("beforeend", articleItem)

           
    })
})
    .catch(err => console.log(err))
