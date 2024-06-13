"use client";

import React, { useState } from 'react'
import "./accountSettings.css";
import { motion } from 'framer-motion';

const account_settings = () => {

    const [toggle, setToggle] = useState<boolean>(false);
    const [toggleDelete, setToggleDelete] = useState<boolean>(false);

    return (
    <div>
        <div className='card-1' >
            <div style={{display: "flex", flexDirection: "row"}} >
            <div>
            <h2 className='title' >Basic Info</h2>
            <ul style={{display: "flex", flexDirection: "column", width: "50%", padding: "0%", marginLeft: "1rem"}} >
            <label style={{marginTop: "15px", marginBottom: "5px", alignSelf: "flex-start"}} >Date</label>
            <div style={{width: "20vw"}}>
            <input type="text" placeholder="Danny" style={{marginLeft: "0%"}} className="input" />
        </div>
        <div>
        <label style={{marginTop: "0.2rem", marginBottom: "10px", alignSelf: "flex-start"}} >Language</label>
        <select id="currency" name="currency" className="form-select" style={{width: "40vw"}} >
            <option value="USD">TUR</option>
            <option value="EUR">EN</option>
            <option value="EUR">ES</option>
        </select>
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
            <input type="Email" placeholder="iglschzgrutlunmjlh@cazlg.com" style={{marginTop: "5.9rem", marginLeft: "1rem"}} className="input" />
        </div>
        </div>
        <button style={{marginLeft: "1vw",marginBottom: "1vw", width: "90px", height: "50px", backgroundColor: "black", border: "none", color: "white"}}>Save</button>
        </div>
        <div className='card-2' >
            <h2 className='title' >2FA</h2>
            <ul className='delete-company-row' >
        <div
            onClick={() => setToggle(!toggle)}
            className={`delete-toggle-wrapper ${
                toggle ? "justify-start" : "justify-end"
            } p-[1px]`}
            >
        <motion.div
        className={`delete-toggle ${toggle ? 'bg-white' : 'bg-white'}`}
        layout
        transition={{type: 'spring' , stiffness:250 , damping: 30}}
        />
    </div>
    <ul style={{flexDirection: "column", marginTop: "1.5rem"}} >
    <h6 style={{fontSize: "15px", margin: "0" }} >Enable 2FA</h6>
    <span style={{fontSize: "13px", margin: "0" }} >Two-factor authentication (2FA) is an identity and access management security method that requires two forms of identification to access resources and data.</span>
    </ul>
    </ul>
        <button style={{marginLeft: "1vw",marginBottom: "1vw", width: "90px", height: "50px", backgroundColor: "black", border: "none", color: "white"}}>Save</button>
        </div>
        <div className='card-3' >
        <h2 className='title' >Change Password</h2>
        <button style={{marginLeft: "1vw",marginBottom: "1vw", width: "170px", height: "50px", backgroundColor: "black", border: "none", color: "white", marginTop: "2rem"}}>Change Password</button>
        </div>
        <div className="card-4">
        <h4 className="title">Delete</h4>
        <span style={{fontSize: "14px", marginLeft: "1rem"}} >Once you delete the company, there is no going back. Please be certain.</span>
        <ul className='delete-company-row' >
        <div
            onClick={() => setToggleDelete(!toggleDelete)}
            className={`delete-toggle-wrapper ${
                toggleDelete ? "justify-start" : "justify-end"
            } p-[1px]`}
            >
        <motion.div
        className={`delete-toggle ${toggleDelete ? 'bg-white' : 'bg-white'}`}
        layout
        transition={{type: 'spring' , stiffness:250 , damping: 30}}
        />
    </div>
    <ul style={{flexDirection: "column", marginTop: "1.5rem"}} >
    <h6 style={{fontSize: "15px", margin: "0" }} >Confirm</h6>
    <span style={{fontSize: "13px", margin: "0" }} >I want to delete the company.</span>
    </ul>
    <button className='delete-button' >DELETE</button>
    </ul>
        </div>
    </div>
    )
}

export default account_settings;
