'use client'
import React from 'react';
import styles from './PlanFormm.module.css';

interface pooll {
    handleClosePopup: () => void;
}

const PlanForm: React.FC<pooll> = ({ handleClosePopup }) => {
    return (
        <div className={styles.equityPopup}>
            <div className={styles.equityPopupHeader}>
                <h2>Add Plan</h2>
            </div>
            <form className={styles.equityPlanForm}>
                <div className={styles.equityFormGroup}>
                    <label htmlFor="poolName">Plan Name</label>
                    <input type="text" id="poolName" placeholder="IT Phantoms, Options pool, ..." />
                </div>
                <div className={styles.equityFormGroup}>
                    <label htmlFor="fromPool">From Pool</label>
                    <input type="search" id="fromPool" />
                </div>
                <div className={styles.equityFormGroup}>
                    <label htmlFor="equityDate">Date</label>
                    <input type="date" id="equityDate" />
                </div>
                <div className={styles.equityFormGroup}>
                    <label htmlFor="grantType">Grant Type</label>
                    <select id="grantType">
                        <option value="Phantom">Phantom</option>
                        <option value="Stock">Stock</option>
                        <option value="StockOptions">Stock Options</option>
                        <option value="Warrants">Warrants</option>
                        <option value="SARs">SARs</option>
                    </select>
                </div>
                <div className={styles.grantPresets}>GRANT PRESETS</div>
                <div className={styles.equityFormGroup}>
                    <label htmlFor="purchasePrice">Purchase Price</label>
                    <input type="text" id="purchasePrice" />
                    <select id="currency">
                        <option value="USD">Dollar/USD</option>
                        <option value="EUR">Euro</option>
                        <option value="TRY">Turkish Lira/TL</option>
                    </select>
                </div>
                <div className={styles.vesting}>
                    <h3>Vesting</h3>
                    <div className={styles.equityFormGroup}>
                        <label htmlFor="vestingType">Type</label>
                        <select id="vestingType">
                            <option value="Time">Time (simple)</option>
                            <option value="None">None</option>
                        </select>
                    </div>
                    <div className={styles.equityFormGroup}>
                        <label htmlFor="startDate">Start Date (optional)</label>
                        <input type="date" id="startDate" />
                    </div>
                    <div className={styles.equityFormGroup}>
                        <label htmlFor="duration">Duration</label>
                        <input type="number" id="duration" placeholder="Please Enter Month" />
                    </div>
                    <div className={styles.equityFormGroup}>
                        <label htmlFor="vestEvery">Vest Every</label>
                        <input type="number" id="vestEvery" placeholder="Please Enter Month" />
                    </div>
                    <div className={styles.equityFormGroup}>
                        <label htmlFor="cliff">Cliff</label>
                        <input type="number" id="cliff" placeholder="Please Enter Month" />
                    </div>
                </div>
                <div className={styles.definitions}>
                    <h3>Definitions</h3>
                    <div className={styles.equityFormGroup}>
                        <label htmlFor="goodLeaver">Good Leaver</label>
                        <textarea id="goodLeaver" cols={50} rows={4}></textarea>
                    </div>
                    <div className={styles.equityFormGroup}>
                        <label htmlFor="badLeaver">Bad Leaver</label>
                        <textarea id="badLeaver" cols={50} rows={4}></textarea>
                    </div>
                    <div className={styles.equityFormGroup}>
                        <label htmlFor="liquidityEvent">Liquidity Event</label>
                        <textarea id="liquidityEvent" cols={50} rows={4}></textarea>
                    </div>
                </div>
                <div className={styles.documents}>
                    <h3>Documents</h3>
                    <label htmlFor="fileUpload" className={styles.fileUploadButton}>Upload File</label>
                    <input type="file" id="fileUpload" style={{ display: 'none' }} />
                </div>
                <div className={styles.internalNote}>
                    <h3>Internal Note</h3>
                    <textarea className={styles.internalNoteTextarea} cols={50} rows={4} placeholder="Notes"></textarea>
                </div>
                <div className={styles.buttons}>
                    <button type="button" className={styles.closeButton} onClick={handleClosePopup}>CLOSE</button>
                    <button type="submit" className={styles.saveButton}>SAVE</button>
                </div>
            </form>
        </div>
    );
};

export default PlanForm;
