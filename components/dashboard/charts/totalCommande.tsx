import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  Title,
  Legend,
  Tooltip,
  BarElement,
} from 'chart.js';

ChartJS.register(
  LinearScale,
  CategoryScale,
  Title,
  Legend,
  Tooltip,
  BarElement
);

export default function BarChart() {
  type ChartData = {
    labels?: string[];
    datasets: any[];
  };

  const [chartData, setChartData] = useState<ChartData>({
    datasets: []
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Nombre de commandes',
          data: [10, 20, 15, 30, 25, 40, 35, 45, 50, 55, 60, 50], // Ajoutez vos données réelles ici
          backgroundColor: 'rgba(75,192,192,0.8)',
        }
      ]
    });

    setChartOptions({
      scales: {
        x: {
          type: 'category',
          position: 'bottom'
        },
        y: {
          type: 'linear',
          position: 'left',
          min: 0,
        }
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Nombre de commandes par mois"
        }
      },
      maintainAspectRatio: false,
      responsive: true
    });
  }, []);

  return (
    <div className=" bg-white rounded-lg w-full">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}
