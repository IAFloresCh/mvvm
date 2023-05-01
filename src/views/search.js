import { useState } from "react";
import { useNavigate } from "react-router";

import SearchViewModel from "../viewmodels/searchViewModel";

function Search() {
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();


    function handleQueryChange(event) {
        setQuery(event.target.value);
    }

    async function handleSearch(event) {
        event.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const results = await SearchViewModel.searchMovies(query);
            console.log(results);
            navigate(`/movie/${results[0].id}`, { state: { results } });
        } catch (error) {
            setError("No results have been found");
        }

        setIsLoading(false);
    }

    return (
        <div>
            <h1>Movie Finder</h1>
            <form onSubmit={handleSearch}>
                <input type="text" value={query} onChange={handleQueryChange} />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Loading..." : "Search"}
                </button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
}

export default Search;
