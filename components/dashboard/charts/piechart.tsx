import { useState, useEffect } from "react";
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Legend,
  Tooltip,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  Title,
  Legend,
  Tooltip,
  ArcElement
);

export default function PieChart() {
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
      labels: ['Hommes', 'Femmes'],
      datasets: [
        {
          data: [60, 40], // Pourcentage d'hommes et de femmes
          backgroundColor: ['#36A2EB', '#FF6384'], // Couleurs des tranches
          hoverBackgroundColor: ['#36A2EB', '#FF6384'],
        }
      ]
    });

    setChartOptions({
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: "Répartition Hommes / Femmes"
        }
      },
      maintainAspectRatio: false,
      responsive: true
    });
  }, []);

  return (
    <div className=" bg-white rounded-lg w-full">
      <Doughnut data={chartData} options={chartOptions} />
    </div>
  );
}
