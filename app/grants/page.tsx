"use client";
import React, { useEffect, useState } from 'react';
import './grants.css';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ModalBox from './ModalBox';
import MoreVertIcon from '@mui/icons-material/MoreVert';  // Import the icon
import Menu from '@mui/material/Menu';  // Import the Menu component
import MenuItem from '@mui/material/MenuItem';  // Import the MenuItem component

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "0px",
    borderRadius: "18px",
    boxShadow: 24,
    width: "60%"
};

const page = () => {
    const [openModal, setOpenModal] = useState(false);
    const [grants, setGrants] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);  // State for menu anchor
    const [selectedGrant, setSelectedGrant] = useState(null);  // State for selected grant

    const handleClick = (event, grant) => {
        setAnchorEl(event.currentTarget);
        setSelectedGrant(grant);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setSelectedGrant(null);
    };

    const closeModal = () => {
        setOpenModal(false);
    };

    const changeModalState = () => {
        setOpenModal(!openModal);
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`/api/grants/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                window.location.href = "/grants";
            } else {
                console.error('Silme işlemi başarısız.');
            }
        } catch (error) {
            console.error('Silme hatası:', error);
        }
    };

    const exercise = async (id) => {
        console.log(id);
        const submitData = { transactionId: id }
        try {
        const response = await fetch('/api/exercise',{
            method: 'POST',
            body: JSON.stringify(submitData),
            headers: {
            'content-type': 'application/json'
            }
        })
        console.log(response);

        if(response.ok){
            window.location.href="/grants";
        }else{
            console.log("Failed");
        }
        }
        catch (error){
            console.log(error);
        }
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
    }, []);

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
            <div className="tableWrapper">
                {grants.map((item, index) => {
                    const transactions = item.transactions;
                    return (
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
                                    <span>EXERCISED</span>
                                    <span>AVAILABLE</span>
                                    <span></span>
                                </div>
                                {transactions.map((item, index) => {
                                    return (
                                        <div key={index} className="tableRow">
                                            <span>{item.id} - {item.plan.planName}</span>
                                            <span>{item.plan.grantType}</span>
                                            <span>{item.startDate != "" ? new Date(item.startDate).toLocaleDateString("en-EN") : ""}</span>
                                            <span>{item.vestingType == "None" ? "" : item.duration + "/" + item.vestEveryDate + "/" + item.cliff}</span>
                                            <span>{item.amount}</span>
                                            <span>{item.vestingType === "None" ? item.amount : "0"}</span>
                                            <span>0</span>
                                            <span>0</span>
                                            <span>
                                                <MoreVertIcon onClick={(e) => handleClick(e, item)} />
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleDelete(selectedGrant?.id)}>Delete</MenuItem>
                <MenuItem onClick={() => exercise(selectedGrant?.id)}>Create Exercised</MenuItem>
            </Menu>
        </div>
    );
};

export default page;