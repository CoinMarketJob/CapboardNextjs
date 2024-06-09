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
    labels: ['Founders'],
    datasets: [{
      label: 'Poll',
      data: [3.6],
      backgroundColor: ['green'],
      borderColor: ['green'],
    }]
  }

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
          <span className="card-1-title-2" >TRY 100</span>
        </li>
        <li className="card-1" >
          <span className="card-1-title" >Received Investment</span>
          <span className="card-1-title-2" >TRY 0</span>
        </li>
        <li className="card-1" >
          <span className="card-1-title" >Stakeholders</span>
          <span className="card-1-title-2" >1</span>
        </li>
        <li className="card-1" >
          <span className="card-1-title" >Not Diluted Shares</span>
          <span className="card-1-title-2" >100</span>
        </li>
      </ul>
      <div className="card-2" >
        <h2 className="title" >Cap table by group</h2>
        <div style={{ height: '300px' }}>
        <Doughnut style={{marginLeft: "30vw"}} data={graphData} options={options} />
        </div>
      </div>
      <div className="card-3" >
        <h2 className="title" >Stakeholders that have not joined Capboard yet</h2>
        <ul>
          <ul style={{display:"flex", flexDirection: "row"}} >
          <div style={{width: "280px"}} ><div className="stakeholders-not-joined-list-header" >NAME</div></div>
          <div style={{width: "270px"}} ><div className="stakeholders-not-joined-list-header" >TYPE</div></div>
          <div style={{width: "300px"}} ><div className="stakeholders-not-joined-list-header" >GROUP</div></div>
          <div style={{width: "430px"}} ><div className="stakeholders-not-joined-list-header" >E-MAIL</div></div>
          <div style={{width: "270px"}} ><div className="stakeholders-not-joined-list-header" >PORTFOLIO ACCESS</div></div>
          </ul>
          <div className="underline" ></div>
        {stakeholdersNotJoined.map((item) => (
              <ul className="stakeholders-not-joined-list" key={item.name}>
                <ul className="stakeholders-not-joined-list-item-row" >
                  <div style={{width: "280px"}} ><div className="stakeholders-not-joined-list-item" >{item.name}</div></div>
                  <div style={{width: "280px"}} ><div className="stakeholders-not-joined-list-item" >{item.type}</div></div>
                  <div style={{width: "265px"}} ><div className="stakeholders-not-joined-list-item" >{item.group}</div></div>
                  <div style={{width: "450px"}} ><div className="stakeholders-not-joined-list-item" >{item.Email}</div></div>
                  <button className="invite-button" >INVITE</button>
                </ul>
                <div className="underline" ></div>
              </ul>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
