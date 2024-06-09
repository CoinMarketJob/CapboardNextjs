'use client'
import React, { useState, useEffect } from 'react';
import './Modal.css';
import GeneralFormDropdown from '../components/GeneralFormDropdown/GeneralFormDropdown';

interface props {
  CloseModal: void;
}

const ModalBox: React.FC<props> = ({CloseModal}) => {
    const [amount, setAmount] = useState("");
    const [planId, setPlanId] = useState("");
    const [grantDate, setGrantDate] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [note, setNote] = useState("");
    const [plans, setPlans] = useState([]);
    const [stakeholderId, setStakeholderId] = useState("");
    const [stakeholders, setStakeholders] = useState([]);
    const [price, setPrice] = useState("");
    const [vestingType, setVestingType] = useState("Time");
    const [startDate, setStartDate] = useState("");
    const [duration, setDuration] = useState("");
    const [vestEvery, setVestEvery] = useState("");
    const [cliff, setCliff] = useState("");
    const [goodLeaver, setGoodLeaver] = useState("");
    const [badLeaver, setBadLeaver] = useState("");
    const [liquidtyEvent, setLiquidtyEvent] = useState("");


    const Save = () => {
      async function Submit() {
        const submitData = {
          stakeholderId:stakeholderId,
          planId:planId,
          amount:amount,
          date: grantDate,
          expiryDate:expiryDate,
          purchasePrice: price,
          vestingType:vestingType,
          startDate:startDate,
          duration:duration,
          vestEvery:vestEvery,
          cliff:cliff,
          goodLeaver:goodLeaver,
          badLeaver:badLeaver,
          liquidityEvent:liquidtyEvent,
          note:note
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

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('/api/plans/get');
          const data = await response.json();
          setPlans(data);
          setPlanId(data[0].id);

          const response2 = await fetch('/api/stakeholders/get');
          const data2 = await response2.json();
          setStakeholders(data2);
          setStakeholderId(data2[0].id);

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
                    <label className="form-label">Stakeholder</label>
                    <select className="form-control" value={stakeholderId} onChange={(e) => setStakeholderId(e.target.value)}>
                    {stakeholders.map((item,index) => (
                      <option key={index} value={item.id}>{item.name}</option>
                    ))}
                  </select>                  
                  </div>
              </div>           
            </div>

          <div className="row">

          <div className="col-12 col-md-6">
                <div className="form-group">
                  <label className="form-label">From Plan</label>
                  <select className="form-control" value={planId} onChange={(e) => setPlanId(e.target.value)}>
                    {plans.map((item,index) => (
                      <option key={index} value={item.id}>{item.planName}</option>
                    ))}
                  </select>
                </div>
            </div>


            <div className="col-12 col-md-6">
                <div className="form-group">
                  <label className="form-label">Amount</label>
                  <input name="name" className="form-control" type="number"
                  value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
            </div>
                        
          </div>

          <div className="row">
            <div className="col-12 col-md-6">
                <div className="form-group">
                  <label className="form-label">Grant Date</label>
                  <input name="name" className="form-control" type="date" 
                  value={grantDate} onChange={(e) => setGrantDate(e.target.value)} />
                </div>
            </div> 

            <div className="col-12 col-md-6">
                <div className="form-group">
                  <label className="form-label">Expiry Date</label>
                  <input name="name" className="form-control" type="date" 
                  value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
                </div>
            </div>           
          </div>

          <GeneralFormDropdown name="Prices" child={
            <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label className="form-label">Purchase price</label>                    
                    <input name="name" className="form-control" type="number" 
                    value={price} onChange={(e) => setPrice(e.target.value)} />

                  </div>
              </div>          
            } />

            <GeneralFormDropdown name="Vesting" child={
              <div>
                <div className="row row-cols-md-3 row-cols-1">
                  <div className="col">
                      <div className="form-group">
                        <label className="form-label">Type</label>
                        <select className="form-control" 
                        value={vestingType} onChange={(e) => setVestingType(e.target.value)}>
                          <option value="Time">Time (simple)</option>
                          <option value="None">None</option>
                        </select>
                      </div>
                  </div> 
      
                  <div className="col">
                      <div className="form-group">
                        <label className="form-label">Start Date</label>
                        <input name="name" className="form-control" type="date" 
                        value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                      </div>
                  </div>             
                </div>     
                
                <div className="row row-cols-md-3 row-cols-1">
                  <div className="col">
                      <div className="form-group">
                        <label className="form-label">Duration</label>
                        <input name="name" className="form-control" type="number" 
                        value={duration} onChange={(e) => setDuration(e.target.value)} />
                      </div>
                  </div> 
      
                  <div className="col">
                      <div className="form-group">
                        <label className="form-label">Vest Every</label>
                        <input name="name" className="form-control" type="number" 
                        value={vestEvery} onChange={(e) => setVestEvery(e.target.value)} />
                      </div>
                  </div>  

                  <div className="col">
                      <div className="form-group">
                        <label className="form-label">Cliff</label>
                        <input name="name" className="form-control" type="number" 
                        value={cliff} onChange={(e) => setCliff(e.target.value)} />
                      </div>
                  </div>            
                </div>
              </div>
            } />

            <GeneralFormDropdown name="Definitions" child={
              <div>
                <div className="form-group">
                  <label className="form-label">Good leaver</label>                    
                  <textarea name="notes" className="form-control" 
                  value={goodLeaver} onChange={(e) => setGoodLeaver(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                  <label className="form-label">Bad leaver</label>                    
                  <textarea name="notes" className="form-control" 
                  value={badLeaver} onChange={(e) => setBadLeaver(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                  <label className="form-label">Liquidity event</label>                    
                  <textarea name="notes" className="form-control" 
                  value={liquidtyEvent} onChange={(e) => setLiquidtyEvent(e.target.value)}></textarea>
                </div>
              </div>
            } />

          <GeneralFormDropdown name="Notes" child={
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
