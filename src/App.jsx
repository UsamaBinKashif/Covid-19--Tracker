import { useEffect, useState } from "react";
import { Cards, Tables, Graph } from "./components";
import HeroImage from "./assets/hero-image.png";
import {
  FormControl,
  InputLabel,
  ListItemIcon,
  MenuItem,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";

function App() {
  const date = new Date();
  const [selected, setSelected] = useState(" ");
  const [countries, setCountries] = useState([]);
  // const [data, setData] = useState([]);

  useEffect(() => {
    const getCountry = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((result) => {
          const data = result.map((country) => ({
            name: country.country,
            flag: country.countryInfo.flag,
            value: country.countryInfo.iso3,
          }));
          setCountries(data);
          // console.log(data)
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getCountry();
  }, []);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <>
      <header className="flex items-center text-center justify-around mt-4 ">
        <img src={HeroImage} alt="hero-image" className="w-80 " />
        <Box sx={{ minWidth: 110 }}>
          <FormControl fullWidth>
            <InputLabel>World Wide</InputLabel>
            <Select
              label="World Wide"
              onChange={handleChange}
              value={selected}
              defaultValue=" "
            >
              <MenuItem value=" ">World Wide</MenuItem>
              {countries.map((country, index) => (
                <MenuItem value={country.value} key={index}>
                  <ListItemIcon>
                    <img
                      src={country.flag}
                      alt={country.name}
                      className="w-5 "
                    />
                  </ListItemIcon>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </header>

      <main className="flex justify-center items-center flex-col p-10">
        <Cards countryData={selected} />
      </main>

      <section className="flex items-center justify-around md:p-20">
        <Graph />
        <Tables />
      </section>
    </>
  );
}

export default App;
