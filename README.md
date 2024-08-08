
# web_scraping_script

This Node.js script is designed to scrape data from a specified website and store the extracted information in a CSV file. It utilizes the cheerio library for parsing and manipulating HTML content, along with the axios library for making HTTP requests. The script is straightforward and can be customized to scrape various types of data depending on the structure of the target website.


## Features

- Web Scraping: Uses Cheerio to parse and traverse HTML, allowing you to extract specific data elements from web pages.
- HTTP Requests: Leverages Axios to fetch the HTML content of the target web pages.
- CSV Export: Converts the scraped data into a CSV format and writes it to a file using the @json2csv/plainjs library.


## Prerequisites
- Node.js  
- NPM  
## Installation

   1. clone the repo:

```bash
  git clone https://github.com/lalitocean/web_scraping_script.git
cd https://github.com/lalitocean/web_scraping_script.git

```
2. Install dependencies:

```bash
 npm install


```   
## Usage/Examples
Run the script using Node.js
```bash
 node scrape.js

```
or
```bash
npm run dev

```


## Authors

- [@lalitocean](https://github.com/lalitocean)

