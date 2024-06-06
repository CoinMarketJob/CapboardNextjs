'use client';
import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import PoolFormModal from './PoolFormModal'; // Bileşen ismiyle tutarlı olmalı

interface Pool {
    poolName: string;
    amount: string;
    typeamount: string;
    date: string;
    shareClass: number;
    internalNote: string;
    documents: File | null;
}
const PoolPage = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [pools, setPools] = useState<Pool[]>([]); // useState'in tipi belirlendi

    const [data, setData] = useState([]);
    const [amauntData, setAmauntData] = useState([]);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
        console.log(dropdownVisible);
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
        }
         try {
          const response = await fetch('/api/pool',{
            method: 'POST',
            body: JSON.stringify(submitData),
            headers: {
              'content-type': 'application/json'
            }
          })
          console.log(response);
      
          if(response.ok){
            window.location.href="/pool";
          }else{
            console.log("Failed");
          }
         }
         catch (error){
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

            const response2 = await fetch('/api/pool/amount/get');
            const data2 = await response2.json();
            setAmauntData(data2);

            console.log(data);
          } catch (error) {
            console.error('Veri getirme hatası:', error);
          }
        }
      
        fetchData();
      }, []);

    return (
        <div className={styles.container}>
            <h1 id='poolshead'>Pools</h1>

            <button onClick={handleCreatePool} className={styles.addPoolBtn}>ADD POOL</button>

            <div className={styles.poolTable}>
                <div className={styles.tableHeader}>
                    <div>NAME</div>
                    <div>SIZE</div>
                    <div>GRANTABLE</div>
                    <div>GRANTED</div>
                    <div>GRANT VESTED</div>
                </div>

                    {data.map((item,index) => {
                          const totalGrantsAmount = amauntData
                            .filter(amount => amount.poolId === item.id)
                            .reduce((acc, amount) => acc + amount.grantsAmount, 0);

                    return (
                                     <div key={index} className={styles.tableRow}>
                                        <div>{item.name}</div>
                                        <div>{totalGrantsAmount}</div>
                                        <div>{totalGrantsAmount}</div>
                                        <div>0</div>
                                        <div>0</div>
                                        <button onClick={toggleDropdown} className={styles.dropdownBtn}>⋮</button>
                                        {dropdownVisible && (
                                            <div className={styles.dropdownContent}>
                                                <a href="#">Edit</a>
                                                <a href="#">Delete</a>
                                                <a href="#">Notify new grant</a>
                                                <a href="#">Generate document</a>
                                            </div>
                                        )}
                                 </div>);
                    })}
            </div>
            
            {isModalOpen && <PoolFormModal isOpen={isModalOpen} onClose={handleCloseModal} onSave={handleAddPool} />}


        </div>
    );
};

export default PoolPage;
