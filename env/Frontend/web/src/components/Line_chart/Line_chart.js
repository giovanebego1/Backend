import React from 'react';
import "../Line_chart/Line_chart.css"
import {  Chart as ChartJS,  CategoryScale,  LinearScale,  PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
  
function Line_chart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Grifico de despesas da empresa',
      },
    },
  };
  
  const labels = ['Setembro', 'Outubro', 'Novembro'];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Vendas',
        data: [1000,2000,3000],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Recursos Humanos',
        data: [7000,8000,9000],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Marketing',
        data: [3000,5000,3300],
        borderColor: 'rgb(255, 162, 235)',
        backgroundColor: 'rgba(255, 162, 235, 0.5)',
      },
    ],
  };
  return (
    <div className='Line_chart'>
      <div className="linechart_container">
        <Line options={options} data={data}/>
      </div>
    </div>
  )
}

export default Line_chart;