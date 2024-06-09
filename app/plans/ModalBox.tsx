'use client'
import React, { useState, useEffect } from 'react';
import './Modal.css';
import GeneralFormDropdown from '../components/GeneralFormDropdown/GeneralFormDropdown';

interface props {
  CloseModal: void;
}

const ModalBox: React.FC<props> = ({CloseModal}) => {
    const [planName, setPlanName] = useState("");
    const [poolId, setPoolId] = useState("");
    const [date, setDate] = useState("");
    const [grantType, setGrantType] = useState("Phantom");
    const [note, setNote] = useState("");
    const [pools, setPools] = useState([]);

    const Save = () => {
      async function Submit() {
        const submitData = {
          planName: planName,
          poolId:poolId,
          date:date,
          grantType:grantType,
          Note: note,
        }
         try {
          const response = await fetch('/api/plans',{
            method: 'POST',
            body: JSON.stringify(submitData),
            headers: {
              'content-type': 'application/json'
            }
          })
          console.log(response);
      
          if(response.ok){
            window.location.href="/plans";
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

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('/api/pool/get');
          const data = await response.json();
          setPools(data);
          setPoolId(data[0].id);

        } catch (error) {
          console.error('Veri getirme hatası:', error);
        }
      }
    
      fetchData();
    },[])


    return (
      <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title font-weight-normal">Add Plan</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={CloseModal}>
            </button>
        </div>
        
        <div className="modal-body">
          <div className="row">
            <div className="col-12 col-md-6">
                <div className="form-group">
                  <label className="form-label">Plan name</label>
                  <input name="name" className="form-control" type="text" placeholder="IT Phantoms, Options pool, ..."
                  value={planName} onChange={(e) => setPlanName(e.target.value)} />
                </div>
            </div>

            <div className="col-12 col-md-6">
                <div className="form-group">
                  <label className="form-label">From Pool</label>
                  <select className="form-control" value={poolId} onChange={(e) => setPoolId(e.target.value)}>
                    {pools.map((item,index) => (
                      <option key={index} value={item.id}>{item.poolName}</option>
                    ))}
                  </select>
                </div>

            </div>            
          </div>

          <div className="row">
            <div className="col-12 col-md-6">
                <div className="form-group">
                  <label className="form-label">Date</label>
                  <input name="name" className="form-control" type="date" 
                  value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
            </div>

            <div className="col-12 col-md-6">
                <div className="form-group">
                  <label className="form-label">Grant Type</label>
                  <select className="form-control" value={grantType} onChange={(e) => setGrantType(e.target.value)}>
                    <option value="Phantom">Phantom</option>
                    <option value="Stock">Stock</option>
                    <option value="StockOptions">StockOptions</option>
                    <option value="Warrants">Warrants</option>
                    <option value="SARs">SARs</option>
                  </select>
                </div>

            </div>            
          </div>

          <GeneralFormDropdown name="INTERNAL NOTE" child={
            <textarea name="notes" className="form-control" placeholder="notes"  value={note} onChange={(e) => setNote(e.target.value)}></textarea>
          } />

        </div>


        <div className="modal-footer justify-content-between">
                <div data-id="apply-to-all" className="form-check d-none">
                    <input name="apply-to-all" className="form-check-input" type="checkbox" id="apply-to-all" />
                    <label className="custom-control-label">Apply to all grants</label>
                </div>
                <div className="text-end">
                    <button type="button" className="btn bg-gradient-secondary" data-bs-dismiss="modal" onClick={CloseModal}>Close</button>
                    <button type="submit" form="add-plan-form" className="btn bg-gradient-primary" onClick={Save}>Save</button>
                </div>
            </div>
      </div>        
    );
};

export default ModalBox;
