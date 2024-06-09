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

            console.log(data);
          } catch (error) {
            console.error('Veri getirme hatası:', error);
          }
        }
      
        fetchData();
      }, []);

      const Edit = (id : number) => {

      }

      const PoolIncrease = (id : number) => {
        handleCreatePool();
        toggleDropdown();
      }

      const Delete = (id : number) => {

        async function deletePool(id:number) {
          try {
            const response = await fetch(`/api/pool/${id}`, {
              method: 'DELETE',
            });
        
            if (response.ok) {
              window.location.href="/pool";              
            } else {
              console.error('Silme hatası:', response.statusText);
            }
          } catch (error) {
            console.error('Hata:', error);
          }
        }

        deletePool(id);
      }

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
                <div className={styles.tableRow}>
                    <div>Deneme</div>
                    <div>10</div>
                    <div>1</div>
                    <div>9</div>
                    <div>0</div>
                    <button onClick={toggleDropdown} className={styles.dropdownBtn}>⋮</button>
                    {dropdownVisible && (
                        <div className={styles.dropdownContent}>
                            <a>Pool increase</a>
                            <a>Edit</a>
                            <a>Delete</a>
                        </div>
                    )}
                </div>
            </div>
            
            {isModalOpen && <PoolFormModal isOpen={isModalOpen} onClose={handleCloseModal} onSave={handleAddPool} />}


        </div>
    );
};

export default PoolPage;
