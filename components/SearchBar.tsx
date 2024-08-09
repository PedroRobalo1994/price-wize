"use client"

function SearchBar() {
    const handleSubmit = () => {}

    return (
        <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter product link" className="searchbar" />
        </form>
    )
}

export default SearchBar