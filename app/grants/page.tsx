'use client'
import React, { useState } from 'react';
import styles from './grants.module.css';

const GrantsPage = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleCreateGrantClick = () => {
        console.log('Create Equity Grant Clicked');
        // İşlem yapılacak kod burada olacak, örneğin bir modal açma işlemi.
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className={styles.container}>
            <h1 id='EquityhEADER'>Equity Grants</h1>
            <div className={styles.actions}>
                <input type="search" placeholder="search" className={styles.search} />
                <button className={styles.importBtn}>IMPORT FROM CSV</button>
                <button className={styles.createGrantBtn} onClick={handleCreateGrantClick}>+ CREATE EQUITY GRANT</button>
            </div>
            <div className={styles.grantTable}>
                <div className={styles.tableHeader}>
                    <div>GRANT - PLAN</div>
                    <div>TYPE</div>
                    <div>STARTS</div>
                    <div>DURATION / INTERVAL / CLIFF</div>
                    <div>GRANTED</div>
                    <div>VESTED</div>
                    <div>AVAILABLE</div>
                </div>
                <div className={styles.tableRow}>
                    <div>#9484 - fdfgdfgd</div>
                    <div>Phantoms</div>
                    <div></div>
                    <div></div>
                    <div>12</div>
                    <div>0</div>
                    <div>0</div>
                    <button className={styles.dropdownBtn} onClick={toggleDropdown}>⋮</button>
                    <div className={`${styles.dropdownContent} ${dropdownOpen ? styles.show : ''}`}>
                        <a href="#">Edit</a>
                        <a href="#">Delete</a>
                        <a href="#">Notify new grant</a>
                        <a href="#" className={styles.disabled}>Generate document</a>
                        <a href="#">Terminate grant</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GrantsPage;
