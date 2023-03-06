import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useEffect, useState } from "react";

const Tables = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await fetch("https://disease.sh/v3/covid-19/all")
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
  }, []);
  return (
    <div className=" bg-gray-50 shadow-lg p-4 rounded-md ">
      <h2 className="text-center font-bold tracking-widest">
        OVERALL UPDATES FROM COVID-19
      </h2>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow className="bg-gray-200">
              <TableCell>Total Cases</TableCell>
              <TableCell align="right">{data.cases}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total Recovered Cases</TableCell>
              <TableCell align="right">{data.recovered}</TableCell>
            </TableRow>
            <TableRow className="bg-gray-200">
              <TableCell>Total Active Cases</TableCell>
              <TableCell align="right">{data.active}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total Deaths</TableCell>
              <TableCell align="right">{data.deaths}</TableCell>
            </TableRow>
            <TableRow className="bg-gray-200">
              <TableCell>Total Critical Cases</TableCell>
              <TableCell align="right">{data.critical}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total Tests</TableCell>
              <TableCell align="right">{data.tests}</TableCell>
            </TableRow>
            <TableRow className="bg-gray-200">
              <TableCell>World Population</TableCell>
              <TableCell align="right">{data.population}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Affected Countries</TableCell>
              <TableCell align="right">{data.affectedCountries}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Tables;
