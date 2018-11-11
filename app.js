const fetch = require('node-fetch')
const cheerio = require('cheerio')



const testScraping = async () => {
    const res = await fetch('https://screenrant.com/hilarious-deadpool-memes/')
    const body = await res.text()

    const $ =  cheerio.load(body)

    const api = []

    $('.article-body').map((i, e) => {
        
        let objArr = {
            titles : [],
            images : []
        }

        $(e).find('h2').map((i, e) => objArr.titles.push($(e).text()))
        $(e).find('figure').map((i, e) => objArr.images.push($(e).find('source').eq(2).data('srcset')))


        api.push(objArr)
    })

    return api

}
module.exports = {
    testScraping
}
