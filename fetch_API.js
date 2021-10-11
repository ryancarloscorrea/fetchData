const axios = require('axios')
const { Parser } = require('json2csv')
const fs = require('fs');

exports.getData = async (url, fileName, keyToConvertCsv) => {
    try {
        const { data }  = await axios.get(url)
        const parser = new Parser()
        const csv = parser.parse(data[keyToConvertCsv])
        fs.writeFile(`./csv/${fileName}.csv`, csv, (err) => {
            if (err) throw err;
        });
    }catch (e) {
        console.log('error ', e)
    }
}
