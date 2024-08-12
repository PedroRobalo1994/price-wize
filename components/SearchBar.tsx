"use client"

import { scrapeAndStoreProduct } from "@/lib/actions";
import { FormEvent, useState } from "react"

const isValidAmazonProductURL = (url: string) => {
    try {
        const parsedURL = new URL(url);
        const hostname = parsedURL.hostname;

        if(hostname.includes("amazon.com") || hostname.includes("amazon.") || hostname.endsWith('amazon')) {
            return true;
        }
    } catch (error) {
        return false
    }
    const regex = /https:\/\/www.amazon.com\/dp\/[A-Za-z0-9]{10}/g
    return regex.test(url)
}

function SearchBar() {
    const [searchPrompt, setSearchPrompt] = useState("") 
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const isValidLink = isValidAmazonProductURL(searchPrompt)

        if(!isValidLink) return alert("Please provide a valid Amazon product link")

        try {
            setIsLoading(true)
            // Scrape the product page and extract the product title and price
            const product = await scrapeAndStoreProduct(searchPrompt)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }

    }

    return (
        <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
            <input value={searchPrompt} onChange={(e)=> setSearchPrompt(e.target.value)} type="text" placeholder="Enter product link" className="searchbar-input"/>

            <button type='submit' className="searchbar-btn" disabled={searchPrompt === ''}>
                {isLoading ? 'Searching...' : 'Search'}
            </button>
        </form>
    )
}

export default SearchBar