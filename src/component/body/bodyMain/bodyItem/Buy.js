import styles from './Buy.module.css';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export default function Buy(props) {
  const data = {
    labels: ["5분", "15분", "30분", "1시간", "5시간", "일간", "주간", "월간"],
    datasets: [
      {
        label: "First dataset",
        data: [5, 4, 3, 2, 5, 4, 1, 5],
        fill: true,
        backgroundColor: "#993636",
        borderColor: "#993636",
        borderRadius: Number.MAX_VALUE,
      },
    ],
  };

  const options = {
  scaleFontColor: 'red',
          responsive: true,
          tooltips: {
              mode: 'single',
          },
    scaleShowLabels: false,
    scales: {
      xAxes: [{
        display: false,
        ticks: {
          display: false,
          fontColor : 'rgba(12, 13, 13, 1)',
          fontSize : 14,
        },
        scaleLabel: {
          display: false,
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
        scaleLabel: {
          display: false,
          fontColor: "green",
        },
      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
        },
        scaleLabel: {
          display: false,
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
        scaleLabel: {
          display: false,
        },
      }],
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
      }
    },
  };

  return (
    <>
      <div className={`${styles.wrap}`}>
        <strong>
          {props.stock.stock}
        </strong>

        <Bar data={data} options={options} />
      </div>
    </>
  );
}