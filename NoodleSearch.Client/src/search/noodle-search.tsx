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
    const url = ``;

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