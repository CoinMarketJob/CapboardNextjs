'use client';

import './transaction.css';
import React, { useState, useEffect, useCallback  } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faFileLines, faPenToSquare, faPlus, faSearch, faTrash, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Box, Modal } from '@mui/material';
import ModalBoxT from './ModalBox';
import Head from 'next/head';
import GeneralFormDropdown from '../components/GeneralFormDropdown/GeneralFormDropdown';

interface GroupedData {
  [date: string]: Array<any>;
}

export const groupDataByDate = (data: Array<any>): GroupedData => {
  return data.reduce((acc: GroupedData, item: Array<any>) => {
    const date = item.date.split('T')[0];
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(item);
    return acc;
  }, {});
};

const Page = () => {

  const [openModal, setOpenModal] = useState(false);

  const [data, setData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [transactionType, setTransactionType] = useState();
  const [date, setDate] = useState();

  const closeModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    async function fetchData() {
        try {
            const response = await fetch('/api/transactions/get');
            const data = await response.json();
            setData(data);

            const groupedData = groupDataByDate(data);
            console.log(groupedData);
            setFilteredData(groupedData);

        } catch (error) {
            console.error('Veri getirme hatası:', error);
        }
    }

    fetchData();
}, []);

  const Search = useCallback(() => {
  console.log("Search called");
  console.log("Transaction Type:", transactionType);
  console.log("Date:", date);

  const newFilteredData = data.filter(item => {
    const itemDate = new Date(item.date);
    const filterDate = new Date(date);
    return itemDate > filterDate && item.type === transactionType;
  });

  console.log("Filtered Data:", newFilteredData);

  const groupedNewFilteredData = groupDataByDate(newFilteredData);
  setFilteredData(groupedNewFilteredData);
}, [data, date, transactionType]);



  return (
    <div style={{padding: "0%", width: "84vw"}} >
    <div className="container">
      <Modal open={openModal} onClose={closeModal}>
        <Box>
          <ModalBoxT CloseModal={closeModal} />
        </Box>
      </Modal>
      <ul style={{padding: "0%", display: "flex", flexDirection: "row"}} >
      <div className="header">
        <h1 style={{fontSize: "20px"}}>Transactions</h1>
        <p className="description">Manage CMJ’s transactions.</p>
      </div>
      <button className="addButton" style={{marginLeft: "45vw"}} onClick={() => setOpenModal(true)}>
        <span style={{fontSize: 24}}>+</span> ADD TRANSACTION
      </button>
      </ul>

      <div className="filters">

        <div className="filterItem">
          <label>Transaction type</label>
          <select className="select" value={transactionType} onChange={(e) => setTransactionType(e.target.value)}>
            <option value="">Select...</option>
            <option value="IssueShares">Issue</option>
            <option value="ConvertibleLoan">Convertible Loan</option>
            <option value="Secondary">Transfer</option>
            <option value="Grant">Grant</option>
            <option value="Payout">Payout</option>
            <option value="PoolCreation">Pool creation</option>
            <option value="PoolIncrease">Pool increase</option>
            <option value="PoolDecrease">Pool decrease</option>
            <option value="DecreaseShares">Decrease Shares</option>
          </select>
        </div>

        <div className="filterItem">
          <label>Date lower than</label>
          <input type="date" placeholder="gg.aa.yyyy" className="input" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>

        <button  onClick={() => Search()} className="searchButton">
          <FontAwesomeIcon icon={faSearch} style={{width: 16, height: 16}} />
        </button>
      </div>
    </div>

    {Object.keys(filteredData).map(date => (

      <ul key={date} style={{backgroundColor: "#f2f2f2f2", border: "1px solid rgba(0, 0, 0, 0.194)", marginTop: "2rem", padding: "0%", display: "flex", flexDirection: "row", width: "82vw"}} >
        <GeneralFormDropdown
          name={date}
          child={
          <div style={{width: "70vw"}} id="notes-container">

            {filteredData[date].map((item) => (
              <div key={item.id} style={{display: "flex", flexDirection: "column"}} >
                <div className='underline' ></div>
                <ul key={item.id} style={{display: "flex", flexDirection: "row", padding: "0%", marginTop: "0.5rem", marginBottom: "0.5rem"}} >
                <span style={{width: "30px"}} >{`#${item.id}`}</span>
                <div style={{backgroundColor: "#7f95e7", textAlign: "center", color: "white", marginLeft: "1rem", width: "200px", height: "30px", borderRadius: "0.2rem"}} >{item.type}</div>
                <div style={{marginLeft: "1.5rem", width: "300px", height: "30px"}} >{item.stakeholder?.name}</div>
                <div style={{width: "300px", height: "30px"}} >{item.type == "PoolDecrease"
                || item.type == "DecreaseShares" ? "-" : item.type== "PlanCreation" ? "" : "+"}
                {item.type == "PlanCreation" ? item.plan.planName : item.type == "ConvertibleLoan"
                || item.type == "Payout" ? item.totalPayment :  item.amount}
                  {item.type == "Grant" ? item.plan.grantType : item.type == "PlanCreation" ? "" :
                item.type == "ConvertibleLoan" || item.type == "Payout" ? "TRY" : "shares"}
                </div>
                <div>{item.type == "PoolCreation" || item.type == "PoolIncrease" ||
                  item.type == "PoolDecrease" || item.type == "DecreaseShares" ? item.shareClass?.name :
                  item.type == "IssueShares" ? "TRY " + item.totalPayment :  item.type == "Secondary" ? "TRY " + item.price : item.type == "ConvertibleLoan" ? "Floor: TRY " + item.floor 
                  + " - TRY " + item.cap + " Discount:" + item.discount + "%" : ""}</div>
                {/* <FontAwesomeIcon style={{transform: "translateX(1000%)"}} icon={faTrash} /> */}
              </ul>
              </div>
            ))}
          </div>
          }
        />
      </ul>

    ))}
    </div>
  );
};

export default Page;
