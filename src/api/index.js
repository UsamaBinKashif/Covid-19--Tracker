import axios from "axios";

// export const allCountries =
//   "https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1";
// export const TodaysData = "https://disease.sh/v3/covid-19/all";
// export const allCountriesData = "https://disease.sh/v3/covid-19/countries";
// export const newWorldwideCases =
//   "https://disease.sh/v3/covid-19/historical/all?lastdays=120";
const url = "https://disease.sh/v3/covid-19/all";

export const fetchData = async () => {
  try {
    const {
      data: {
        todayCases,
        todayRecovered,
        todayDeaths,
        updated,
        deaths,
        recovered,
        active,
        affectedCountries,
        population
      },
    } = await axios.get(url);

    return {
      todayCases,
      todayRecovered,
      todayDeaths,
      updated,
      deaths,
      recovered,
      active,
      affectedCountries,
      population
    };
  } catch (error) {
    console.log(error);
  }
};
