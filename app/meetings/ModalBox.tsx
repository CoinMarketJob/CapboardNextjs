'use client'
import React, { useState, useEffect } from 'react';
import './Modal.css';
import GeneralFormDropdown from '../components/GeneralFormDropdown/GeneralFormDropdown';

interface props {
  CloseModal: void;
}

const ModalBox: React.FC<props> = ({CloseModal}) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [date, setDate] = useState("");
    const [timezone, setTimezone] = useState("");
    const [location, setLocation] = useState("");
    const [link, setLink] = useState("");

    const Save = () => {
      async function Submit() {
        const submitData = {
          name,
          type,
          date,
          timezone,
          location,
          link
        }
         try {
          const response = await fetch('/api/meeting',{
            method: 'POST',
            body: JSON.stringify(submitData),
            headers: {
              'content-type': 'application/json'
            }
          })
          console.log(response);
      
          if(response.ok){
            window.location.href="/meetings";
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
      <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title font-weight-normal">Add Meetings</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={CloseModal}>
            </button>
        </div>
        
        <div className="modal-body">
          <div className="row">
            <div className="col-12 col-md-6">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input name="name" className="form-control" type="text" placeholder="Q1 2023 Board Meeting"
                  value={name} onChange={(e) => setName(e.target.value)} />
                </div>
            </div>

            <div className="col-12 col-md-6">
                <div className="form-group">
                  <label className="form-label">Type</label>
                  <input name="name" className="form-control" type="text" placeholder="Board Meeting"
                  value={type} onChange={(e) => setType(e.target.value)} />
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
                  <label className="form-label">Timezone</label>
                  <input name="name" className="form-control" type="text" placeholder="Select"
                  value={timezone} onChange={(e) => setTimezone(e.target.value)} />
                </div>

            </div>            
          </div>


          <div className="row">
            <div className="col-12 col-md-6">
                <div className="form-group">
                  <label className="form-label">Location</label>
                  <input name="name" className="form-control" type="text" placeholder="Street 34, 08034, Barcelona"
                  value={location} onChange={(e) => setLocation(e.target.value)} />
                </div>
            </div>

            <div className="col-12 col-md-6">
                <div className="form-group">
                  <label className="form-label">Meeting Link</label>
                  <input name="name" className="form-control" type="text" placeholder="https://meet.google.com/iju-eavh-jho"
                  value={link} onChange={(e) => setLink(e.target.value)} />
                </div>

            </div>            
          </div>

        </div>


        <div className="modal-footer justify-content-between">
                <div className="text-end">
                    <button type="button" className="btn bg-gradient-secondary" data-bs-dismiss="modal" onClick={CloseModal}>Close</button>
                    <button type="submit" form="add-plan-form" className="btn bg-gradient-primary" onClick={Save}>Save</button>
                </div>
            </div>
      </div>        
    );
};

export default ModalBox;
