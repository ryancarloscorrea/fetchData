const axios = require('axios')
const { Parser } = require('json2csv')
const fs = require('fs');

const getData = async (url, fileName) => {
    try {
        const { data }  = await axios.get(url)
        const parser = new Parser()
        const csv = parser.parse(data)
        fs.writeFile(`./csv/${fileName}.csv`, csv, (err) => {
            if (err) throw err;
        });
    }catch (e) {
        console.log('error ', e)
    }
}

getData('https://picsum.photos/v2/list?limit=50', 'picsum')
getData('https://gnews.io/api/v4/search?q=example&?max=50&token=6dbcf01daaa0271463f519a5d6f5468a', 'news')
getData('https://api.stackexchange.com/2.3/answers?pagesize=50&order=desc&sort=activity&site=stackoverflow', 'stackexchange')
