import React, { useState, useEffect } from "react";
import axios from "axios";

export const SearchResults = () => {
    const [data, setData] = useState({ hits: [] });
    const [query, setQuery] = useState("react");

    useEffect(() => {
        let ignore = false;
        console.log('query', query);

        const fetchData = async () => {
            const result = await axios(
                "https://hn.algolia.com/api/v1/search?query=" + query
            );

            if (ignore) {
                console.log('ignore', result)
            } else {
                console.log('not ignore', result)
            }

            if (!ignore) setData(result.data);
        }

        fetchData();
        return () => {
            ignore = true;
        };
    }, [query]);

    return (
        <>
            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            <ul>
                {data.hits.map((item) => (
                    <li key={item.objectID}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </>
    );
}
