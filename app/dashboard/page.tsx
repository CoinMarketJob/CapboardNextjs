"use client";

import React from "react";
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
  const stakeholdersNotJoined = [
    { name: 1, type: "Bir", group: "BİR", Email: "sqsrpfxnlqaikbxeld@cazlq.com"},
    { name: 2, type: "İki", group: "İKİ", Email: "sqsrpfxnlqaikbxeld@cazlq.com"},
    { name: 3, type: "Üç", group: "ÜÇ", Email: "sqsrpfxnlqaikbxeld@cazlq.com"},
    { name: 4, type: "Dört", group: "DÖRT", Email: "sqsrpfxnlqaikbxeld@cazlq.com"},
  ];

  const graphData = {
    labels: ['Equity Plans'],
    datasets: [{
      label: 'Poll',
      data: [100],
      backgroundColor: ['green'], // Farklı renkler
      borderColor: ['green'],    // Farklı renkler
    }]
  };

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

  return (
    <div>
      <ul className="card-row" >
        <li className="card-1" >
          <span className="card-1-title" >Post-Money Valuation</span>
          <span className="card-1-title-2" >TRY 0</span>
        </li>
        <li className="card-1" >
          <span className="card-1-title" >Received Investment</span>
          <span className="card-1-title-2" >TRY 1</span>
        </li>
        <li className="card-1" >
          <span className="card-1-title" >Stakeholders</span>
          <span className="card-1-title-2" >1</span>
        </li>
        <li className="card-1" >
          <span className="card-1-title" >Not Diluted Shares</span>
          <span className="card-1-title-2" >1</span>
        </li>
      </ul>
      <div className="card-2" >
        <h2 className="title" >Cap table by group</h2>
        <div style={{ height: '300px' }}>
        <Doughnut style={{marginLeft: "30vw"}} data={graphData} options={options} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
