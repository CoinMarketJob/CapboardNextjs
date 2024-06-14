'use client';
import React, { useState, useEffect } from 'react';
import './ModalBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCloudArrowUp, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'; // Changed icon import name
import ModalButton from '../components/ModalButtons/modalbuttons';
import { Modal } from '@mui/material';
import Modals from '../components/Modals/modals';
import GeneralFormDropdown from '../components/GeneralFormDropdown/GeneralFormDropdown';

const StockSplit = ({ saveData }) => {
    const [formData, setFormData] = useState({
        date: '',
        splitFactor: '',
        internalNote: ''
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSave = () => {
        // Özel işlemler ve API çağrıları burada yapılabilir
        saveData(formData);
    };
    return(
<div className='card-modals' >
<h2 style={{padding: "0%", transform: "translateX(-60%)", fontSize: "20px" }} className='title' >Split</h2>
<div className='underline' ></div>
<ul style={{display: "flex", flexDirection: "row", padding: "1rem"}} >
<ul style={{display: "flex", flexDirection: "column", padding: "0%"}} >
<label style={{transform: "translateX(-9.5rem)"}} className="form-label">Date</label>
                <div style={{width: "18vw"}}>
                <input
                value={formData.date}
                onChange={handleInputChange}
                name="date"
                    placeholder="10.06.2024"
                    type="date"
                    className="form-control"
                />
                </div>
                </ul>
    <ul style={{display: "flex", flexDirection: "column"}} >
<label style={{transform: "translateX(-8rem)"}} className="form-label">Split Factor</label>
                <div style={{width: "18vw"}}>
                <input
                    value={formData.splitFactor}
                    onChange={handleInputChange}
                    name="splitFactor"
                    placeholder="Amount"
                    type="number"
                    className="form-control"
                />
                </div>
                </ul>
</ul>
<div style={{margin: "0px"}} >
    <div style={{transform: "translateX(-38.5%)"}} >
<GeneralFormDropdown
        name="INTERNAL NOTE"
        child={
        <div style={{transform: "translateX(38.5%)"}} id="notes-container" >
            <div className="ms-4">
            <div className="mb-3 form-group input-group-outline">
                <textarea
                value={formData.internalNote}
                onChange={handleInputChange}
                name="internalNote"
                className="form-control"
                placeholder="Notes"
                ></textarea>
            </div>
            </div>
        </div>
        }
    />
    </div>
    <div style={{marginTop: "2rem"}} className='underline' ></div>
    <button style={{marginLeft: "28vw", width: "90px", height: "30px", backgroundColor: "white", border: "none", marginTop: "2vh", marginBottom: "2vh"}}>Close</button>
    <button onClick={() => handleSave()} style={{marginLeft: "1vw", width: "90px", height: "50px", backgroundColor: "black", border: "none", color: "white"}}>Save</button>
</div>
</div>
)
}
const ConvertibleLoan = ({ saveData }) => {
    const [formData, setFormData] = useState({
        date: '',
        shares: '',
        stakeholder: 0,
        internalNote: '',
        floor: '',
        discount: '',
        Cap: '',
        MaturityDate: '',
        nonCompounding: '',
        StartDate: '',
        Documents: '',
    });

    const handleInputChange = (e) => {
        console.log("2356")
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        saveData(formData);
    };

    return (
        <div className='card-modals'>
            <h2 style={{ padding: "0%", transform: "translateX(-50%)", fontSize: "20px" }} className='title'>Convertible Loan</h2>
            <div className='underline'></div>
            <ul style={{ display: "flex", flexDirection: "row", padding: "1rem" }}>
                <ul style={{ display: "flex", flexDirection: "column", width: "50%", padding: "0%" }}>
                    <label style={{ marginTop: "0px", marginBottom: "10px", alignSelf: "flex-start" }}>Stakeholder</label>
                    <div>
                        <select name="stakeholder" className="form-select" value={formData.stakeholder} onChange={handleInputChange}>
                            <option value="Stakeholder-2">Stakeholder-2</option>
                            <option value="Stakeholder-1">Stakeholder-1</option>
                        </select>
                    </div>
                    <label style={{ marginTop: "15px", marginBottom: "5px", alignSelf: "flex-start" }}>Date</label>
                    <div style={{ width: "20vw" }}>
                        <input name='date' value={formData.date} onChange={handleInputChange} type="date" placeholder="gg.aa.yyyy" style={{ width: "20vw" }} className="input" />
                    </div>
                </ul>
                <div style={{ width: "50%" }}>
                    <label style={{ width: "100%", marginLeft: "1rem", marginTop: "25%", transform: "translateX(-120px)" }}>Number of shares</label>
                    <input
                        value={formData.shares} onChange={handleInputChange}
                        style={{ width: "100%", marginLeft: "1rem" }}
                        name="shares"
                        placeholder="Investment"
                        type="number"
                        className="form-control border-end"
                    />
                </div>
            </ul>
            <div style={{ margin: "0px", flexDirection: "row", transform: "translateX(-35%)" }}>
                <GeneralFormDropdown
                    name="Maturity and Discount"
                    child={
                        <div style={{ flexDirection: "row", display: "flex", width: "35vw", transform: "translateX(35%)" }}>
                            <ul style={{ display: "flex", flexDirection: "column" }}>
                                <div style={{ width: "18vw", marginTop: "1rem" }}>
                                    <label style={{ transform: "translate(-150px)" }}>Floor</label>
                                    <input
                                        value={formData.floor} onChange={handleInputChange}
                                        name="floor"
                                        placeholder="Valuation floor"
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div style={{ width: "18vw", marginTop: "1rem" }}>
                                    <label style={{ transform: "translate(-150px)" }}>Cap</label>
                                    <input
                                        value={formData.Cap} onChange={handleInputChange}
                                        name="Cap"
                                        placeholder="Valuation Cap"
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                            </ul>
                            <ul style={{ display: "flex", flexDirection: "column" }}>
                                <div style={{ width: "18vw", marginTop: "1rem" }}>
                                    <label style={{ transform: "translate(-150px)" }}>Discount</label>
                                    <input
                                        name="discount"
                                        value={formData.discount} onChange={handleInputChange}
                                        placeholder="Discount"
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div style={{ width: "18vw", marginTop: "1rem" }}>
                                    <label style={{ transform: "translate(-150px)" }}>Maturity date</label>
                                    <input
                                        name="MaturityDate"
                                        value={formData.MaturityDate} onChange={handleInputChange}
                                        placeholder="gg.aa.yyyy"
                                        type="date"
                                        className="form-control"
                                    />
                                </div>
                            </ul>
                        </div>
                    }
                />
            </div>
            <div style={{ margin: "20px", flexDirection: "row", transform: "translateX(-45%)" }}>
                <GeneralFormDropdown
                    name="Interest"
                    child={
                        <div style={{ flexDirection: "column", display: "flex", width: "35vw", transform: "translateX(45%)" }}>
                            <ul style={{ display: "flex", flexDirection: "row" }}>
                                <div>
                                    <label style={{ transform: "translate(-120px)" }}>Non-compounding</label>
                                    <input
                                        style={{ width: "18vw" }}
                                        name="nonCompounding"
                                        value={formData.nonCompounding} onChange={handleInputChange}
                                        placeholder="Non-compounding interest"
                                        type="number"
                                        className="form-control"
                                    />
                                </div>
                                <div style={{ marginLeft: "1rem" }}>
                                    <label style={{ transform: "translate(-100px)" }}>Interest Start Date</label>
                                    <input
                                        style={{ width: "18vw" }}
                                        name="StartDate"
                                        value={formData.StartDate} onChange={handleInputChange}
                                        placeholder="10.06.2024"
                                        type="date"
                                        className="form-control"
                                    />
                                </div>
                            </ul>
                            <ul style={{ display: "flex", flexDirection: "row" }}>
                                <div className='selective-button-group'>
                                    <button className='selective-button-1'>365</button>
                                    <button className='selective-button-2'>360</button>
                                </div>
                                <div style={{ marginLeft: "12vw" }} className='selective-button-group'>
                                    <button className='selective-button-1'>NO</button>
                                    <button className='selective-button-2'>YES</button>
                                </div>
                            </ul>
                        </div>
                    }
                />
            </div>
            <div style={{ margin: "20px", flexDirection: "row", transform: "translateX(-43%)" }}>
                <GeneralFormDropdown
                    name="Documents"
                    child={
                        <div style={{ flexDirection: "row", display: "flex", width: "35vw", transform: "translateX(43%)" }}>
                            <select name="Documents" className="form-select" value={formData.Documents} onChange={handleInputChange}>
                                <option value="Document-1">Document-1</option>
                                <option value="Document-2">Document-2</option>
                            </select>
                            <FontAwesomeIcon style={{ marginLeft: "2rem", marginTop: "10px" }} icon={faCloudArrowUp} />
                        </div>
                    }
                />
            </div>
            <div style={{ margin: "0px" }}>
                <div style={{ transform: "translateX(-38.5%)" }}>
                    <GeneralFormDropdown
                        name="INTERNAL NOTE"
                        child={
                            <div style={{ transform: "translateX(38.5%)" }} id="notes-container">
                                <div className="ms-4">
                                    <div className="mb-3 form-group input-group-outline">
                                        <textarea
                                            value={formData.internalNote} onChange={handleInputChange}
                                            name="internalNote"
                                            className="form-control"
                                            placeholder="Notes"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        }
                    />
                </div>
                <div style={{ marginTop: "2rem" }} className='underline'></div>
                <button
                    style={{ marginLeft: "28vw", width: "90px", height: "30px", backgroundColor: "white", border: "none", marginTop: "2vh", marginBottom: "2vh" }}
                    onClick={() => setFormData({
                        date: '',
                        shares: '',
                        stakeholder: '',
                        internalNote: '',
                        floor: '',
                        discount: '',
                        Cap: '',
                        MaturityDate: '',
                        nonCompounding: '',
                        StartDate: '',
                        Documents: '',
                    })}
                >
                    Close
                </button>
                <button
                    style={{ marginLeft: "1vw", width: "90px", height: "50px", backgroundColor: "black", border: "none", color: "white" }}
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    );
};
const IssueShares = ({ saveData }) => {
    const [formData, setFormData] = useState({
        stakeholder: 0,
        date: '',
        shareClass: 0,
        totalInvestment: '',
        numberOfShares: '',
        issuePrice: '',
        internalNote: '',
    });

    const [stakeholders, setStakeholders] = useState([]);
    const [shareClasses, setShareClasses] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        saveData(formData);
    };

    useEffect(() => {
        async function fetchData() {
          try {
  
            const response2 = await fetch('/api/stakeholders/get');
            const data2 = await response2.json();
            setStakeholders(data2);
            setFormData({ ...formData, stakeholder: data2[0].id });

            
            const response1 = await fetch('/api/shareclasses/get');
            const data1 = await response1.json();
            setShareClasses(data1);
            setFormData({ ...formData, shareClass: data1[0].id });
  
          } catch (error) {
            console.error('Veri getirme hatası:', error);
          }
        }
      
        fetchData();
      },[])

    return (
        <div className='card-modals'>
            <h2 style={{ padding: "0%", transform: "translateX(-55%)", fontSize: "20px" }} className='title'>Issue Shares</h2>
            <div className='underline'></div>
            <ul style={{ display: "flex", flexDirection: "row", padding: "1rem" }}>
                <ul style={{ display: "flex", flexDirection: "column", width: "50%", padding: "0%" }}>
                    <label style={{ marginTop: "0px", marginBottom: "10px", alignSelf: "flex-start" }}>Stakeholder</label>
                    <div>
                        <select name="stakeholder" className="form-select" value={formData.stakeholder} onChange={handleInputChange}>
                            {stakeholders.map((item,index) => (
                                <option key={index} value={item.id}>{item.name}</option>
                                ))
                            }   
                        </select>
                    </div>
                    <label style={{ marginTop: "15px", marginBottom: "10px", alignSelf: "flex-start" }}>Date</label>
                    <div style={{ width: "20vw" }}>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            placeholder="gg.aa.yyyy"
                            style={{ width: "20vw" }}
                            className="input"
                        />
                    </div>
                    <label style={{ marginTop: "10px", marginBottom: "10px", alignSelf: "flex-start" }}>Share class</label>
                    <div>
                        <select name="shareClass" className="form-select" value={formData.shareClass} onChange={handleInputChange}>
                            {shareClasses.map((item,index) => (
                                <option key={index} value={item.id}>{item.name}</option>    
                            ))
                            }
                        </select>
                    </div>
                    <label style={{ marginTop: "15px", marginBottom: "10px", alignSelf: "flex-start" }}>Total investment</label>
                    <input
                        style={{ width: "100%" }}
                        name="totalInvestment"
                        value={formData.totalInvestment}
                        onChange={handleInputChange}
                        placeholder="Amount"
                        type="number"
                        className="form-control border-end"
                    />
                </ul>
                <div style={{ width: "50%" }}>
                    <label style={{ width: "100%", marginTop: "27%", transform: "translateX(-100px)" }}>Number of shares</label>
                    <input
                        style={{ width: "100%", marginLeft: "1rem" }}
                        name="numberOfShares"
                        value={formData.numberOfShares}
                        onChange={handleInputChange}
                        placeholder="Amount"
                        type="number"
                        className="form-control border-end"
                    />
                    <label style={{ width: "100%", marginTop: "15px", transform: "translateX(-120px)" }}>Issue price</label>
                    <input
                        style={{ width: "100%", marginLeft: "1rem" }}
                        name="issuePrice"
                        value={formData.issuePrice}
                        onChange={handleInputChange}
                        placeholder="Share Price"
                        type="number"
                        className="form-control border-end"
                    />
                </div>
            </ul>
            <div style={{ margin: "20px", marginTop: "0%" }}>
                <div style={{ transform: "translateX(-38.5%)" }}>
                    <GeneralFormDropdown
                        name="INTERNAL NOTE"
                        child={
                            <div id="notes-container" style={{ transform: "translateX(38.5%)" }} className="collapse show">
                                <div className="ms-4">
                                    <div className="mb-3 form-group input-group-outline">
                                        <textarea
                                            name="internalNote"
                                            value={formData.internalNote}
                                            onChange={handleInputChange}
                                            className="form-control"
                                            placeholder="Notes"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        }
                    />
                </div>
                <div style={{ marginTop: "2rem" }} className='underline'></div>
                <button
                    style={{ marginLeft: "28vw", width: "90px", height: "30px", backgroundColor: "white", border: "none", marginTop: "1rem", marginBottom: "1rem" }}
                    onClick={() => setFormData({
                        stakeholder: '',
                        date: '',
                        shareClass: '',
                        totalInvestment: '',
                        numberOfShares: '',
                        issuePrice: '',
                        documents: '',
                        internalNote: '',
                    })}
                >
                    Close
                </button>
                <button
                    style={{ marginLeft: "1vw", width: "90px", height: "50px", backgroundColor: "black", border: "none", color: "white" }}
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    );
};
const DecreaseShares = ({ saveData }) => {
    const [formData, setFormData] = useState({
        stakeholder: '',
        date: '',
        shareClass: '',
        numberOfShares: '',
        documents: '',
        internalNote: '',
    });

    const handleInputChange = (e) => {
        console.log("13456")
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        saveData(formData);
    };

    return (
        <div className='card-modals'>
            <h2 style={{ padding: "0%", transform: "translateX(-50%)", fontSize: "20px" }} className='title'>Decrease Shares</h2>
            <div className='underline'></div>
            <ul style={{ display: "flex", flexDirection: "row", padding: "1rem" }}>
                <ul style={{ display: "flex", flexDirection: "column", width: "50%", padding: "0%" }}>
                    <label style={{ marginTop: "0px", marginBottom: "10px", transform: "translateX(-9rem)" }}>Stakeholder</label>
                    <div>
                        <select name="stakeholder" className="form-select" value={formData.stakeholder} onChange={handleInputChange}>
                            <option value="Stakeholder-2">Stakeholder-2</option>
                            <option value="Stakeholder-1">Stakeholder-1</option>
                        </select>
                    </div>
                    <label style={{ marginTop: "15px", marginBottom: "10px", transform: "translateX(-10.5rem)" }}>Date</label>
                    <input
                        style={{ marginRight: "1rem" }}
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        placeholder="10.06.2024"
                        type="date"
                        className="form-control border-end"
                    />
                    <label style={{ marginTop: "15px", marginBottom: "10px", transform: "translateX(-9rem)" }}>Share class</label>
                    <div>
                        <select name="shareClass" className="form-select" value={formData.shareClass} onChange={handleInputChange}>
                            <option value="Common">Common</option>
                            <option value="AddMoreClass">
                                <button>
                                    <FontAwesomeIcon icon={faPlus} /> Add more class
                                </button>
                            </option>
                        </select>
                    </div>
                </ul>
                <div style={{ width: "50%" }}>
                    <label style={{ width: "100%", marginLeft: "1rem", marginTop: "26%", transform: "translateX(-8rem)" }}>Number of shares</label>
                    <input
                        style={{ width: "100%", marginLeft: "1rem" }}
                        name="numberOfShares"
                        value={formData.numberOfShares}
                        onChange={handleInputChange}
                        placeholder="Amount"
                        type="number"
                        className="form-control border-end"
                    />
                </div>
            </ul>
            <div style={{ margin: "20px", flexDirection: "row", transform: "translateX(-43%)" }}>
                <GeneralFormDropdown
                    name="Documents"
                    child={
                        <div style={{ flexDirection: "row", display: "flex", width: "35vw", transform: "translateX(43%)" }}>
                            <select name="documents" className="form-select" value={formData.documents} onChange={handleInputChange}>
                                <option value="Document-1">Document-1</option>
                                <option value="Document-2">Document-2</option>
                            </select>
                            <FontAwesomeIcon style={{ marginLeft: "2rem", marginTop: "10px" }} icon={faCloudArrowUp} />
                        </div>
                    }
                />
            </div>
            <div style={{ margin: "0px" }}>
                <div style={{ transform: "translateX(-38.5%)" }}>
                    <GeneralFormDropdown
                        name="INTERNAL NOTE"
                        child={
                            <div id="notes-container" style={{ transform: "translateX(38.5%)" }}>
                                <div className="ms-4">
                                    <div className="mb-3 form-group input-group-outline">
                                        <textarea
                                            name="internalNote"
                                            value={formData.internalNote}
                                            onChange={handleInputChange}
                                            className="form-control"
                                            placeholder="Notes"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        }
                    />
                </div>
                <div style={{ marginTop: "2rem" }} className='underline'></div>
                <button
                    style={{ marginLeft: "28vw", width: "90px", height: "30px", backgroundColor: "white", border: "none", marginTop: "2vh", marginBottom: "2vh" }}
                    onClick={() => setFormData({
                        stakeholder: '',
                        date: '',
                        shareClass: '',
                        numberOfShares: '',
                        documents: '',
                        internalNote: '',
                    })}
                >
                    Close
                </button>
                <button
                    style={{ marginLeft: "1vw", width: "90px", height: "50px", backgroundColor: "black", border: "none", color: "white" }}
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    );
};
const Secondary = ({ saveData }) => {
    const [formData, setFormData] = useState({
        date: '',
        shareClass: '',
        shareNumber: '',
        transferPrice: '',
        Fromstakeholder: '',
        Tostakeholder: '',
        Documents: '',
        internalNote: '',
    });

    const handleInputChange = (e) => {
        console.log("12341")
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        saveData(formData);
    };

    return (
        <div className='card-modals'>
            <h2 style={{ padding: "0%", transform: "translateX(-40%)" }} className='title'>Secondary</h2>
            <div className='underline'></div>
            <ul style={{ display: "flex", flexDirection: "row", padding: "1rem" }}>
                <ul style={{ display: "flex", flexDirection: "column", width: "50%", padding: "0%" }}>
                    <label style={{ marginTop: "0px", marginBottom: "10px", transform: "translate(-8rem)" }}>From Stakeholder</label>
                    <div>
                        <select name="Fromstakeholder" className="form-select" value={formData.Fromstakeholder} onChange={handleInputChange}>
                            <option value="Stakeholder-2">Stakeholder-2</option>
                            <option value="Stakeholder-1">Stakeholder-1</option>
                        </select>
                    </div>
                    <label style={{ marginTop: "10px", marginBottom: "10px", transform: "translate(-8rem)" }}>To Stakeholder</label>
                    <div>
                        <select name="Tostakeholder" className="form-select" value={formData.Tostakeholder} onChange={handleInputChange}>
                            <option value="Stakeholder-2">Stakeholder-2</option>
                            <option value="Stakeholder-1">Stakeholder-1</option>
                        </select>
                    </div>
                    <label style={{ marginTop: "15px", marginBottom: "10px", transform: "translate(-10.5rem)" }}>Date</label>
                    <input
                        value={formData.date}
                        onChange={handleInputChange}
                        style={{ width: "100%", marginRight: "1rem" }}
                        name="date"
                        placeholder="gg.aa.yyyy"
                        type="date"
                        className="form-control border-end"
                    />
                    <label style={{ marginTop: "15px", marginBottom: "10px", transform: "translate(-9rem)" }}>Share class</label>
                    <div>
                        <select name="shareClass" className="form-select" value={formData.shareClass} onChange={handleInputChange}>
                            <option value="Common">Common</option>
                            <option value="Preferred">Preferred</option>
                        </select>
                    </div>
                </ul>
                <div style={{ width: "50%" }}>
                    <label style={{ width: "100%", marginLeft: "1rem", marginTop: "48%", transform: "translate(-8rem)" }}>Number of shares</label>
                    <input
                        value={formData.shareNumber}
                        onChange={handleInputChange}
                        style={{ width: "100%", marginLeft: "1rem" }}
                        name="shareNumber"
                        placeholder="Amount"
                        type="text"
                        className="form-control border-end"
                    />
                    <label style={{ width: "100%", marginLeft: "1rem", marginTop: "7%", transform: "translate(-8rem)" }}>Transfer price</label>
                    <input
                        value={formData.transferPrice}
                        onChange={handleInputChange}
                        style={{ width: "100%", marginLeft: "1rem" }}
                        name="transferPrice"
                        placeholder="Share Price"
                        type="number"
                        className="form-control border-end"
                    />
                </div>
            </ul>
            <div style={{ margin: "20px", flexDirection: "row", transform: "translateX(-43%)" }}>
                <GeneralFormDropdown
                    name="Documents"
                    child={
                        <div style={{ flexDirection: "row", display: "flex", width: "35vw", transform: "translateX(43%)" }}>
                            <select name="Documents" className="form-select" value={formData.Documents} onChange={handleInputChange}>
                                <option value="Document-1">Document-1</option>
                                <option value="Document-2">Document-2</option>
                            </select>
                            <FontAwesomeIcon style={{ marginLeft: "2rem", marginTop: "10px" }} icon={faCloudArrowUp} />
                        </div>
                    }
                />
            </div>
            <div style={{ margin: "0px" }}>
                <div style={{ transform: "translateX(-38.5%)" }}>
                    <GeneralFormDropdown
                        name="INTERNAL NOTE"
                        child={
                            <div style={{ transform: "translateX(38.5%)" }} id="notes-container">
                                <div className="ms-4">
                                    <div className="mb-3 form-group input-group-outline">
                                        <textarea
                                            value={formData.internalNote}
                                            onChange={handleInputChange}
                                            name="internalNote"
                                            className="form-control"
                                            placeholder="Notes"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        }
                    />
                </div>
                <div style={{ marginTop: "2rem" }} className='underline'></div>
                <button style={{ marginLeft: "28vw", width: "90px", height: "30px", backgroundColor: "white", border: "none", marginTop: "2vh", marginBottom: "2vh" }} onClick={() => setFormData({
                    date: '',
                    shareClass: '',
                    shareNumber: '',
                    transferPrice: '',
                    Fromstakeholder: '',
                    Tostakeholder: '',
                    Documents: '',
                    internalNote: '',
                })}>Close</button>
                <button style={{ marginLeft: "1vw", width: "90px", height: "50px", backgroundColor: "black", border: "none", color: "white" }} onClick={handleSave}>Save</button>
            </div>
        </div>
    );
}
const Payout = ({ saveData }) => {
    const [formData, setFormData] = useState({
        date: '',
        Retention: '',
        stakeholder: '',
        TotalPayment: '',
        internalNote: '',
    });
    const [stakeholders, setStakeholders] = useState([]);

    const handleInputChange = (e) => {
        console.log("123455")
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        saveData(formData);
    };

    useEffect(() => {
        async function fetchData() {
          try {
  
            const response2 = await fetch('/api/stakeholders/get');
            const data2 = await response2.json();
            setStakeholders(data2);
            setFormData({ ...formData, stakeholder: data2[0].id });
  
          } catch (error) {
            console.error('Veri getirme hatası:', error);
          }
        }
      
        fetchData();
      },[])

    return (
        <div className='card-modals'>
            <h2 style={{ padding: "0%", transform: "translateX(-55%)", fontSize: "20px" }} className='title'>Payout</h2>
            <div className='underline'></div>
            <ul style={{ display: "flex", flexDirection: "row", padding: "1rem" }}>
                <ul style={{ display: "flex", flexDirection: "column", width: "50%", padding: "0%" }}>
                    <label style={{ marginTop: "0px", marginBottom: "10px", alignSelf: "flex-start" }}>Stakeholder</label>
                    <div>
                        <select name="stakeholder" className="form-select" value={formData.stakeholder} onChange={handleInputChange}>
                            {stakeholders.map((item,index) => (
                                <option key={index} value={item.id}>{item.name}</option>
                                ))
                            }   
                        </select>
                    </div>
                </ul>
                <div style={{ width: "50%", display: "flex", flexDirection: "row", marginTop: "3%", transform: "translateX(-105%)" }}>
                    <div>
                        <label style={{ marginLeft: "1rem", marginTop: "30%", transform: "translateX(-6rem)" }}>Date</label>
                        <input
                            value={formData.date}
                            onChange={handleInputChange}
                            style={{ width: "12vw", marginLeft: "1rem" }}
                            name="date"
                            placeholder="10.06.2024"
                            type="date"
                            className="form-control border-end"
                        />
                    </div>
                    <div>
                        <label style={{ marginLeft: "1rem", marginTop: "30%", transform: "translateX(-5rem)" }}>Retention</label>
                        <input
                            value={formData.Retention}
                            onChange={handleInputChange}
                            style={{ width: "12vw", marginLeft: "1rem" }}
                            name="Retention"
                            placeholder="00.0"
                            type="number"
                            className="form-control border-end"
                        />
                    </div>
                    <div>
                        <label style={{ marginLeft: "1rem", marginTop: "30%", transform: "translateX(-4.5rem)" }}>Total Payment</label>
                        <input
                            value={formData.TotalPayment}
                            onChange={handleInputChange}
                            style={{ width: "12vw", marginLeft: "1rem" }}
                            name="TotalPayment"
                            placeholder="0"
                            type="number"
                            className="form-control border-end"
                        />
                    </div>
                </div>
            </ul>
            <div style={{ margin: "0px" }}>
                <div style={{ transform: "translateX(-38.5%)" }}>
                    <GeneralFormDropdown
                        name="INTERNAL NOTE"
                        child={
                            <div id="notes-container" style={{ transform: "translateX(38.5%)" }} className="collapse show">
                                <div className="ms-4">
                                    <div className="mb-3 form-group input-group-outline">
                                        <textarea
                                            value={formData.internalNote}
                                            onChange={handleInputChange}
                                            name="internalNote"
                                            className="form-control"
                                            placeholder="Notes"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        }
                    />
                </div>
                <div style={{ marginTop: "2rem" }} className='underline'></div>
                <button
                    style={{ marginLeft: "28vw", width: "90px", height: "30px", backgroundColor: "white", border: "none", marginTop: "2vh", marginBottom: "2vh" }}
                    onClick={() => setFormData({
                        date: '',
                        Retention: '',
                        stakeholder: '',
                        TotalPayment: '',
                        Documents: '',
                        internalNote: '',
                    })}
                >
                    Close
                </button>
                <button
                    style={{ marginLeft: "1vw", width: "90px", height: "50px", backgroundColor: "black", border: "none", color: "white" }}
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    );
}






const AddPool = () => <div className='card-modals' >
<h2 style={{padding: "0%", transform: "translateX(-55%)", fontSize: "1.25rem" }} className='title' >Add Pool</h2>
<div className='underline' ></div>
<ul style={{display: "flex", flexDirection: "row", padding: "1rem"}} >
    <ul style={{display: "flex", flexDirection: "column", width: "50%", padding: "0%"}} >
            <label style={{marginTop: "15px", marginBottom: "10px", transform: "translate(-9rem)"}} >Pool Name</label>
            <input
            style={{width: "100%", marginRight: "1rem"}}
            name="name"
            placeholder="TT Phantoms, Options pool, ..."
            type="text"
            className="form-control border-end"
            />
            <label style={{marginTop: "15px", marginBottom: "10px", transform: "translate(-10.5rem)"}} >Date</label>
            <input
            style={{width: "100%", marginRight: "1rem"}}
            name="name"
            placeholder="gg.aa.yyyy"
            type="date"
            className="form-control border-end"
            />
    </ul>
    <div style={{width: "50%"}}>
    <label style={{width: "100%", marginLeft: "1rem", marginTop: "7%", transform: "translate(-5.5rem)"}}>Amount allocated for grants</label>
    <ul style={{padding: "0%", display: "flex", flexDirection: "row"}} >
    <input
    style={{width: "70%", marginLeft: "1rem"}}
            name="name"
            placeholder="Amount"
            type="number"
            className="form-control border-end"
            />
            <div>
        <select id="currency" name="currency" className="form-select">
            <option value="USD">%</option>
            <option value="EUR">Shares</option>
        </select>
                <div
                className="ac-select-container w-100"
                style={{ display: "none" }}
                >
                <div className="ac-select-dropdown w-100">
                    <div className="ac-select-search-box">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="form"
                    />
                    </div>
                </div>
                </div>
            </div>
            </ul>
            <label style={{width: "100%", marginLeft: "1rem", marginTop: "7%", transform: "translate(-7rem)"}}>Underlying share class</label>
            <div>
        <select style={{marginLeft: "1rem"}} id="currency" name="currency" className="form-select">
            <option >Common</option>
            <option ><button> <FontAwesomeIcon icon={faPlus} /> Add more class</button></option>
        </select>
                <div
                className="ac-select-container w-100"
                style={{ display: "none" }}
                >
                <div className="ac-select-dropdown w-100">
                    <div className="ac-select-search-box">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="form"
                    />
                    </div>
                </div>
                </div>
            </div>
            </div>
</ul>
<div style={{margin: "20px", flexDirection: "row", transform: "translateX(-43%)"}} >
<GeneralFormDropdown
        name="Documents"
        child={
            <div style={{flexDirection: "row", display: "flex", width: "35vw", transform: "translateX(43%)"}} >
            <select id="currency" name="currency" className="form-select">
                <option value="USD">Stakeholder-2</option>
                <option value="EUR">Stakeholder-1</option>
            </select>
                    <div
                    className="ac-select-container w-100"
                    style={{ display: "none" }}
                    >
                    <div className="ac-select-dropdown w-100">
                        <div className="ac-select-search-box">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="form"
                        />
                        </div>
                    </div>
                    <div></div>
                    </div>
                    <FontAwesomeIcon style={{marginLeft: "2rem", marginTop: "10px"}} icon={faCloudArrowUp} />
                </div>
        }
    />
    </div>
<div style={{margin: "0px"}} >
    <div style={{transform: "translateX(-38.5%)"}} >
<GeneralFormDropdown
        name="INTERNAL NOTE"
        child={
        <div style={{transform: "translateX(38.5%)"}} id="notes-container" >
            <div className="ms-4">
            <div className="mb-3 form-group input-group-outline">
                <textarea
                name="notes"
                className="form-control"
                placeholder="Notes"
                ></textarea>
            </div>
            </div>
        </div>
        }
    />
    </div>
    <div style={{marginTop: "2rem"}} className='underline' ></div>
    <button style={{marginLeft: "28vw", width: "90px", height: "30px", backgroundColor: "white", border: "none", marginTop: "2vh", marginBottom: "2vh"}}>Close</button>
    <button style={{marginLeft: "1vw", width: "90px", height: "50px", backgroundColor: "black", border: "none", color: "white"}}>Save</button>
</div>
</div>;
const AddPlan = () => <div className='card-modals' >
<h2 style={{padding: "0%", transform: "translateX(-55%)", fontSize: "1.25rem" }} className='title' >Add Plan</h2>
<div className='underline' ></div>
<ul style={{display: "flex", flexDirection: "row", padding: "1rem"}} >
    <ul style={{display: "flex", flexDirection: "column", width: "50%", padding: "0%"}} >
            <label style={{marginTop: "15px", marginBottom: "10px", transform: "translate(-9rem)"}} >Plan Name</label>
            <input
            style={{width: "100%", marginRight: "1rem"}}
            name="name"
            placeholder="TT Phantoms, Options pool, ..."
            type="text"
            className="form-control border-end"
            />
            <label style={{marginTop: "15px", marginBottom: "10px", transform: "translate(-10.5rem)"}} >Date</label>
            <input
            style={{width: "100%", marginRight: "1rem"}}
            name="name"
            placeholder="gg.aa.yyyy"
            type="date"
            className="form-control border-end"
            />
    </ul>
    <div style={{width: "50%"}}>
    <label style={{width: "100%", marginLeft: "1rem", marginTop: "7%", transform: "translate(-9rem)"}}>From pool</label>
    <input
    style={{width: "100%", marginLeft: "1rem"}}
            name="name"
            placeholder="1234"
            type="number"
            className="form-control border-end"
            />
            <label style={{width: "100%", marginLeft: "1rem", marginTop: "7%", transform: "translate(-9rem)"}}>Grant Type</label>
            <div>
        <select style={{marginLeft: "1rem"}} id="currency" name="currency" className="form-select">
            <option >Phantom</option>
            <option >Stock</option>
            <option >Stock Options</option>
            <option >Warrants</option>
            <option >SARs</option>
        </select>
                <div
                className="ac-select-container w-100"
                style={{ display: "none" }}
                >
                <div className="ac-select-dropdown w-100">
                    <div className="ac-select-search-box">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="form"
                    />
                    </div>
                </div>
                </div>
            </div>
            </div>
</ul>
<div style={{margin: "20px", flexDirection: "row", transform: "translateX(-43%)"}} >
<GeneralFormDropdown
        name="Grant Presets"
        child={
            <ul>
                <div style={{margin: "20px", flexDirection: "row", transform: "translateX(-5%)"}}>
                <GeneralFormDropdown
        name="Prices"
        child={
            <div style={{flexDirection: "column", display: "flex", width: "35vw", transform: "translateX(40%)"}} >
            <label style={{marginTop: "15px", marginBottom: "10px", transform: "translate(-17.5rem)"}} >Purchase price</label>
            <input
            style={{width: "20vw"}}
                    name="street2"
                    placeholder="Purchase Price "
                    type="text"
                    className="form-control"
                />
                </div>
        }
    />
    </div>
    <div style={{transform: "translate(-1.5rem)"}} >
    <GeneralFormDropdown
        name="Vesting"
        child={
            <div style={{flexDirection: "row", display: "flex", width: "50vw", transform: "translateX(27%)", marginLeft: "2rem"}} >
                <ul style={{display: "flex", flexDirection: "column"}} >
                <div style={{width: "11vw", marginTop: "1rem"}}>
                <label style={{transform: "translate(-5.5rem)"}} >Type</label>
                <input
                    name="street2"
                    placeholder="Time (simple)"
                    type="text"
                    className="form-control"
                />
                </div>
                <div style={{width: "11vw", marginTop: "1rem"}}>
                <label style={{transform: "translate(-5rem)"}} >Duration</label>
                <input
                    name="street2"
                    placeholder="48"
                    type="text"
                    className="form-control"
                />
                </div>
                </ul>
                <ul style={{display: "flex", flexDirection: "column"}} >
                <div style={{width: "11vw", marginTop: "1rem"}}>
                    <label style={{transform: "translate(-4rem)"}} >Start date</label>
                <input
                    name="street2"
                    placeholder="gg.aa.yyyy"
                    type="date"
                    className="form-control"
                />
                </div>
                <div style={{width: "11vw", marginTop: "1rem"}}>
                <label style={{transform: "translate(-4.5rem)"}} >Vest every
                </label>
                <input
                    name="street2"
                    placeholder="Valuation Cap"
                    type="text"
                    className="form-control"
                />
                </div>
                </ul>
                <div style={{width: "11vw", marginTop: "1rem"}}>
                    <label style={{transform: "translate(-5rem)", marginTop: "4.8rem"}} >Cliff</label>
                <input
                style={{marginLeft: "1rem",}}
                    name="street2"
                    placeholder="12"
                    type="number"
                    className="form-control"
                />
                </div>
                </div>
        }
    />
    </div>
    <div style={{padding: "0%", transform: "translateX(-1rem)"}} >
    <GeneralFormDropdown
        name="Definitions"
        child={
        <div style={{transform: "translateX(40%)", width: "30vw", padding: "0%"}} id="notes-container" >
            <div style={{width: "30vw", marginBottom: "0.5rem"}} className="ms-4">
                <label style={{transform: "translateX(-15rem)", marginTop: "0.25rem"}}>Good leaver</label>
            <div>
                <textarea
                style={{width: "35vw", height: "10vh"}}
                name="notes"
                className="form-control"
                placeholder="Notes"
                ></textarea>
            </div>
            </div>
            <div style={{width: "30vw", marginBottom: "0.5rem"}} className="ms-4">
                <label style={{transform: "translateX(-15.5rem)", marginTop: "0.25rem"}}>Bad leaver</label>
            <div>
                <textarea
                style={{width: "35vw", height: "10vh"}}
                name="notes"
                className="form-control"
                placeholder="Notes"
                ></textarea>
            </div>
            </div>
            <div style={{width: "30vw", marginBottom: "0.5rem"}} className="ms-4">
                <label style={{transform: "translateX(-14.5rem)", marginTop: "0.25rem"}}>Liquidity event </label>
            <div>
                <textarea
                style={{width: "35vw", height: "10vh"}}
                name="notes"
                className="form-control"
                placeholder="Notes"
                ></textarea>
            </div>
            </div>
        </div>
        }
    />
    </div>
            </ul>
        }
    />
    </div>
<div style={{margin: "20px", flexDirection: "row", transform: "translateX(-43%)"}} >
<GeneralFormDropdown
        name="Documents"
        child={
            <div style={{flexDirection: "row", display: "flex", width: "35vw", transform: "translateX(43%)"}} >
            <select id="currency" name="currency" className="form-select">
                <option value="USD">Stakeholder-2</option>
                <option value="EUR">Stakeholder-1</option>
            </select>
                    <div
                    className="ac-select-container w-100"
                    style={{ display: "none" }}
                    >
                    <div className="ac-select-dropdown w-100">
                        <div className="ac-select-search-box">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="form"
                        />
                        </div>
                    </div>
                    <div></div>
                    </div>
                    <FontAwesomeIcon style={{marginLeft: "2rem", marginTop: "10px"}} icon={faCloudArrowUp} />
                </div>
        }
    />
    </div>
<div style={{margin: "0px"}} >
    <div style={{transform: "translateX(-38.5%)"}} >
<GeneralFormDropdown
        name="INTERNAL NOTE"
        child={
        <div style={{transform: "translateX(38.5%)"}} id="notes-container" >
            <div className="ms-4">
            <div className="mb-3 form-group input-group-outline">
                <textarea
                name="notes"
                className="form-control"
                placeholder="Notes"
                ></textarea>
            </div>
            </div>
        </div>
        }
    />
    </div>
    <div style={{marginTop: "2rem"}} className='underline' ></div>
    <button style={{marginLeft: "28vw", width: "90px", height: "30px", backgroundColor: "white", border: "none", marginTop: "2vh", marginBottom: "2vh"}}>Close</button>
    <button style={{marginLeft: "1vw", width: "90px", height: "50px", backgroundColor: "black", border: "none", color: "white"}}>Save</button>
</div>
</div>;
const PoolIncrease = () => <div className='card-modals' >
<h2 style={{padding: "0%", transform: "translateX(-50%)", fontSize: "20px" }} className='title' >Increase Pool</h2>
<div className='underline' ></div>
<ul style={{display: "flex", flexDirection: "row", padding: "1rem"}} >
    <ul style={{display: "flex", flexDirection: "column", width: "50%", padding: "0%"}} >
        <label style={{marginTop: "0px", marginBottom: "10px", alignSelf: "flex-start"}} >Pool</label>
    <div>
        <select id="currency" name="currency" className="form-select">
            <option value="USD">Pool-1</option>
            <option value="EUR">Pool-2</option>
        </select>
                <div
                className="ac-select-container w-100"
                style={{ display: "none" }}
                >
                <div className="ac-select-dropdown w-100">
                    <div className="ac-select-search-box">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="form"
                    />
                    </div>
                </div>
                </div>
            </div>
            <label style={{marginTop: "15px", marginBottom: "5px", alignSelf: "flex-start"}} >Date</label>
            <div style={{width: "20vw"}}>
            <input type="date" placeholder="gg.aa.yyyy" style={{width: "20vw"}} className="input" />
        </div>
    </ul>
<div style={{width: "50%"}}>
    <label style={{width: "100%", marginLeft: "1rem", marginTop: "2.5%", transform: "translateX(-10rem)"}}>Amount</label>
    <ul style={{padding: "0%", display: "flex", flexDirection: "row"}} >
    <input
    style={{width: "70%", marginLeft: "1rem"}}
            name="name"
            placeholder="Amount"
            type="number"
            className="form-control border-end"
            />
            <div>
        <select id="currency" name="currency" className="form-select">
            <option value="USD">%</option>
            <option value="EUR">Shares</option>
        </select>
                <div
                className="ac-select-container w-100"
                style={{ display: "none" }}
                >
                <div className="ac-select-dropdown w-100">
                    <div className="ac-select-search-box">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="form"
                    />
                    </div>
                </div>
                </div>
            </div>
            </ul>
            <label style={{width: "100%", marginLeft: "1rem", marginTop: "2.5%", transform: "translateX(-5.5rem)", fontSize: "13px"}}>Current pool percentage: 99.996%</label>
            </div>
</ul>
<div style={{margin: "20px", flexDirection: "row", transform: "translateX(-43%)"}} >
<GeneralFormDropdown
        name="Documents"
        child={
            <div style={{flexDirection: "row", display: "flex", width: "35vw", transform: "translateX(43%)"}} >
            <select id="currency" name="currency" className="form-select">
                <option value="USD">Stakeholder-2</option>
                <option value="EUR">Stakeholder-1</option>
            </select>
                    <div
                    className="ac-select-container w-100"
                    style={{ display: "none" }}
                    >
                    <div className="ac-select-dropdown w-100">
                        <div className="ac-select-search-box">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="form"
                        />
                        </div>
                    </div>
                    <div></div>
                    </div>
                    <FontAwesomeIcon style={{marginLeft: "2rem", marginTop: "10px"}} icon={faCloudArrowUp} />
                </div>
        }
    />
    </div>
<div style={{margin: "0px"}} >
    <div style={{transform: "translateX(-38.5%)"}} >
<GeneralFormDropdown
        name="INTERNAL NOTE"
        child={
        <div style={{transform: "translateX(38.5%)"}} id="notes-container" >
            <div className="ms-4">
            <div className="mb-3 form-group input-group-outline">
                <textarea
                name="notes"
                className="form-control"
                placeholder="Notes"
                ></textarea>
            </div>
            </div>
        </div>
        }
    />
    </div>
    <div style={{marginTop: "2rem"}} className='underline' ></div>
    <button style={{marginLeft: "28vw", width: "90px", height: "30px", backgroundColor: "white", border: "none", marginTop: "2vh", marginBottom: "2vh"}}>Close</button>
    <button style={{marginLeft: "1vw", width: "90px", height: "50px", backgroundColor: "black", border: "none", color: "white"}}>Save</button>
</div>
</div>;
const PoolDecrease = () => <div className='card-modals' >
<h2 style={{padding: "0%", transform: "translateX(-50%)", fontSize: "20px" }} className='title' >Decrease Pool</h2>
<div className='underline' ></div>
<ul style={{display: "flex", flexDirection: "row", padding: "1rem"}} >
    <ul style={{display: "flex", flexDirection: "column", width: "50%", padding: "0%"}} >
        <label style={{marginTop: "0px", marginBottom: "10px", alignSelf: "flex-start"}} >Pool</label>
    <div>
        <select id="currency" name="currency" className="form-select">
            <option value="USD">Pool-1</option>
            <option value="EUR">Pool-2</option>
        </select>
                <div
                className="ac-select-container w-100"
                style={{ display: "none" }}
                >
                <div className="ac-select-dropdown w-100">
                    <div className="ac-select-search-box">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="form"
                    />
                    </div>
                </div>
                </div>
            </div>
            <label style={{marginTop: "15px", marginBottom: "5px", alignSelf: "flex-start"}} >Date</label>
            <div style={{width: "20vw"}}>
            <input type="date" placeholder="gg.aa.yyyy" style={{width: "20vw"}} className="input" />
        </div>
    </ul>
<div style={{width: "50%"}}>
    <label style={{width: "100%", marginLeft: "1rem", marginTop: "2.5%", transform: "translateX(-7rem)"}}>Amount to decrease</label>
    <ul style={{padding: "0%", display: "flex", flexDirection: "row"}} >
    <input
    style={{width: "100%", marginLeft: "1rem"}}
            name="name"
            placeholder="Amount"
            type="number"
            className="form-control border-end"
            />
            </ul>
            </div>
</ul>
<div style={{margin: "20px", flexDirection: "row", transform: "translateX(-43%)"}} >
    <label style={{marginBottom: "0.2rem"}} >Source</label>
    <div className='selective-button-group-2' >
            <button
            style={{marginLeft: "1rem"}}
            className="selective-button-1-2">AUTHORIZED CAPITAL</button>
                <button
                style={{marginLeft: "0.5rem"}}
                className="selective-button-2-2">RESERVED SHARES</button>
                </div>
<GeneralFormDropdown
        name="Documents"
        child={
            <div style={{flexDirection: "row", display: "flex", width: "35vw", transform: "translateX(43%)"}} >
            <select id="currency" name="currency" className="form-select">
                <option value="USD">Stakeholder-2</option>
                <option value="EUR">Stakeholder-1</option>
            </select>
                    <div
                    className="ac-select-container w-100"
                    style={{ display: "none" }}
                    >
                    <div className="ac-select-dropdown w-100">
                        <div className="ac-select-search-box">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="form"
                        />
                        </div>
                    </div>
                    <div></div>
                    </div>
                    <FontAwesomeIcon style={{marginLeft: "2rem", marginTop: "10px"}} icon={faCloudArrowUp} />
                </div>
        }
    />
    </div>
<div style={{margin: "0px"}} >
    <div style={{transform: "translateX(-38.5%)"}} >
<GeneralFormDropdown
        name="INTERNAL NOTE"
        child={
        <div style={{transform: "translateX(38.5%)"}} id="notes-container" >
            <div className="ms-4">
            <div className="mb-3 form-group input-group-outline">
                <textarea
                name="notes"
                className="form-control"
                placeholder="Notes"
                ></textarea>
            </div>
            </div>
        </div>
        }
    />
    </div>
    <div style={{marginTop: "2rem"}} className='underline' ></div>
    <button style={{marginLeft: "28vw", width: "90px", height: "30px", backgroundColor: "white", border: "none", marginTop: "2vh", marginBottom: "2vh"}}>Close</button>
    <button style={{marginLeft: "1vw", width: "90px", height: "50px", backgroundColor: "black", border: "none", color: "white"}}>Save</button>
</div>
</div>;
const SingleGrant = () => <div className='card-modals' >
<h2 style={{padding: "0%", transform: "translateX(-50%)", fontSize: "20px" }} className='title' >Single Grant</h2>
<div className='underline' ></div>
<ul style={{display: "flex", flexDirection: "row", padding: "1rem"}} >
    <ul style={{display: "flex", flexDirection: "column", width: "50%", padding: "0%"}} >
        <label style={{marginTop: "0px", marginBottom: "10px", transform: "translateX(-9rem)"}} >Stakeholder</label>
    <div>
        <select id="currency" name="currency" className="form-select">
            <option value="USD">Stakeholder-1</option>
            <option value="EUR">Stakeholder-2</option>
        </select>
                <div
                className="ac-select-container w-100"
                style={{ display: "none" }}
                >
                <div className="ac-select-dropdown w-100">
                    <div className="ac-select-search-box">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="form"
                    />
                    </div>
                </div>
                </div>
            </div>
            <label style={{marginTop: "15px", marginBottom: "10px", transform: "translateX(-9rem)"}} >From plan</label>
            <div>
        <select id="currency" name="currency" className="form-select">
            <option >Plan-1</option>
            <option >Plan-2</option>
            <option ><button> <FontAwesomeIcon icon={faPlus} /> Add more class</button></option>
        </select>
                <div
                className="ac-select-container w-100"
                style={{ display: "none" }}
                >
                <div className="ac-select-dropdown w-100">
                    <div className="ac-select-search-box">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="form"
                    />
                    </div>
                </div>
                </div>
            </div>
            <label style={{marginTop: "15px", marginBottom: "10px", transform: "translateX(-9rem)"}} >Grant date</label>
            <input
            style={{ marginRight: "1rem"}}
            name="name"
            placeholder="10.06.2024"
            type="date"
            className="form-control border-end"
        />
    </ul>
    <div style={{width: "50%"}}>
    <label style={{width: "100%", marginLeft: "1rem", marginTop: "26%", transform: "translateX(-8rem)"}}>Granted amount</label>
    <input
    style={{width: "100%", marginLeft: "1rem"}}
            name="name"
            placeholder="Amount"
            type="number"
            className="form-control border-end"
            />
            <label style={{marginTop: "15px", marginBottom: "10px", transform: "translateX(-8rem)"}} >Expiry date</label>
            <input
            style={{ marginLeft: "1rem"}}
            name="name"
            placeholder="10.06.2024"
            type="date"
            className="form-control border-end"
        />
            </div>
</ul>
<ul>
                <div style={{margin: "20px", flexDirection: "row", transform: "translateX(-22.5rem)"}}>
                <GeneralFormDropdown
        name="Prices"
        child={
            <div style={{flexDirection: "column", display: "flex", width: "35vw", transform: "translateX(19rem)"}} >
            <label style={{marginTop: "15px", marginBottom: "10px", transform: "translate(-17.5rem)"}} >Purchase price</label>
            <input
            style={{width: "20vw"}}
                    name="street2"
                    placeholder="Purchase Price "
                    type="text"
                    className="form-control"
                />
                </div>
        }
    />
    </div>
    <div style={{transform: "translateX(-22rem)"}} >
    <GeneralFormDropdown
        name="Vesting"
        child={
            <div style={{flexDirection: "row", display: "flex", width: "50vw", transform: "translateX(27%)", marginLeft: "2rem"}} >
                <ul style={{display: "flex", flexDirection: "column"}} >
                <div style={{width: "11vw", marginTop: "1rem"}}>
                <label style={{transform: "translate(-5.5rem)"}} >Type</label>
                <input
                    name="street2"
                    placeholder="Time (simple)"
                    type="text"
                    className="form-control"
                />
                </div>
                <div style={{width: "11vw", marginTop: "1rem"}}>
                <label style={{transform: "translate(-5rem)"}} >Duration</label>
                <input
                    name="street2"
                    placeholder="48"
                    type="text"
                    className="form-control"
                />
                </div>
                </ul>
                <ul style={{display: "flex", flexDirection: "column"}} >
                <div style={{width: "11vw", marginTop: "1rem"}}>
                    <label style={{transform: "translate(-4rem)"}} >Start date</label>
                <input
                    name="street2"
                    placeholder="gg.aa.yyyy"
                    type="date"
                    className="form-control"
                />
                </div>
                <div style={{width: "11vw", marginTop: "1rem"}}>
                <label style={{transform: "translate(-4.5rem)"}} >Vest every
                </label>
                <input
                    name="street2"
                    placeholder="Valuation Cap"
                    type="text"
                    className="form-control"
                />
                </div>
                </ul>
                <div style={{width: "11vw", marginTop: "1rem"}}>
                    <label style={{transform: "translate(-5rem)", marginTop: "4.8rem"}} >Cliff</label>
                <input
                style={{marginLeft: "1rem",}}
                    name="street2"
                    placeholder="12"
                    type="number"
                    className="form-control"
                />
                </div>
                </div>
        }
    />
    </div>
    <div style={{padding: "0%", transform: "translateX(-21.2rem)"}} >
    <GeneralFormDropdown
        name="Definitions"
        child={
        <div style={{transform: "translateX(18rem)", width: "30vw", padding: "0%"}} id="notes-container" >
            <div style={{width: "30vw", marginBottom: "0.5rem"}} className="ms-4">
                <label style={{transform: "translateX(-15rem)", marginTop: "0.25rem"}}>Good leaver</label>
            <div>
                <textarea
                style={{width: "35vw", height: "10vh"}}
                name="notes"
                className="form-control"
                placeholder="Notes"
                ></textarea>
            </div>
            </div>
            <div style={{width: "30vw", marginBottom: "0.5rem"}} className="ms-4">
                <label style={{transform: "translateX(-15.5rem)", marginTop: "0.25rem"}}>Bad leaver</label>
            <div>
                <textarea
                style={{width: "35vw", height: "10vh"}}
                name="notes"
                className="form-control"
                placeholder="Notes"
                ></textarea>
            </div>
            </div>
            <div style={{width: "30vw", marginBottom: "0.5rem"}} className="ms-4">
                <label style={{transform: "translateX(-14.5rem)", marginTop: "0.25rem"}}>Liquidity event </label>
            <div>
                <textarea
                style={{width: "35vw", height: "10vh"}}
                name="notes"
                className="form-control"
                placeholder="Notes"
                ></textarea>
            </div>
            </div>
        </div>
        }
    />
    </div>
    </ul>
<div style={{margin: "20px", flexDirection: "row", transform: "translateX(-43%)"}} >
<GeneralFormDropdown
    name="Documents"
    child={
        <div style={{flexDirection: "row", display: "flex", width: "35vw", transform: "translateX(43%)"}} >
        <select id="currency" name="currency" className="form-select">
            <option value="USD">Stakeholder-1</option>
            <option value="EUR">Stakeholder-2</option>
        </select>
                <div
                className="ac-select-container w-100"
                style={{ display: "none" }}
                >
                <div className="ac-select-dropdown w-100">
                    <div className="ac-select-search-box">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="form"
                    />
                    </div>
                </div>
                <div></div>
                </div>
                <FontAwesomeIcon style={{marginLeft: "2rem", marginTop: "10px"}} icon={faCloudArrowUp} />
            </div>
    }
/>
</div>
<div style={{margin: "0px"}} >
<div style={{transform: "translateX(-38.5%)"}} >
<GeneralFormDropdown
    name="INTERNAL NOTE"
    child={
    <div id="notes-container" style={{transform: "translateX(38.5%)"}} className="collapse show">
        <div className="ms-4">
        <div className="mb-3 form-group input-group-outline">
            <textarea
            name="notes"
            className="form-control"
            placeholder="Notes"
            ></textarea>
        </div>
        </div>
    </div>
    }
/>
</div>
<div style={{marginTop: "2rem"}} className='underline' ></div>
<button style={{marginLeft: "28vw", width: "90px", height: "30px", backgroundColor: "white", border: "none", marginTop: "2vh", marginBottom: "2vh"}}>Close</button>
<button style={{marginLeft: "1vw", width: "90px", height: "50px", backgroundColor: "black", border: "none", color: "white"}}>Save</button>
</div>
</div>;

// Map modal types to their respective components
const modalComponents: { [key: string]: React.FC } = {
    'Stock Split': StockSplit,
    'Convertible Loan': ConvertibleLoan,
    'Issue Shares': IssueShares,
    'Decrease Shares': DecreaseShares,
    'Secondary': Secondary,
    'Payout': Payout,
    'ADD POOL': AddPool,
    'ADD PLAN': AddPlan,
    'POOL INCREASE': PoolIncrease,
    'POOL DECREASE': PoolDecrease,
    'SINGLE GRANT': SingleGrant,
};

const ModalBoxT: React.FC<{ CloseModal: () => void }> = ({ CloseModal }) => {
    const [openModal, setOpenModal] = useState<string | null>(null);

    const handleOpenModal = (modalType: string) => {
        setOpenModal(modalType);
    };

    const handleCloseModal = () => {
        setOpenModal(null);
    };

    const save = async (formData) => {
        console.log(openModal);
        var api = "/api/transactions/create/" + openModal == "Issue Shares" ? "Issue" : openModal == "Payout" ? "payout" : "";
        try {
            const response = await fetch(api, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();

            if(response.ok){                
                window.location.href="/transaction";
            }
            console.log(data);
        } catch (error) {
            console.error('Veri getirme hatası:', error);
        }
    }


    const ModalContent = openModal ? modalComponents[openModal] : null;

    return (
        <div className="modal-content">
            {}
            <h2 style={{ transform: 'translateX(-37.5%)' }} className="title">Add Transactions</h2>

            {}
            <FontAwesomeIcon className="close-modal" onClick={CloseModal} icon={faTimes} />

            {}
            <div className="underline"></div>

            {}
            <span style={{ transform: 'translateX(-39%)', marginTop: '10px' }} className="title-2">Stock transactions</span>

            {}
            <div style={{ display: 'flex', flexDirection: 'row', padding: '0%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', padding: '0%' }}>
                    <ModalButton Title="Stock Split" Span="" onClick={() => handleOpenModal('Stock Split')} />                    
                    <ModalButton Title="Decrease Shares" Span="Reduce the amount of shares that a stakeholder has" onClick={() => handleOpenModal('Decrease Shares')} />

                </div>
                <div style={{ display: 'flex', flexDirection: 'column', padding: '0%' }}>
                    <ModalButton Title="Convertible Loan" Span="Add a convertible loan/SAFE with optional parameters like a cap" onClick={() => handleOpenModal('Convertible Loan')} />
                    <ModalButton Title="Issue Shares" Span="Issue new shares and assign them to a stakeholder." onClick={() => handleOpenModal('Issue Shares')} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', padding: '0%', marginRight: '1rem' }}>
                    <ModalButton Title="Secondary" Span="Add a share transfer between two stakeholders" onClick={() => handleOpenModal('Secondary')} />
                    <ModalButton Title="Payout" Span="Track payouts and other dividends. It doesn’t impact the cap table." onClick={() => handleOpenModal('Payout')} />
                </div>
            </div>

            {/* Equity Plan Transaction */}
            <h2 style={{ transform: 'translateX(-36%)' }} className="title-2">Equity Plan Transaction</h2>

            {/* Equity plan transaction modal buttons */}
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ display: 'flex', flexDirection: 'column', padding: '0%' }}>
                    <ModalButton Title="ADD POOL" Span="Add a pool reserved for equity plans or other incentives, which will show up in the fully-diluted cap table" onClick={() => handleOpenModal('ADD POOL')} />
                    <ModalButton Title="ADD PLAN" Span="Create an equity plan for your key employees." onClick={() => handleOpenModal('ADD PLAN')} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', padding: '0%' }}>
                    <ModalButton Title="POOL INCREASE" Span="Add new authorized shares to an existing pool" onClick={() => handleOpenModal('POOL INCREASE')} />
                    <ModalButton Title="POOL DECREASE" Span="Give back shares that were previously assigned to a pool." onClick={() => handleOpenModal('POOL DECREASE')} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', padding: '0%' }}>
                    {/* Placeholder for Pool Increase */}
                    <ModalButton Title="SINGLE GRANT" Span="Add a share transfer between two stakeholders" onClick={() => handleOpenModal('SINGLE GRANT')} />
                </div>
            </div>

            {/* Render modal if openModal is not null */}
            {openModal && (
                <Modal open={!!openModal} onClose={handleCloseModal}>
                    <Modals CloseModal={handleCloseModal} Name={openModal} Children={<div className="modal-inner-content">
                        {ModalContent && <ModalContent saveData={save} />}
                    </div>} />
                </Modal>
            )}
        </div>
    );
};

export default ModalBoxT;
