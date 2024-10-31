import { useState, useEffect } from 'react';
import {Button, TextField, Box} from "@mui/material";

export type googleItem = {
    title: string
    link: string
}
export type imgList = {
    items: googleItem[]
}

function NoodleSearch() {
    const [query, setQuery] = useState("spaghetti");
    const NoodleIt = "Noodle"
    const [searchResult, setSearchResult] = useState<imgList>();
    const engine_id = "f238b1c279426487b";
    const GOOGLE_API_KEY = "AIzaSyCd4xJ0yIbfkN19JX4xxeKzE1aenYxqQBA";
    const url = `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${engine_id}&searchType=image&q=${NoodleIt}${query}water`;
    async function fetcher(url: string) {
        const response = await fetch(url);
        const json = await response.json();
        setSearchResult(json);
    }
    
    useEffect(() => {
        fetcher(url);
    }, []);

    return (
        <div>
        <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }} noValidate autoComplete="off" >
            <TextField id="outlined-basic" label="Filled" variant="filled" placeholder="Noodle it!"
                onChange={(e) => setQuery(e.target.value)}/>
        </Box>
            <Button variant="contained" onClick={() => {
                fetcher(url);
            }}>Search</Button>
            <img src={searchResult?.items[0].link} />
        </div>
  );
}

export default NoodleSearch;