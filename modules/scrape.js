const puppeteer = require('puppeteer')
const stores = require('./../stores.json').stores;

module.exports = scrape = async () => {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage()
    console.log("Loading")
    let result = [];


    for (let i = 0; i < stores.length; i++) {
        await page.goto(stores[i].site)
        console.log("Open " + stores[i].name + " page")
        await page.waitForTimeout(1000)
        let pageInfo = await page.evaluate(() => {
            let info = {};
            info.sixMonths = {
                'score': document.querySelector('#reputation > div span.score > b').innerHTML,
                'complaint': {
                    'received': document.querySelector('#reputation div:nth-child(2) > a:nth-child(1) > div > div > b ').innerHTML,
                    'answered': document.querySelector('#reputation div:nth-child(2) > a:nth-child(3) > div > div > b ').innerHTML,
                },
                'percentage': {
                    'complaintsAnswered': document.querySelector('#reputation div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > span').innerHTML,
                    'buyAgain': document.querySelector('#reputation div:nth-child(4) > div:nth-child(1) > div:nth-child(4) > span').innerHTML,
                    'solutionIndex': document.querySelector('#reputation div:nth-child(4) > div:nth-child(1) > div:nth-child(6) > span').innerHTML,
                },
                'consumerSurvey': document.querySelector('#reputation div:nth-child(4) > div:nth-child(1) > div:nth-child(8) > span').innerHTML,
            }
            document.getElementById('reputation-tab-2').click()
            info.twelveMonths = {
                'score': document.querySelector('#reputation > div span.score > b').innerHTML,
                'complaint': {
                    'received': document.querySelector('#reputation div:nth-child(2) > a:nth-child(1) > div > div > b ').innerHTML,
                    'answered': document.querySelector('#reputation div:nth-child(2) > a:nth-child(3) > div > div > b ').innerHTML,
                },
                'percentage': {
                    'complaintsAnswered': document.querySelector('#reputation div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > span').innerHTML,
                    'buyAgain': document.querySelector('#reputation div:nth-child(4) > div:nth-child(1) > div:nth-child(4) > span').innerHTML,
                    'solutionIndex': document.querySelector('#reputation div:nth-child(4) > div:nth-child(1) > div:nth-child(6) > span').innerHTML,
                },
                'consumerSurvey': document.querySelector('#reputation div:nth-child(4) > div:nth-child(1) > div:nth-child(8) > span').innerHTML,
            }
            document.getElementById('reputation-tab-3').click()
            info.oneYearAgo = {
                'score': document.querySelector('#reputation > div span.score > b').innerHTML,
                'complaint': {
                    'received': document.querySelector('#reputation div:nth-child(2) > a:nth-child(1) > div > div > b ').innerHTML,
                    'answered': document.querySelector('#reputation div:nth-child(2) > a:nth-child(3) > div > div > b ').innerHTML,
                },
                'percentage': {
                    'complaintsAnswered': document.querySelector('#reputation div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > span').innerHTML,
                    'buyAgain': document.querySelector('#reputation div:nth-child(4) > div:nth-child(1) > div:nth-child(4) > span').innerHTML,
                    'solutionIndex': document.querySelector('#reputation div:nth-child(4) > div:nth-child(1) > div:nth-child(6) > span').innerHTML,
                },
                'consumerSurvey': document.querySelector('#reputation div:nth-child(4) > div:nth-child(1) > div:nth-child(8) > span').innerHTML,
            }
            document.getElementById('reputation-tab-4').click()
            info.twoYearsAgo = {
                'score': document.querySelector('#reputation > div span.score > b').innerHTML,
                'complaint': {
                    'received': document.querySelector('#reputation div:nth-child(2) > a:nth-child(1) > div > div > b ').innerHTML,
                    'answered': document.querySelector('#reputation div:nth-child(2) > a:nth-child(3) > div > div > b ').innerHTML,
                },
                'percentage': {
                    'complaintsAnswered': document.querySelector('#reputation div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > span').innerHTML,
                    'buyAgain': document.querySelector('#reputation div:nth-child(4) > div:nth-child(1) > div:nth-child(4) > span').innerHTML,
                    'solutionIndex': document.querySelector('#reputation div:nth-child(4) > div:nth-child(1) > div:nth-child(6) > span').innerHTML,
                },
                'consumerSurvey': document.querySelector('#reputation div:nth-child(4) > div:nth-child(1) > div:nth-child(8) > span').innerHTML,
            }
            document.getElementById('reputation-tab-5').click()
            info.general = {
                'score': document.querySelector('#reputation > div span.score > b').innerHTML,
                'complaint': {
                    'received': document.querySelector('#reputation div:nth-child(2) > a:nth-child(1) > div > div > b ').innerHTML,
                    'answered': document.querySelector('#reputation div:nth-child(2) > a:nth-child(3) > div > div > b ').innerHTML,
                },
                'percentage': {
                    'complaintsAnswered': document.querySelector('#reputation div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > span').innerHTML,
                    'buyAgain': document.querySelector('#reputation div:nth-child(4) > div:nth-child(1) > div:nth-child(4) > span').innerHTML,
                    'solutionIndex': document.querySelector('#reputation div:nth-child(4) > div:nth-child(1) > div:nth-child(6) > span').innerHTML,
                },
                'consumerSurvey': document.querySelector('#reputation div:nth-child(4) > div:nth-child(1) > div:nth-child(8) > span').innerHTML,
            }
            return info
        })
        result.push({[stores[i].name]: pageInfo})
    }

    await browser.close()
    return result
};