import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { fetchData } from "../../api";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      // text: "OVERALL UPDATE FROM COVID-19 ",
    },
  },
};

const Chart = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchData();
      setDailyData(initialDailyData);
    };
    fetchMyAPI();
  }, []);
  console.log(dailyData.active);
  const labels = [
    `infected: ${dailyData.active}`,
    `recovered: ${dailyData.recovered}`,
    `deaths: ${dailyData.deaths}`,
    `affected countries: ${dailyData.affectedCountries}`,
    `population: ${dailyData.population}`,
    `updated: ${dailyData.updated}`,
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "INFECTED",
        data: `${dailyData.active}`,
        borderColor: "blue",
        backgroundColor: "blue",
        tension: 0.1,
      },
      {
        label: "RECOVERED",
        data: `${dailyData.recovered}`,
        borderColor: "green",
        backgroundColor: "green",

        tension: 0.1,
      },
      {
        label: "DEATHS",
        data: `${dailyData.deaths}`,
        borderColor: "red",
        backgroundColor: "red",
        tension: 0.1,
      },
      {
        label: "POPULATION",
        data: `${dailyData.population}`,
        borderColor: "orange",
        backgroundColor: "orange",
        tension: 0.1,
      },
      {
        label: "OVERALL CASES",
        data: `${dailyData.updated}`,
        borderColor: "indigo",
        backgroundColor: "indigo",
        tension: 0.1,
      },
    ],
  };
  return (
    <Line
      options={options}
      data={data}
      className=" border-gray-400 rounded-lg shadow-2xl bg-gray-50  w-full h-full"
    />
  );
};

export default Chart;
