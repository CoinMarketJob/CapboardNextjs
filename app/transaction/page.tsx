'use client';

import './transaction.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faFileLines, faPenToSquare, faPlus, faSearch, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Box, Modal } from '@mui/material';
import ModalBoxT from './ModalBox';
import Head from 'next/head';
import GeneralFormDropdown from '../components/GeneralFormDropdown/GeneralFormDropdown';

const Page = () => {

  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div style={{padding: "0%", width: "80vw"}} >
    <div className="container">
      <Modal open={openModal} onClose={closeModal}>
        <Box>
          <ModalBoxT CloseModal={closeModal} />
        </Box>
      </Modal>

      <div className="header">
        <h1 style={{fontSize: "20px"}}>Transactions</h1>
        <p className="description">Manage CMJ’s transactions.</p>
      </div>

      <div className="filters">
        <div className="filterItem">
          <label>Stakeholder</label>
          <select className="select">
            <option value="">Select...</option>
            <option>Ali Bay</option>
          </select>
        </div>

        <div className="filterItem">
          <label>Transaction type</label>
          <select className="select">
            <option value="">Select...</option>
            <option>Valuation</option>
            <option>Issue</option>
            <option>Convertible Loan</option>
            <option>Transfer</option>
            <option>Grant</option>
            <option>Payout</option>
            <option>Pool creation</option>
            <option>Pool increase</option>
            <option>Pool decrease</option>
            <option>Split</option>
            <option>Buy back</option>
            <option>Decrease Shares</option>
          </select>
        </div>

        <div className="filterItem">
          <label>Date lower than</label>
          <input type="date" placeholder="gg.aa.yyyy" className="input" />
        </div>

        <button className="searchButton">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <button className="addButton" onClick={() => setOpenModal(true)}>
        <FontAwesomeIcon icon={faPlus} /> ADD TRANSACTION
      </button>
    </div>

    <ul style={{backgroundColor: "rgba(0, 0, 0, 0)", border: "1px solid rgba(0, 0, 0, 0.194)", marginTop: "2rem", padding: "0%", display: "flex", flexDirection: "row"}} >
      <GeneralFormDropdown
        name="2024-06-21"
        child={
        <div style={{width: "70vw"}} id="notes-container">
            <ul style={{display: "flex", flexDirection: "row", padding: "0%"}} >
              <span>RGB</span>
              <div style={{backgroundColor: "#7f95e7", textAlign: "center", color: "white", marginLeft: "1rem", width: "100px", height: "30px", borderRadius: "0.2rem"}} >GRANT</div>
              <div style={{marginLeft: "1.5rem", width: "500px", height: "30px"}} >Stakholder-Name</div>
              <div style={{width: "900px", height: "30px"}} >+1 Phantom</div>
              <FontAwesomeIcon style={{transform: "translateX(1000%)"}} icon={faFileLines} />
              <FontAwesomeIcon style={{marginLeft: "15px", transform: "translateX(500%)"}} icon={faFileLines} />
              <FontAwesomeIcon style={{marginLeft: "15px", transform: "translateX(110px)"}} icon={faEllipsisVertical} />
            </ul>
        </div>
        }
    />
    <FontAwesomeIcon style={{marginTop: "20px", marginRight: "-10px", marginLeft: "auto"}} icon={faPenToSquare} />
    <FontAwesomeIcon style={{marginTop: "20px", marginLeft: "40px", marginRight: "30px"}} icon={faTrashCan} />
      </ul>

      <ul style={{backgroundColor: "rgba(0, 0, 0, 0)", border: "1px solid rgba(0, 0, 0, 0.194)", marginTop: "2rem", padding: "0%", display: "flex", flexDirection: "row"}} >
      <GeneralFormDropdown
        name="2024-06-21"
        child={
        <div style={{width: "70vw"}} id="notes-container">
            <ul style={{display: "flex", flexDirection: "row", padding: "0%"}} >
              <span>RGB</span>
              <div style={{backgroundColor: "#7f95e7", textAlign: "center", color: "white", marginLeft: "1rem", width: "100px", height: "30px", borderRadius: "0.2rem"}} >GRANT</div>
              <div style={{marginLeft: "1.5rem", width: "500px", height: "30px"}} >Stakholder-Name</div>
              <div style={{width: "900px", height: "30px"}} >+1 Phantom</div>
              <FontAwesomeIcon style={{transform: "translateX(1000%)"}} icon={faFileLines} />
              <FontAwesomeIcon style={{marginLeft: "15px", transform: "translateX(500%)"}} icon={faFileLines} />
              <FontAwesomeIcon style={{marginLeft: "15px", transform: "translateX(110px)"}} icon={faEllipsisVertical} />
            </ul>
        </div>
        }
    />
    <FontAwesomeIcon style={{marginTop: "20px", marginRight: "-10px", marginLeft: "auto"}} icon={faPenToSquare} />
    <FontAwesomeIcon style={{marginTop: "20px", marginLeft: "40px", marginRight: "30px"}} icon={faTrashCan} />
      </ul>
    </div>
  );
};

export default Page;
