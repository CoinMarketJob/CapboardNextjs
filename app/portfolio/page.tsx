"use client";

import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import "./portfolio.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {

    return (
        <div>
            <div className='card'>
                <FontAwesomeIcon
                    style={{
                        width: "4rem",
                        height: "4rem",
                        marginLeft: "40vw",
                        marginBottom: "1rem",
                        color: "#494c50"
                    }}
                    icon={faCircleInfo}
                />
                <span>Manage all your portfolio on autopilot with Capboard</span>
                <span style={{ marginTop: "1rem" }}>
                    Add your investments manually or in bulk and invite the company representative to keep the company up to date.
                </span>
                <button className='button'>I AM A FOUNDER/IVE CREATED A COMPANY</button>
            </div>
            <ul style={{ flexDirection: "row", display: "flex" }}>
                <div className='dashboard'>
                    <h2 className='title'>Managed</h2>
                    <span style={{ marginLeft: "1rem" }}>Companies you are a collaborator in</span>
                    <ul className='company-list'>
                        <div className='logo'>Logo</div>
                        <ul style={{ display: "flex", flexDirection: "column" }}>
                            <span style={{ fontWeight: "500" }}>Coin Market Job</span>
                            <span style={{ marginTop: "10px" }}>Türkiye</span>
                        </ul>
                        <FontAwesomeIcon
                            style={{
                                marginLeft: "27.5vw",
                                marginTop: "20px"
                            }}
                            icon={faChevronRight}
                        />
                    </ul>
                    <div className='underline'></div>
                </div>
                <div className='card-2'>
                    <h2 className='title'>Shared With Me</h2>
                    <span style={{ marginLeft: "1vw" }}>
                        Companies that shared a cap table or documents with you
                    </span>
                </div>
            </ul>
            <span style={{ marginLeft: "35vw", fontSize: "13px" }}>
                © Copyright 2024 Capboard Tech S.L. All rights reserved.
            </span>
        </div>
    );
};

export default Portfolio;
