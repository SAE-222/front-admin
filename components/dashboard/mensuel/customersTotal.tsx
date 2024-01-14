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
    // Simuler des données pour 31 jours (vous devrez remplacer par vos propres données réelles)
    const daysInMonth = 31;
    const dailyData = Array.from({ length: daysInMonth }, (_, index) => Math.floor(Math.random() * 100));

    setChartData({
      labels: Array.from({ length: daysInMonth }, (_, index) => (index + 1).toString()), // Étiquettes des jours
      datasets: [
        {
          label: 'Nombre de clients',
          data: dailyData,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgb(90, 19, 204, 0.8)'
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
          position: 'left'
        }
      },
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: "Nombre de clients par jour"
        }
      },
      maintainAspectRatio: false,
      responsive: true
    });
  }, []);

  return (
    <div className=" bg-white rounded-lg w-full h-[272px]">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}
