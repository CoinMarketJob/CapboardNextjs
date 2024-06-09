'use client'
import React, {useState, useEffect} from 'react';
import styles from './PlanFormm.module.css';

interface pooll {
    handleClosePopup: () => void;
}

const PlanForm: React.FC<pooll> = ({ handleClosePopup }) => {
    const [name, setName] = useState('');
    const [pools, setPools] = useState([]);
    const [pool, setPool] = useState([]);
    const [stakeholders, setStakeholders] = useState([]);
    const [stakeholder, setStakeholder] = useState([]);
    const [date, setDate] = useState('');
    const [type, setType] = useState('');
    const [vestingType, setVestingType] = useState('');
    const [vestingDate, setVestingDate] = useState('');
    const [duration, setDuration] = useState('');
    const [vestEvery, setVeryEvery] = useState('');
    const [cliff, setCliff] = useState('');
    const [goodLeaver, setGoodLeaver] = useState('');
    const [badLeaver, setBadLeaver] = useState('');
    const [liquidityEvent, setLiquidityEvent] = useState('');
    const [note, setNote] = useState('');
    const [pricePerShare, setPricePerShare] = useState();

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch('/api/plans/get');
            const data = await response.json();
            setPools(data);

            const response2 = await fetch('/api/stakeholders/get');
            const data2 = await response2.json();
            setStakeholders(data2);

            console.log(data);
            setPool(data[0].id);
            setStakeholder(data2[0].id);
          } catch (error) {
            console.error('Veri getirme hatası:', error);
          }
        }
      
        fetchData();
      }, []);

      const Save = () => {
        async function Submit() {
            const submitData = {
                planName: name,
                planId: pool,
                stakeholderId: stakeholder,
                date: new Date(date),
                pricePerShare: pricePerShare,
                startDate: Date(vestingDate),
                duration: duration,
                vestEvery: vestEvery,
                cliff: cliff,
                goodLeaver: goodLeaver,
                badLeaver: badLeaver,
                liquidityEvent: liquidityEvent,  
                Note:  note
            }
             try {
              const response = await fetch('/api/grants',{
                method: 'POST',
                body: JSON.stringify(submitData),
                headers: {
                  'content-type': 'application/json'
                }
              })
              console.log(response);
          
              if(response.ok){
                window.location.href="/grants";
              }else{
                console.log("Failed");
              }
             }
             catch (error){
                console.log(error);
             }
        }

        Submit();
      }

    return (
        <div className={styles.container}>
            <div className={styles.equityPopupHeader}>
                <h2>Add Plan</h2>
            </div>
            <form className={styles.equityPlanForm}>

                <div className={styles.equityFormGroup}>
                    <label htmlFor="fromPool">From Stakeholder</label>
                    <select value={stakeholder} onChange={(e) => setStakeholder(e.target.value)}>
                        {stakeholders.map((item,index) => (
                            <option key={index} value={item.id}>{item.name}</option>
                        ))}
                    </select>
                </div>

                <div className={styles.equityFormGroup}>
                    <label htmlFor="fromPool">From Plan</label>
                    <select value={pool} onChange={(e) => setPool(e.target.value)}>
                        {pools.map((item,index) => (
                            <option key={index} value={item.id}>{item.planName}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.equityFormGroup}>
                    <label htmlFor="equityDate">Date</label>
                    <input type="date" id="equityDate" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className={styles.equityFormGroup}>
                    <label htmlFor="grantType">Grant Type</label>
                    <select id="grantType" value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="Phantom">Phantom</option>
                        <option value="Stock">Stock</option>
                        <option value="StockOptions">Stock Options</option>
                        <option value="Warrants">Warrants</option>
                        <option value="SARs">SARs</option>
                    </select>
                </div>
                <div className={styles.grantPresets}>GRANT PRESETS</div>
                <div className={styles.equityFormGroup}>
                    <label htmlFor="purchasePrice">Amount</label>
                    <input type="text" id="purchasePrice" value={pricePerShare} onChange={(e) => setPricePerShare(e.target.value)} />
                    <select id="currency">
                        <option value="TRY">Turkish Lira/TL</option>
                    </select>
                </div>
                <div className={styles.vesting}>
                    <h3>Vesting</h3>
                    <div className={styles.equityFormGroup}>
                        <label htmlFor="vestingType">Type</label>
                        <select id="vestingType" value={vestingType} onChange={(e) => setVestingType(e.target.value)}>
                            <option value="Time">Time (simple)</option>
                            <option value="None">None</option>
                        </select>
                    </div>
                    <div className={styles.equityFormGroup}>
                        <label htmlFor="startDate">Start Date (optional)</label>
                        <input type="date" id="startDate" value={vestingDate} onChange={(e) => setVestingDate(e.target.value)} />
                    </div>
                    <div className={styles.equityFormGroup}>
                        <label htmlFor="duration">Duration</label>
                        <input type="number" id="duration" placeholder="Please Enter Month" value={duration} onChange={(e) => setDuration(e.target.value)} />
                    </div>
                    <div className={styles.equityFormGroup}>
                        <label htmlFor="vestEvery">Vest Every</label>
                        <input type="number" id="vestEvery" placeholder="Please Enter Month" value={vestEvery} onChange={(e) => setVeryEvery(e.target.value)} />
                    </div>
                    <div className={styles.equityFormGroup}>
                        <label htmlFor="cliff">Cliff</label>
                        <input type="number" id="cliff" placeholder="Please Enter Month" value={cliff} onChange={(e) => setCliff(e.target.value)} />
                    </div>
                </div>
                <div className={styles.definitions}>
                    <h3>Definitions</h3>
                    <div className={styles.equityFormGroup}>
                        <label htmlFor="goodLeaver">Good Leaver</label>
                        <textarea id="goodLeaver" cols={50} rows={4} value={goodLeaver} onChange={(e) => setGoodLeaver(e.target.value)}></textarea>
                    </div>
                    <div className={styles.equityFormGroup}>
                        <label htmlFor="badLeaver">Bad Leaver</label>
                        <textarea id="badLeaver" cols={50} rows={4} value={badLeaver} onChange={(e) => setBadLeaver(e.target.value)}></textarea>
                    </div>
                    <div className={styles.equityFormGroup}>
                        <label htmlFor="liquidityEvent">Liquidity Event</label>
                        <textarea id="liquidityEvent" cols={50} rows={4} value={liquidityEvent} onChange={(e) => setLiquidityEvent(e.target.value)}></textarea>
                    </div>
                </div>
                <div className={styles.internalNote}>
                    <h3>Internal Note</h3>
                    <textarea className={styles.internalNoteTextarea} cols={50} rows={4} placeholder="Notes" value={note} onChange={(e) => setNote(e.target.value)}></textarea>
                </div>
                <div className={styles.buttons}>
                    <button type="button" className={styles.closeButton} onClick={handleClosePopup}>CLOSE</button>
                    <button type="button" className={styles.saveButton} onClick={Save}>SAVE</button>
                </div>
            </form>
        </div>
    );
};

export default PlanForm;
