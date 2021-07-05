const scrape = require('./modules/scrape')
const fs = require('fs');

scrape().then((value) => {
    fs.writeFile(__dirname + '/extraction/extractionReclameAqui.json', JSON.stringify(value), err => {
        console.log(err || 'Saved file')
    })
    console.log(value)
});

