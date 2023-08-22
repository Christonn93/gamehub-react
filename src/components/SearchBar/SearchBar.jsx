import React from "react";

import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";

import useApi from "../../hooks/useApi";

const apiKey = "f3c9bc51d79e4d47923201a9a9b5f4de";

const SearchBar = () => {
 const [age, setAge] = React.useState("");

 const { data: platformData } = useApi(`/platforms/lists/parents?key=${apiKey}&page_size=1000`, "GET");
 const { data: genreData } = useApi(`/genres?key=${apiKey}&page_size=1000`, "GET");
 const { data: tagsData } = useApi(`/tags?key=${apiKey}&page_size=1000`, "GET");

 const platformsArray = platformData.results;
 const genreArray = genreData.results;
 const tagsArray = tagsData.results;

 if (platformsArray === undefined) return null;
 if (genreArray === undefined) return null;
 if (tagsArray === undefined) return null;

 const handleChange = (event) => {
  setAge(event.target.value);
 };

 return (
  <Paper elevation={2}>
   <Box
    sx={{
     display: "flex",
     flexDirection: "column",
     gap: 1,
     p: 2,
     minWidth: "200px",
    }}
   >
    <Typography variant="subtitle1" component={"h4"} marginBottom={2}>
     Filter
    </Typography>

    <Box marginBottom={2}>
     <TextField placeholder="Search" />
    </Box>

    <Box marginBottom={2}>
     <FormControl fullWidth>
      <InputLabel id="sorter">Sorter</InputLabel>
      <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="sorter" onChange={handleChange}>
       <MenuItem value={10}>Ten</MenuItem>
       <MenuItem value={20}>Twenty</MenuItem>
       <MenuItem value={30}>Thirty</MenuItem>
      </Select>
     </FormControl>
    </Box>

    <Accordion>
     <AccordionSummary>
      <Typography variant="overline" component="h4">
       Genre
      </Typography>
     </AccordionSummary>
     <AccordionDetails>
      <FormGroup>
       {genreArray.map((e) => (
        <FormControlLabel key={e.id} control={<Checkbox />} label={e.name} />
       ))}
      </FormGroup>
     </AccordionDetails>
    </Accordion>

    <Accordion>
     <AccordionSummary>
      <Typography variant="overline" component="h4">
       Platform
      </Typography>
     </AccordionSummary>
     <AccordionDetails>
      <FormGroup>
       {platformsArray.map((e) => (
        <FormControlLabel key={e.id} control={<Checkbox />} label={e.name} />
       ))}
      </FormGroup>
     </AccordionDetails>
    </Accordion>

    <Accordion>
     <AccordionSummary>
      <Typography variant="overline" component="h4">
       Tags
      </Typography>
     </AccordionSummary>
     <AccordionDetails>
      <FormGroup>
       {tagsArray.map((e) => (
        <FormControlLabel key={e.id} control={<Checkbox />} label={e.name} />
       ))}
      </FormGroup>
     </AccordionDetails>
    </Accordion>
   </Box>
  </Paper>
 );
};

export default SearchBar;
