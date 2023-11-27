"use client"
import React from 'react';
import Chart from 'react-apexcharts';

export default function SampleLine() {
  const series = [
    {
      name: "Nombre de clients",
      data: [380, 563, 248, 785, 826, 650]
    }
  ];
  const options = {
    chart: {
      id: "simple-bar"
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
    }
  };
  return (
    <div>
      <Chart options={options} type="bar" series={series} height={300} width={400} />
    </div>
  );
}
