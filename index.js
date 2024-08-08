import axios from "axios";
import { load } from "cheerio";
import { Parser } from '@json2csv/plainjs';
import fs from 'fs'


const BASE_URL = `https://quotes.toscrape.com/`;
const END_PAGE = 10 + 1
let pagenum = 0;



const scrapePage = async (url) => {
    try {
        let data1 = []
        const res = await axios.get(url);
        const $ = load(res.data)
        $('div[class="col-md-8"] > div[class="quote"]').each((key, item) => {
            const quotesdata = { quote: "", author: "" }
            quotesdata.quote = $(item).find('.text').text().replace(/^[“]|[”]$/g, '');
            quotesdata.author = $(item).find('span:contains("by") > small').text()
            data1.push(quotesdata)
        })

        return data1
    } catch (error) {
        console.log(error)
        return null
    }

}

const scrapeAllPages = async () => {
    let allItems = [];


    while (!(pagenum === END_PAGE)) {
        const pageUrl = `${BASE_URL}/page/${pagenum}`;

        const items = await scrapePage(pageUrl);
        if (items) {
            allItems = allItems.concat(items);
        }
        pagenum++;
    }
    return allItems


};
scrapeAllPages().then((allItems) => {

    const opts = { fields: ["quote", "author"] };
    const parser = new Parser(opts);
    const csv = parser.parse(allItems);
    console.log(csv);
    fs.writeFile('mynewfile3.csv', csv, "utf-8", function (err) {
        if (err) throw err;
        console.log('Saved!');
    });


});

// * scrape function 
