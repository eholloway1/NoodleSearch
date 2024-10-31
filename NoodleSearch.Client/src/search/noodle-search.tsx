import { useState, useEffect } from 'react';
import {Button, TextField, Box, ImageList, ImageListItem, ToggleButton} from "@mui/material";

export type googleItem = {
    title: string
    link: string
}
export type imgList = {
    items: googleItem[]
}

function NoodleSearch() {
    const [query, setQuery] = useState("spaghetti");
    const NoodleIt = "Noodle";
    const [noodleOrNot, setNoodleOrNot] = useState(true);
    const [searchResult, setSearchResult] = useState<imgList | undefined | null>();
    const engine_id = "f238b1c279426487b";
    const GOOGLE_API_KEY = "AIzaSyCd4xJ0yIbfkN19JX4xxeKzE1aenYxqQBA";
    const url = noodleOrNot ? 
        `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${engine_id}&searchType=image&q=${NoodleIt}+`+`${query}`
    : `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${engine_id}&searchType=image&q=${query}`;
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
            <ToggleButton value="Noodle It!" color="primary" selected={noodleOrNot} onChange={() => {
                setNoodleOrNot((noodleOrNot) => !noodleOrNot)
                fetcher(url)
            }}>Noodle It!</ToggleButton>
        <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }} noValidate autoComplete="off" >
            <TextField id="outlined-basic" label="Filled" variant="filled" placeholder="Noodle it!"
                onChange={(e) => setQuery(e.target.value)}/>
        </Box>
            <Button variant="contained" onClick={() => {
                fetcher(url);
            }}>Search</Button>
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {searchResult? searchResult.items.map((item) => (
                    <ImageListItem key={item.link}>
                        <img srcSet={item.link} src={item.link} alt={item.title} loading={"lazy"}/>
                    </ImageListItem>
                )) : <img src={""}/>}
            </ImageList>
        </div>
  );
}

export default NoodleSearch;