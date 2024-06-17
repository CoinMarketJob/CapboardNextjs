"use client";

import React, { useState, useEffect } from "react";
import "./collabrators.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp, faPenToSquare, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import List from "../components/Collabrators/List";
import { Modal, Box } from '@mui/material';
import GeneralFormDropdown from "../components/GeneralFormDropdown/GeneralFormDropdown";

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
    const [openModal, setOpenModal] = useState<boolean>(false); // State for modal open/close
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);

    const toggleActivities = (date: string) => {
        setActiveDate(activeDate === date ? null : date);
    };

    const [logs, setLogs] = useState([]);
    const [filteredLogs, setFilteredLogs] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {

                const response2 = await fetch('/api/auth/get');
                const user = await response2.json();
                console.log(user);
                setUsers(user);

                const response = await fetch('/api/LogRecord/get');
                const data = await response.json();
                setLogs(data);
            } catch (error) {
                console.error('Veri getirme hatası:', error);
            }
        }

        fetchData();
    }, [])

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

    }, [logs])

    const collaborators = [
        {
            name: 1,
            accessLevel: "Full",
            accepted: "2024-06-10",
            Email: "merenkirkas@protonmail.com",
        }
    ]

    const AddUser = async () => {
        try {
            const submitData = {
                name,
                email,
                password
                };

            const response = await fetch('/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(submitData)
            });
            const data = await response.json();

            if(response.ok){
                window.location.href="/collabrators";
            }
            console.log(data);
        } catch (error) {
            console.error('Veri getirme hatası:', error);
        }
    }

    // const DeleteUser = async (id: number) => {
    //     try {
    //         const response = await fetch(`/api/auth/${id}`, {
    //             method: 'DELETE',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         });
    //         const data = await response.json();

    //         if(response.ok){
    //             window.location.href="/collabrators";
    //         }
    // }catch (error) {
    //     console.error('Veri getirme hatası:', error);
    // }

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
                    <button className="button" onClick={() => setOpenModal(true)}>
                        <FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff", marginRight: "10px", width: "17px", height: "17px" }} />
                        ADD COLLABORATOR
                    </button>
                </div>
                <div className="collaborators-list-bar">
                    <div style={{ width: "250px", fontSize: "11px" }} >NAME</div>
                    <div style={{ width: "700px", fontSize: "11px" }} >EMAIL</div>
                    <div style={{ width: "200px", fontSize: "11px" }} >ACCEPTED</div>
                </div>
                <div className="underline"></div>
                    {users.map((item, index) => (
                        <div style={{display: "flex", flexDirection: "column"}} key={index} >
                    <div className="collaborators-list" key={index}>
                        <div style={{ width: "250px", fontSize: "15px" }}>{item.name}</div>
                        <div style={{ width: "700px", fontSize: "17px" }}>{item.email}</div>
                        <div style={{ width: "200px", fontSize: "17px" }}>{new Date(item.createdAt).toLocaleDateString("en-En")}</div>
                        { /*<FontAwesomeIcon style={{ width: "15px", height: "15px" }} icon={faTrashCan} onClick={() => DeleteUser(item.id)} /> */}
                    </div>
                    <div className="underline"></div>
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
                        className={`delete-toggle-wrapper ${toggleDelete ? "justify-start" : "justify-end"} p-[1px]`}
                    >
                        <motion.div
                            className={`delete-toggle ${toggleDelete ? "bg-white" : "bg-white"}`}
                            layout
                            transition={{ type: "spring", stiffness: 0, damping: 30}}
                        />
                    </div>
                    <div style={{ marginLeft: "1rem", marginTop: "5vh" }}>
                        <h6 style={{ fontSize: "15px", margin: "0" }}>Simulation notifications</h6>
                        <span style={{ fontSize: "13px" }}>Get notified whenever someone creates a simulation.</span>
                    </div>
                </div>
            </div>
            <h2 style={{ marginLeft: "2vw", fontSize: "21px", marginTop: "5vh" }}>Latest collaborators activity</h2>

            <List data={filteredLogs} />

            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                aria-labelledby="add-collaborator-modal"
                aria-describedby="add-collaborator-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: "27vw",
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <h2 style={{fontSize: "20px"}} id="add-collaborator-modal">Add Collaborator:</h2>
                    <div className="underline" ></div>
                    {
                        <div className='card-modals' >
                            <ul style={{display: "flex", flexDirection: "column", width: "100%", padding: "0%"}} >
                                <label style={{marginTop: "0px", marginBottom: "10px"}} >Name</label>
                                <input
                                    style={{ marginRight: "1rem"}}
                                    name="name"
                                    placeholder="Danny"
                                    type="text"
                                    className="form-control border-end"
                                    value={name} onChange={(e) => setName(e.target.value)}
                                />
                                    <label style={{marginTop: "15px", marginBottom: "10px"}} >Email</label>
                                    <input
                                    style={{ marginRight: "1rem"}}
                                    name="name"
                                    placeholder="iglschzgrutlunmjlh@cazlg.com	"
                                    type="Email"
                                    className="form-control border-end"
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                />
                                    <label style={{marginTop: "15px", marginBottom: "10px"}} >Password</label>
                                    <div>
                                    <input
                                                type="password"
                                                placeholder="Password"
                                                className="form-control border-end"
                                                value={password} onChange={(e) => setPassword(e.target.value)}
                                            />
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
                    <div style={{margin: "0px"}} >
                        <div style={{transform: "translateX(-38.5%)"}} >
                        </div>
                        <div style={{marginTop: "2rem"}} className='underline' ></div>
                        <button onClick={() => setOpenModal(false)} style={{marginLeft: "13vw", width: "90px", height: "30px", backgroundColor: "white", border: "none", marginTop: "2vh", marginBottom: "2vh"}}>Close</button>
                        <button onClick={() => AddUser()} style={{marginLeft: "1vw", width: "90px", height: "50px", backgroundColor: "black", border: "none", color: "white"}}>Save</button>
                    </div>
                    </div>
                    }
                </Box>
            </Modal>
        </div>
    );
};

export default Collaborators;
