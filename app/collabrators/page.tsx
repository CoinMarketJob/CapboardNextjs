"use client";

import React, { useState } from "react";
import "./collabrators.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

const Collaborators = () => {
    const [toggleDelete, setToggleDelete] = useState<boolean>(false);
    const [isLogDropdownOpen, setIsLogDropdownOpen] = useState(false);

    const changeLogDropdown = () => {
        setIsLogDropdownOpen(!isLogDropdownOpen);
    };

    const stakeholdersNotJoined = [
        {
            name: 1,
            accessLevel: "Bir",
            accepted: "BİR",
            Email: "sqsrpfxnlqaikbxeld@cazlq.com",
        },
        {
            name: 2,
            accessLevel: "İki",
            accepted: "İKİ",
            Email: "sqsrpfxnlqaikbxeld@cazlq.com",
        },
        {
            name: 3,
            accessLevel: "Üç",
            accepted: "ÜÇ",
            Email: "sqsrpfxnlqaikbxeld@cazlq.com",
        },
        {
            name: 4,
            accessLevel: "Dört",
            accepted: "DÖRT",
            Email: "sqsrpfxnlqaikbxeld@cazlq.com",
        },
    ];

    const collaboratorsLogs = [
        { name: "VIEW_STAKEHOLDERS_LIST", type: "BİR", collaborator: "1" },
        { name: "VIEW_CHANGE_REQUESTS", type: "İKİ", collaborator: "2" },
        { name: "VIEW_DOCUMENTS_LIST", type: "ÜÇ", collaborator: "3" },
        { name: "VIEW_SHARE_CLASSES_LIST", type: "DÖRT", collaborator: "4" },
    ];

    return (
        <div>
            <div className="card-1">
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <h2 className="title">Collaborators</h2>
                    <button className="button">
                        <FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff" }} />
                        ADD COLLABORATOR
                    </button>
                </div>
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
                                toggleDelete ? "bg-green" : "bg-red"
                            }`}
                            layout
                            transition={{ type: "spring", stiffness: 250, damping: 30 }}
                        />
                    </div>
                    <div style={{ marginLeft: "1rem" }}>
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
                    <FontAwesomeIcon icon={faCaretDown} />
                    <span style={{ marginLeft: "0.5vw", fontSize: "17px" }}>
                        2024-06-07
                    </span>
                    <div
                        style={{
                            backgroundColor: "#2da38b",
                            color: "white",
                            borderRadius: "0.2rem",
                            width: "250px",
                            textAlign: "center",
                            fontWeight: "500",
                            marginLeft: "1rem",
                        }}
                    >
                        iglschzgrutlunmjlh@cazlg.com
                    </div>
                </div>
                    {isLogDropdownOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className="list-log-dropdown">
                                {collaboratorsLogs.map((item) => (
                                    <ul className="stakeholders-not-joined-list" key={item.name}>
                                        <div className="stakeholders-not-joined-list-item-row">
                                            <div style={{ width: "280px" }}>
                                                <div className="logs-list-item">{item.name}</div>
                                            </div>
                                            <div style={{ width: "280px" }}>
                                                <div className="logs-list-item">{item.type}</div>
                                            </div>
                                            <div style={{ width: "265px" }}>
                                                <div className="logs-list-item">{item.collaborator}</div>
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
