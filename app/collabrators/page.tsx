"use client";

import React, { useState } from "react";
import "./collabrators.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp, faPenToSquare, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

const Collaborators = () => {
    const [toggleDelete, setToggleDelete] = useState<boolean>(false);
    const [isLogDropdownOpen, setIsLogDropdownOpen] = useState(false);

    const changeLogDropdown = () => {
        setIsLogDropdownOpen(!isLogDropdownOpen);
    };

    const collabrators = [
        {
            name: 1,
            accessLevel: "Full",
            accepted: "2024-06-10",
            Email: "merenkirkas@protonmail.com",
        }
    ]

    const collaboratorsLogs = [
        { name: "VIEW_STAKEHOLDERS_LIST", type: "EDIT", collaborator: "1" },
        { name: "VIEW_CHANGE_REQUESTS", type: "CREATE", collaborator: "2" },
        { name: "VIEW_DOCUMENTS_LIST", type: "VIEW", collaborator: "3" },
        { name: "VIEW_SHARE_CLASSES_LIST", type: "VIEW", collaborator: "4" },
    ];

    const cardHeight = collabrators.length * 70 + 60; // Calculate height based on item count (60px per item + 60px base height)

    return (
        <div>
            <div className="card-1" style={{ height: `${cardHeight}px` }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <h2 className="title">Collaborators</h2>
                    <button className="button">
                        <FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff", marginRight: "10px" }} />
                        ADD COLLABORATOR
                    </button>
                </div>
                <div className="collaborators-list-bar">
                                <div style={{width: "250px", fontSize: "11px"}} >NAME</div>
                                <div style={{width: "700px", fontSize: "11px"}} >EMAIL</div>
                                <div style={{width: "250px", fontSize: "11px"}} >ACCESS LEVEL</div>
                                <div style={{width: "200px", fontSize: "11px"}} >ACCEPTED</div>
                            </div>
                            <div className="underline" ></div>
                    {collabrators.map((collaborator) => (
                        <div className="collaborators-list" key={collaborator.name}>
                            <div style={{width: "250px", fontSize: "15px"}} >{collaborator.name}</div>
                            <div style={{width: "700px", fontSize: "17px"}} >{collaborator.Email}</div>
                            <div style={{width: "250px", fontSize: "17px"}} >{collaborator.accessLevel}</div>
                            <div style={{width: "200px", fontSize: "17px"}} >{collaborator.accepted}</div>
                            <FontAwesomeIcon style={{width: "15px", height: "15px", marginRight: "1rem"}} icon={faPenToSquare} />
                            <FontAwesomeIcon style={{width: "15px", height: "15px"}} icon={faTrashCan} />
                            <div className="underline" ></div>
                        </div>
                    ))}
            </div>
            <div className="card-2">
                <h2 className="title">Notifications</h2>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <div
                        onClick={() => setToggleDelete(!toggleDelete)}
                        className={`delete-toggle-wrapper ${
                            toggleDelete ? "justify-start" : "justify-end"
                        } p-[1px]`}
                    >
                        <motion.div
                            className={`delete-toggle ${
                                toggleDelete ? "bg-white" : "bg-white"
                            }`}
                            layout
                            transition={{ type: "spring", stiffness: 250, damping: 30 }}
                        />
                    </div>
                    <div style={{ marginLeft: "1rem", marginTop: "5vh" }}>
                        <h6 style={{ fontSize: "15px", margin: "0" }}>
                            Simulation notifications
                        </h6>
                        <span style={{ fontSize: "13px" }}>
                            Get notified whenever someone creates a simulation.
                        </span>
                    </div>
                </div>
            </div>
            <h2 style={{ marginLeft: "2vw", fontSize: "21px", marginTop: "5vh" }}>
                Latest collaborators activity
            </h2>
            <div className={isLogDropdownOpen ? "card-3-2" : "card-3"}>
                <div
                    onClick={changeLogDropdown}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        cursor: "pointer",
                    }}
                >
                    {isLogDropdownOpen ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}
                    <span style={{ marginLeft: "0.5vw", fontSize: "17px", fontWeight: "500" }}>
                        2024-06-07
                    </span>
                    <div className="green-text">
                        merenkirkas@protonmail.com
                    </div>
                </div>
                {isLogDropdownOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="log-list-dropdown">
                            {collaboratorsLogs.map((item) => (
                                <ul key={item.name}>
                                    <div className="log-list">
                                        <div style={{ width: "250px" }}>
                                            <div className="log-list-item-type">{item.type}</div>
                                        </div>
                                        <div style={{ width: "300px", marginBottom: "10px" }}>
                                            <div className="log-list-item">{item.name}</div>
                                        </div>
                                        <div style={{ width: "265px" }}>
                                            <div className="log-list-item">{item.collaborator}</div>
                                        </div>
                                    </div>
                                    <div className="underline"></div>
                                </ul>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Collaborators;
