"use client";
import React, {useEffect, useState} from 'react'
import './grants.css';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ModalBox from './ModalBox';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "0px",
    borderRadius: "18px",
    boxShadow: 24,
    width: "60%"
};

const page = () => {
    const [openModal, setOpenModal] = useState(false);
    const [grants, setGrants] = useState([]);

    const closeModal = () => {
        setOpenModal(false);
    };

    const changeModalState = () => {
        setOpenModal(!openModal);
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/grants/get');
                const data = await response.json();
                console.log(data);
                setGrants(data);

            } catch (error) {
                console.error('Veri getirme hatası:', error);
            }
        }

        fetchData();
    },[])


    return (
        <div className="container">
            <Modal id="ModalSign" open={openModal} onClose={closeModal}>
                <Box sx={{ ...style }}>
                    <ModalBox CloseModal={closeModal} />
                </Box>
            </Modal>
        <h1>Equity Grants</h1>
        <div className="actions">
        <button className="button" onClick={changeModalState}>CREATE EQUITY GRANT</button>
        </div>
        <div className="searchContainer">
        <input type="text" placeholder="search" className="searchInput" />
        </div>
        <div className="tableWrapper">
            {grants.map((item,index) => {
                const transactions = item.transactions;
                return(
                    <div key={index}>
                        <div className="tableHeader">
                            <span className="sarge">{item.name}</span>
                        </div>
                        <div className="table">
                            <div className="tableSubHeader">
                            <span>GRANT - PLAN</span>
                            <span>TYPE</span>
                            <span>STARTS</span>
                            <span>DURATION / INTERVAL / CLIFF</span>
                            <span>GRANTED</span>
                            <span>VESTED</span>
                            <span>AVAILABLE</span>
                            </div>
                            {transactions.map((item,index) => {
                                return(
                                    <div key={index} className="tableRow">
                                        <span>{item.id} - {item.plan.planName}</span>
                                        <span>{item.plan.grantType}</span>
                                        <span>{item.startDate}</span>
                                        <span>{item.duration} / {item.vestEveryDate} / {item.cliff}</span>
                                        <span>{item.amount}</span>
                                        <span>0</span>
                                        <span>0</span>
                                    </div>
                                );
                            })}
                            
                        </div>
                    </div>
                );
            })}            
        </div>
    </div>
    )
}

export default page