import { useState, useEffect } from 'react';

export type googleItem = {
    title: string
    link: string
}
export type imgList = {
    items: googleItem[]
}

function NoodleSearch() {
    const [query, setQuery] = useState("Noodle");
    const [searchResult, setSearchResult] = useState<imgList>();
    const api_key = "";
    const engine_id = "";
    const url = `https://www.googleapis.com/customsearch/v1?key=${api_key}&cx=${engine_id}f238b1c279426487b&searchType=image&q=${query}water`;

    async function fetcher(url: string) {
        const response = await fetch(url);
        const json = await response.json();
        setSearchResult(json);
    }

    useEffect(() => {
        fetcher(url);
    }, []);

  return (
      <img src={searchResult?.items[0].link} />
  );
}

export default NoodleSearch;