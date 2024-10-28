import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
    const api_key = "AIzaSyCd4xJ0yIbfkN19JX4xxeKzE1aenYxqQBA";
    const engine_id = "f238b1c279426487b";
    const url = `https://www.googleapis.com/customsearch/v1?key=${api_key}&cx=${engine_id}&searchType=image&q=${query}water`;
    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;  
    async function fetcher(url: string) {
        const response = await fetch(url);
        const json = await response.json();
        setSearchResult(json);
    }

    useEffect(() => {
        fetcher(url);
    }, []);

  return (
      <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" defaultValue="Noodle it!"/>
      </Box>
  );
}

export default NoodleSearch;