"use client";

import React, { useState, useEffect } from 'react'
import "./accountSettings.css";
import { motion } from 'framer-motion';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";


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

const account_settings = () => {

    const [toggle, setToggle] = useState<boolean>(false);
    const [toggleDelete, setToggleDelete] = useState<boolean>(false);
    const [user, setUser] = useState();
    const [modal, setModal] = useState(false);

    const [newPassword, setNewPassword] = useState('');

    
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/auth/get/Profile');
                const data = await response.json();
                console.log(data);
                setUser(data);
            } catch (error) {
                console.error('Veri getirme hatası:', error);
            }
        }

        fetchData();
    }, []);

    const saveBasicInfo = async () => {
        try {
            const submitData = {
                name: user?.name
              };

            const response = await fetch('/api/auth/update/Profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(submitData)
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Veri getirme hatası:', error);
        }
    }

    const changePassword = async () => {
        try {
            const submitData = {
                newPassword
              };

            const response = await fetch('/api/auth/update/Password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(submitData)
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Veri getirme hatası:', error);
        }
    }

    return (
    <div>

        
        <Modal id="ModalSign" open={modal} onClose={() => setModal(false)}>
            <Box sx={{ ...style }}>
                <div>

                    <label style={{marginTop: "15px", marginBottom: "5px", alignSelf: "flex-start"}} >New Password</label>
                    <div style={{width: "20vw"}}>
                        <input type="text" placeholder="New Password" style={{marginLeft: "0%"}} className="input" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                    </div>

                    <button onClick={changePassword} style={{marginLeft: "1vw",marginBottom: "1vw", width: "90px", height: "50px", backgroundColor: "black", border: "none", color: "white"}}>Change</button>
                </div>
            </Box>
        </Modal>
        <div className='card-1' >
            <div style={{display: "flex", flexDirection: "row"}} >
            <div>
            <h2 className='title' >Basic Info</h2>
            <ul style={{display: "flex", flexDirection: "column", width: "50%", padding: "0%", marginLeft: "1rem"}} >
            <label style={{marginTop: "15px", marginBottom: "5px", alignSelf: "flex-start"}} >Name</label>
            <div style={{width: "20vw"}}>
            <input type="text" placeholder="Danny" style={{marginLeft: "0%"}} className="input" value={user?.name} 
                onChange={(e) => setUser({ ...user, name: e.target.value })} />
        </div>
        <div>
                <div
                className="ac-select-container w-100"
                style={{ display: "none" }}
                >
                <div className="ac-select-dropdown w-100">
                    <div className="ac-select-search-box">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="form"
                    />
                    </div>
                </div>
                </div>
            </div>
    </ul>
    </div>
    <div style={{width: "20vw"}}>
            <input type="Email" style={{marginTop: "5.9rem", marginLeft: "1rem"}} className="input" value={user?.email} disabled  />
        </div>
        </div>
        <button onClick={saveBasicInfo} style={{marginLeft: "1vw",marginBottom: "1vw", width: "90px", height: "50px", backgroundColor: "black", border: "none", color: "white"}}>Save</button>
        </div>
        
        <div className='card-3' >
        <h2 className='title' >Change Password</h2>
        <button onClick={() => setModal(!modal)} style={{marginLeft: "1vw",marginBottom: "1vw", width: "170px", height: "50px", backgroundColor: "black", border: "none", color: "white", marginTop: "2rem"}}>Change Password</button>
        </div>        
    </div>
    )
}

export default account_settings;
