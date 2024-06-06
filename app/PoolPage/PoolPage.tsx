'use client';
import React from 'react';
import styles from './PoolPage.module.css';

const PoolPage = () => {
    return (
        <div className={styles.container}>
            <h1>Pools</h1>
            <div className={styles.actions}>
                <input type="date" className={styles.datePicker} />
                <button className={styles.addPoolBtn}>ADD POOL</button>
            </div>
            <div className={styles.poolTable}>
                <div className={styles.tableHeader}>
                    <span>NAME</span>
                    <span>SIZE</span>
                    <span>GRANTABLE</span>
                    <span>GRANTED</span>
                    <span>GRANT VESTED</span>
                    <span>EXERCISED</span>
                </div>
                <div className={styles.tableRow}>
                    <span>dksdfds</span>
                    <span>2,324</span>
                    <span>2,312</span>
                    <span>12</span>
                    <span>0</span>
                    <span>0</span>

                </div>
            </div>
            <div className={styles.actions}>
                <button>+</button>
                <button>−</button>
                <button>✏️</button>
                <button>🗑️</button>
            </div>
        </div>
    );
};

export default PoolPage;
