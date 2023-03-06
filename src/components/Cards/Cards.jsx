import { useEffect, useState } from "react";
import CardItem from "./CardItem/CardItem";

const Cards = ({ countryData }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url =
      countryData === " "
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryData}`;
    const getData = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setData(result);
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getData();
  }, [countryData]);
  return (
    <>
      <p className="text-sm font-bold text-gray-800 mb-2">
        CURRENT UPDATES FROM COVID-19 TODAY
      </p>
      <section className="flex justify-center items-center flex-col md:flex-row ">
        <CardItem
          border={"border-blue-600"}
          title={"Infected"}
          numbers={data?.todayCases}
          description={"Number of active cases of COVID-19"}
        />
        <CardItem
          border={"border-green-600"}
          title={"Recovered"}
          numbers={data?.todayRecovered}
          description={"Number recoveries from COVID-19"}
        />
        <CardItem
          border={"border-red-600"}
          title={"Deaths"}
          numbers={data?.todayDeaths}
          description={"Number of deaths caused by COVID-19"}
        />
      </section>
    </>
  );
};

export default Cards;
