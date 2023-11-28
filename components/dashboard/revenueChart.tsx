"use client"
import React, { useEffect, useRef } from 'react';
import 'react-apexcharts';

const RevenueChart = () => {
  const chartRef = useRef(null);

  const options = {
    series: [{
      name: '€',
      data: [1099, 2569, 3360, 4808, 5000, 7853, 8026, 9685, 11236, 12596, 13785, 21563],
    }],
    chart: {
      height: 300,
      type: 'line',
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'straight',
    },
    title: {
      text: 'Revenu total',
      align: 'left',
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec" ]
    },
  };

  useEffect(() => {
    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [options]);

  return (
    <div id="chart" ref={chartRef} style={{ width: '100%' }} />
  );
};

export default RevenueChart;


