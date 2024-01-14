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
          label: 'Nombre de commandes',
          data: dailyData,
          backgroundColor: 'rgba(86, 182, 150, 0.8)', // Nouvelle couleur (turquoise)
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
          text: "Nombre de commandes par jour"
        }
      },
      maintainAspectRatio: false,
      responsive: true
    });
  }, []);

  return (
    <div className="bg-white rounded-lg w-full">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}
