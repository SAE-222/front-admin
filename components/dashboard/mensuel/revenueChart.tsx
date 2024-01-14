import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  Title,
  Legend,
  Tooltip,
  PointElement,
  LineElement,
} from 'chart.js';

ChartJS.register(
  LinearScale,
  CategoryScale,
  Title,
  Legend,
  Tooltip,
  PointElement,
  LineElement
);

export default function LineChart() {
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
          label: 'Revenu en €',
          data: dailyData,
          borderColor: 'rgb(255, 99, 132)', // Rouge
          backgroundColor: 'rgb(255, 99, 132, 0.2)',
          fill: false,
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointRadius: 5,
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
          text: "Revenu Total par jour"
        }
      },
      maintainAspectRatio: false,
      responsive: true
    });
  }, []);

  return (
    <div className="bg-white rounded-lg w-full">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}
