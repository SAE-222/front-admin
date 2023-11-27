'use client' 

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });


export function ExampleChart(){

    const option = {
        chart: {
          id: 'apexchart-revenue'
        },
        xaxis: {
          categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec" ]
        }
      }

    const series = [{
        name: '€',
        data: [1099, 2569, 3360, 4808, 5000, 7853, 8026, 9685, 11236, 12596, 13785, 21563]
      }]

    return(
        <>
            <ApexChart type="line" options={option} series={series} height={300} width={800} />
        </>
    )
    
}

export default ExampleChart;