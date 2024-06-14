"use client";

import React, { useEffect, useState } from "react";
import "./dashboard.css";
import Chart from 'chart.js/auto';
import{Doughnut} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);



const Dashboard = () => {
  const[data, setData] = useState([]);

  const[transactions, setTransactions] = useState([]);
  const[companyTransactions, setCompanyTransactions] = useState([]);
  const[investment, setInvestment] = useState([]);

  const graphData = {
    labels: ['Equity Plans', "Founders"],
    datasets: [{
      label: 'Poll',
      data: [100,0],
      backgroundColor: ['green', "purple"], // Farklı renkler
      borderColor: ['green', "purple"],    // Farklı renkler
    }]
  };
  const [chartData, setChartData] = useState(graphData);

  const options = {
    cutout: '80%',
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        fontColor: 'black', // Color of legend labels
        fontSize: 12, // Font size of legend labels
      }
    }
  };
  
  useEffect(() => {
    async function fetchData() {
        try {
            const response = await fetch('/api/stakeholders/get');
            const data = await response.json();
            setData(data);

            
            const response2 = await fetch('/api/transactions/get');
            const data2 = await response2.json();
            setTransactions(data);

            const newData = await data2.filter(x=> x.type == "IssueShares" || x.type == "DecreaseShares");
            console.log(newData);

            const totalSharesCompany =  newData.reduce((acc,item) => {
              if (item.type === "IssueShares") {
                return acc + item.amount;
              } else if (item.type === "DecreaseShares") {
                return acc - item.amount;
              } else {
                return acc; // Diğer transaction tipleri için toplamı değiştirme
              }
            },0)
            console.log(totalSharesCompany);

            const newData2 = await data2.filter(x=> x.type == "PoolIncreation" || x.type == "PoolCreation" || x.type == "PoolDecrease");
            console.log(newData2);

            const totalEquity =  newData2.reduce((acc,item) => {
              if (item.type === "PoolIncreation" || item.type == "PoolCreation") {
                return acc + item.amount;
              } else if (item.type === "PoolDecrease") {
                return acc - item.amount;
              } else {
                return acc; // Diğer transaction tipleri için toplamı değiştirme
              }
            },0)
            console.log(totalEquity);

            setChartData({
              ...graphData,
              datasets: [{
                ...graphData.datasets[0],
                data: [totalEquity, totalSharesCompany],
              }],
            });

            console.log(graphData);

            const newData3 = await data2.filter(x=> x.type == "Payout" || x.type == "ConvertibleLoan");
            console.log(newData3);

            const totalInvestment =  newData3.reduce((acc,item) => {
              if (item.type === "Payout" || item.type == "ConvertibleLoan") {
                return acc + item.totalPayment;
              } else {
                return acc; // Diğer transaction tipleri için toplamı değiştirme
              }
            },0);
            setInvestment(totalInvestment);


        } catch (error) {
            console.error('Veri getirme hatası:', error);
        }
    }

    fetchData();
}, []);

  return (
    <div>
      <ul className="card-row" >
        <li className="card-1" >
          <span className="card-1-title" >Post-Money Valuation</span>
          <span className="card-1-title-2" >TRY 0</span>
        </li>
        <li className="card-1" >
          <span className="card-1-title" >Received Investment</span>
          <span className="card-1-title-2" >TRY {investment}</span>
        </li>
        <li className="card-1" >
          <span className="card-1-title" >Stakeholders</span>
          <span className="card-1-title-2" >{data.length}</span>
        </li>
        <li className="card-1" >
          <span className="card-1-title" >Not Diluted Shares</span>
          <span className="card-1-title-2" >9</span>
        </li>
      </ul>
      <div className="card-2" >
        <h2 className="title" >Cap table by group</h2>
        <div style={{ height: '300px' }}>
        <Doughnut style={{marginLeft: "30vw"}} data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
