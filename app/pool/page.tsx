'use client';
import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import PoolFormModal from './PoolFormModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faWater } from '@fortawesome/free-solid-svg-icons';
import { Doughnut } from 'react-chartjs-2';
import PoolsListCom from '../components/poolsList/poolsList';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Pool {
    id?: number;
    poolName: string;
    amount: string;
    typeamount: string;
    date: string;
    shareClass: number;
    internalNote: string;
    documents: File | null;
}

const PoolPage = () => {

    const [dropdownVisible, setDropdownVisible] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pools, setPools] = useState<Pool[]>([]);
    const [data, setData] = useState<any[]>([]);

    const toggleDropdown = (id: number) => {
        setDropdownVisible(dropdownVisible === id ? null : id);
    };

    const handleCreatePool = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleAddPool = async (pool: Pool): Promise<void> => {
        setPools((prevPools) => [...prevPools, pool]);

        const submitData = {
            name: pool.poolName,
            grantsAmount: pool.amount,
            amountUnit: pool.typeamount,
            date: new Date(pool.date),
            shareClassId: pool.shareClass,
            note: pool.internalNote,
        };

        try {
            const response = await fetch('/api/pool', {
                method: 'POST',
                body: JSON.stringify(submitData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                window.location.href = "/pool";
            } else {
                console.log("Failed");
            }
        } catch (error) {
            console.log(error);
        }

        handleCloseModal();
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/pool/get');
                const data = await response.json();
                setData(data);
                console.log(data);

            } catch (error) {
                console.error('Veri getirme hatası:', error);
            }
        }

        fetchData();
    }, []);

    const Edit = (id: number) => {
        // Edit functionality
    };

    const PoolIncrease = (id: number) => {
        handleCreatePool();
        toggleDropdown(id);
    };

    const Delete = (id: number) => {
        async function deletePool(id: number) {
            try {
                const response = await fetch(`/api/pool/${id}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    window.location.href = "/pool";
                } else {
                    console.error('Silme hatası:', response.statusText);
                }
            } catch (error) {
                console.error('Hata:', error);
            }
        }

        deletePool(id);
    };

    
    return (
        <div className={styles.container}>
            <h1 style={{ fontSize: "19px", marginLeft: "1rem", marginTop: "1vh" }}>Pools</h1>
            <div style={{ marginLeft: "1rem", marginTop: "2rem", border: "1px solid rgba(0, 0, 0, 0.208)", height: "40px", width: "200px", paddingTop: "8px", paddingLeft: "8px", fontSize: "13px" }} className='calendar'>
                06/09/2024<FontAwesomeIcon style={{ marginLeft: "6rem" }} icon={faCalendar} />
            </div>

            <button onClick={handleCreatePool} className={styles.addPoolBtn}><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faWater} />ADD POOL</button>

            <div className={styles.poolTable}>
                <div className={styles.tableHeader}>
                    <ul style={{ display: "flex", flexDirection: "row" }}>
                        <div style={{ width: "100px", fontSize: "10px" }}>NAME</div>
                        <div style={{ width: "100px", fontSize: "10px", marginLeft: "13.5vw" }}>SIZE</div>
                        <div style={{ width: "100px", fontSize: "10px", marginLeft: "3vw" }}>Grantable</div>
                        <div style={{ width: "100px", fontSize: "10px", marginLeft: "6vw" }}>Granted</div>
                        <div style={{ width: "100px", fontSize: "10px", marginLeft: "4vw" }}>Grant Vested</div>
                        <div style={{ width: "50px", fontSize: "10px", marginLeft: "4vw" }}>Exercised</div>
                    </ul>
                </div>
                <div>
                 {data.map((item, index) => {

                    const size = item.transactions.reduce((acc, transaction) => {
                        if (transaction.type === 'PoolCreation' || transaction.type === 'PoolIncrease') {
                            return acc + transaction.amount;
                          } else if (transaction.type === 'PoolDecrease') {
                            return acc - transaction.amount;
                          } else {
                            return acc;
                          }
                    }, 0);

                    const granted = item.transactions.reduce((acc, transaction) => {
                        if (transaction.type === 'Grant') {
                            return acc + transaction.amount;
                          } else {
                            return acc;
                          }
                    }, 0);

                    const grantable = size - granted;

                    return(
                        <ul key={index} className={styles.poolsList}>
                            <div className={styles.underline} ></div>
                            <ul className="pools-row">
                                <PoolsListCom name={item.poolName} grant={size} grantable={grantable} granted={granted} grantVested={0} exercised={0} transactionData={item.transactions} />
                            </ul>
                        </ul>
                    );
                })} 
                </div>                
            </div>

            {isModalOpen && <PoolFormModal isOpen={isModalOpen} onClose={handleCloseModal} onSave={handleAddPool} />}
        </div>
    );
};

export default PoolPage;
