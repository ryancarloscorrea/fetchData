const axios = require('axios')
const ObjectsToCsv = require('objects-to-csv')

const getData = async (url, fileName, keyToConvertCsv) => {
    try {
        const { data }  = await axios.get(url)
        console.log(typeof data)
        console.log(data.map(item => item.id))
        // const csv = new ObjectsToCsv(data[`${keyToConvertCsv}`])
        // await csv.toDisk(`./${fileName}.csv`)

    }catch (e) {
        console.log('error ', e)
    }
}
//getData('https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc&page=1&per_page=50', 'git', items)
// getData('https://gnews.io/api/v4/search?q=example&?max=50&token=6dbcf01daaa0271463f519a5d6f5468a', 'news', 'articles')
//getData('https://api.stackexchange.com/2.3/answers?pagesize=50&order=desc&sort=activity&site=stackoverflow', 'stackexchange', 'items')

getData('https://picsum.photos/v2/list?limit=50')
