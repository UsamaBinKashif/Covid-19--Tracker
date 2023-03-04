import { useEffect, useState } from "react";
import { fetchData } from "./api";
import { Cards, Chart } from "./components";
import HeroImage from "./assets/hero-image.png";
import LineGraph from "./components/Chart/LineGraph";
import { PieChart } from "./components/Chart/PieChart";
function App() {
  const date = new Date();

  const [data, setData] = useState("");
  useEffect(() => {
    const getData = async () => {
      const res = await fetchData();
      setData(fetchdb);
    };
    getData();
  }, []);
  return (
    <>
      <header className="flex items-center text-center justify-center mt-4">
        <img src={HeroImage} alt="hero-image" className="w-96" />
      </header>
      <main className="flex justify-center items-center flex-col p-10">
        <p className="text-sm font-bold text-gray-800 mb-2">
         CURRENT UPDATES FROM COVID-19
        </p>
        <section className="flex justify-center items-center flex-col md:flex-row ">
          <Cards
            border={"border-blue-600"}
            title={"Infected"}
            numbers={data.todayCases}
            description={"Number of active cases of COVID-19"}
          />
          <Cards
            border={"border-green-600"}
            title={"Recovered"}
            numbers={data.todayRecovered}
            description={"Number recoveries from COVID-19"}
          />
          <Cards
            border={"border-red-600"}
            title={"Deaths"}
            numbers={data.todayDeaths}
            description={"Number of deaths caused by COVID-19"}
          />
        </section>
      </main>

      <section className="flex items-center flex-col justify-center md:p-20">
        <p className="text-sm font-bold text-gray-800 mb-2">
          OVERALL UPDATES FROM COVID-19
        </p>
        <p className="text-[10px] font-bold text-gray-500 mb-2">
          (click the labels to see one by one)
        </p>
        {/* <Chart /> */}
        
      </section>

      <footer className="text-center mb-3">
        <p className="font-bold text-lg">
          Update:{" "}
          <span className="text-gray-500">
            {date.toString().slice(0, 15).replace(/ /g, "/")}
          </span>{" "}
        </p>
      </footer>
    </>
  );
}

export default App;
