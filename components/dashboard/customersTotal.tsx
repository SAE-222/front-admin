"use client"
import React, { useEffect, useRef } from 'react';
import ReactApexChart from 'react-apexcharts';

const ProductTrendsChart = () => {
  const chartRef = useRef(null);

  const options = {
    series: [{
      name: 'Actual',
      data: [
        {
          x: 'Jan',
          y: 1099,
          goals: [
            {
              name: 'Expected',
              value: 1200,
              strokeHeight: 5,
              strokeColor: '#775DD0',
            },
          ],
        },
        {
          x: 'Feb',
          y: 2569,
          goals: [
            {
              name: 'Expected',
              value: 2000,
              strokeHeight: 5,
              strokeColor: '#775DD0',
            },
          ],
        },
        {
          x: 'Mar',
          y: 3800,
          goals: [
            {
              name: 'Expected',
              value: 3500,
              strokeHeight: 5,
              strokeColor: '#775DD0',
            },
          ],
        },
        {
          x: 'Apr',
          y: 4356,
          goals: [
            {
              name: 'Expected',
              value: 5000,
              strokeHeight: 5,
              strokeColor: '#775DD0',
            },
          ],
        },
        {
          x: 'May',
          y: 6156,
          goals: [
            {
              name: 'Expected',
              value: 5200,
              strokeHeight: 5,
              strokeColor: '#775DD0',
            },
          ],
        },
        {
          x: 'Jun',
          y: 6895,
          goals: [
            {
              name: 'Expected',
              value: 7500,
              strokeHeight: 5,
              strokeColor: '#775DD0',
            },
          ],
        },
        {
          x: 'Jul',
          y: 7165,
          goals: [
            {
              name: 'Expected',
              value: 8500,
              strokeHeight: 5,
              strokeColor: '#775DD0',
            },
          ],
        },
        {
          x: 'Aug',
          y: 9685,
          goals: [
            {
              name: 'Expected',
              value: 9000,
              strokeHeight: 5,
              strokeColor: '#775DD0',
            },
          ],
        },
        {
          x: 'Sep',
          y: 12236,
          goals: [
            {
              name: 'Expected',
              value: 10000,
              strokeHeight: 5,
              strokeColor: '#775DD0',
            },
          ],
        },
        {
          x: 'Oct',
          y: 11236,
          goals: [
            {
              name: 'Expected',
              value: 12000,
              strokeHeight: 5,
              strokeColor: '#775DD0',
            },
          ],
        },
        {
          x: 'Nov',
          y: 13785,
          goals: [
            {
              name: 'Expected',
              value: 14000,
              strokeHeight: 5,
              strokeColor: '#775DD0',
            },
          ],
        },
        {
          x: 'Dec',
          y: 12965,
          goals: [
            {
              name: 'Expected',
              value: 15000,
              strokeHeight: 5,
              strokeColor: '#775DD0',
            },
          ],
        },
      ],
    }],
    chart: {
      height: 300,
      type: 'bar',
    },
    title: {
      text: 'Clients total',
      align: 'left',
    },
    plotOptions: {
      bar: {
        columnWidth: '60%',
      },
    },
    colors: ['#00E396', '#775DD0'],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      customLegendItems: ['Actual', 'Expected'],
      markers: {
        fillColors: ['#00E396', '#775DD0'],
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
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

export default ProductTrendsChart;

