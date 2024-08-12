'use server'
import axios from 'axios'
import * as cheerio from 'cheerio'

export async function scrapeAmazonProduct(productUrl: string) {
    if(!productUrl) return 
    // Parse the HTML and extract the product title and price

    const username = String(process.env.BRIGHT_DATA_USERNAME)
    const password = String(process.env.BRIGHT_DATA_PASSWORD)
    const port = 22225
    const session_id = (1000000 * Math.random()) | 0
    const options = {
        auth: {
            username: `${username}-session-${session_id}`,
            password
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false,
    }

    try {
        const response = await axios.get(productUrl, options)

        console.log(response.data)
    } catch (error: any) {
        throw new Error(`Failed to scrape product ${productUrl}: ${error.message}`)
        
    }
}

    // curl --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_f68d4f56-zone-web_unlocker_price_wize:ms8u1z04jpe1 -k "https://geo.brdtest.com/welcome.txt"

