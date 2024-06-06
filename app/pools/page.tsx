'use client'
import Head from 'next/head';
import { useState } from 'react';
import styles from './Equity.module.css';
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

function Pools() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pools, setPools] = useState<Pool[]>([]); // useState'in tipi belirlendi

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
          }else{
            console.log("Failed");
          }
         }
         catch (error){
            console.log(error);
         }

    


        handleCloseModal();
    };

    return (
        <div className={styles.containerequity}>
            <Head>
                <title>Equity Plan</title>
                <meta name="description" content="Create Equity Pool and Plan" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.mainEquity}>
                <div className={styles.infoIcon}>i</div>
                <h1 className={styles.titleEquity}>
                    To grant equity, create first:
                </h1>
                <ol className={styles.listEquity}>
                    <li>A Pool of shares</li>
                    <li>An Equity Plan<span className={styles.tooltip}>?</span></li>
                </ol>
                <button className={styles.createButton} onClick={handleCreatePool}>CREATE POOL</button>

                {isModalOpen && <PoolFormModal isOpen={isModalOpen} onClose={handleCloseModal} onSave={handleAddPool} />}
            </main>
        </div>
    );
}

export default Pools;
