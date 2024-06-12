"use client";

import React, { useState, useEffect } from "react";
import "./collabrators.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp, faPenToSquare, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import List from "../components/Collabrators/List";

interface ActivityItem {
    action: string;
    page: string;
    date: string;
    user: {
      email: string;
    };
  }
  
  interface ActivityGroup {
    date: string;
    users: {
      [userId: string]: {
        email: string;
        activities: ActivityItem[];
      };
    };
  }


const Collaborators = () => {
    const [toggleDelete, setToggleDelete] = useState<boolean>(false);

    const [activeDate, setActiveDate] = useState<string | null>(null);

    const toggleActivities = (date: string) => {
      setActiveDate(activeDate === date ? null : date);
    };

    const [logs, setLogs] = useState([]);
    const [filteredLogs, setFilteredLogs] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/LogRecord/get');
                const data = await response.json();
                console.log(data);
                setLogs(data);

            } catch (error) {
                console.error('Veri getirme hatası:', error);
            }
        }

        fetchData();
    },[])

    useEffect(() => {
        const groupByDateAndUser = (data: ActivityItem[]) => {
            const grouped: { [date: string]: { [userId: string]: ActivityItem[] } } = {};
            data.forEach((item) => {
              const date = item.date.split("T")[0]; // Sadece tarih kısmını alıyoruz
              const userId = item.user.id; // Kullanıcı ID'sini alıyoruz
              grouped[date] = grouped[date] || {}; // Tarih yoksa yeni bir obje oluştur
              grouped[date][userId] = grouped[date][userId] || []; // Kullanıcı yoksa yeni bir dizi oluştur
              grouped[date][userId].push(item);
            });
            return Object.entries(grouped).map(([date, users]) => ({ date, users }));
          };

          setFilteredLogs(groupByDateAndUser(logs));
          console.log(filteredLogs);

    },[logs])


    const collabrators = [
        {
            name: 1,
            accessLevel: "Full",
            accepted: "2024-06-10",
            Email: "merenkirkas@protonmail.com",
        }
    ]


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

             <List data={filteredLogs} /> 
        </div>
    );
};

export default Collaborators;
