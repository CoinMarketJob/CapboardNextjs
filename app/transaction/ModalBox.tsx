'use client';
import React, { useState } from 'react';
import './ModalBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCloudArrowUp, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'; // Changed icon import name
import ModalButton from '../components/ModalButtons/modalbuttons';
import { Modal } from '@mui/material';
import Modals from '../components/Modals/modals';
import GeneralFormDropdown from '../components/GeneralFormDropdown/GeneralFormDropdown';

// Define dummy components for each modal type (replace with actual components)
const FinancingRound = () => <div>

</div>;
const Valuation = () => <div>Valuation Component</div>;
const StockSplit = () => <div className='card-modals' >
<h2 style={{padding: "0%", transform: "translateX(-40%)" }} className='title' >Split</h2>
<div className='underline' ></div>
<ul style={{display: "flex", flexDirection: "row", padding: "1rem"}} >
<ul style={{display: "flex", flexDirection: "column"}} >
<label className="form-label">Date</label>
                <div style={{width: "18vw"}}>
                <input
                    name="street"
                    placeholder="10.06.2024"
                    type="number"
                    className="form-control"
                />
                </div>
                </ul>
    <ul style={{display: "flex", flexDirection: "column"}} >
<label className="form-label">Split Factor</label>
                <div style={{width: "18vw"}}>
                <input
                    name="street"
                    placeholder="Amount"
                    type="number"
                    className="form-control"
                />
                </div>
                </ul>
</ul>
<div style={{margin: "20px", flexDirection: "row", display: "flex"}} >
<GeneralFormDropdown
        name="Documents"
        child={
            <div style={{flexDirection: "row", display: "flex", width: "35vw"}} >
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
<div style={{margin: "20px"}} >
<GeneralFormDropdown
        name="INTERNAL NOTE"
        child={
        <div id="notes-container" className="collapse show">
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
    <div style={{marginTop: "2rem"}} className='underline' ></div>
    <button style={{marginLeft: "28vw", width: "90px", height: "30px", backgroundColor: "white", border: "none"}}>Close</button>
    <button style={{marginLeft: "1vw", width: "90px", height: "50px", backgroundColor: "black", border: "none", color: "white"}}>Save</button>
    </div>
</div>;
const ConvertibleLoan = () => <div className='card-modals' >
<h2 style={{padding: "0%", transform: "translateX(-40%)" }} className='title' >Decrease Shares</h2>
<div className='underline' ></div>
<ul style={{display: "flex", flexDirection: "row", padding: "1rem"}} >
    <ul style={{display: "flex", flexDirection: "column", width: "50%", padding: "0%"}} >
        <label style={{marginTop: "0px", marginBottom: "10px"}} >Stakeholder</label>
    <div>
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
                </div>
            </div>
            <label style={{marginTop: "15px", marginBottom: "10px"}} >Date</label>
            <div style={{border: "1px solid rgba(0, 0, 0, 0.208)", height: "40px", paddingTop: "8px", paddingLeft: "8px", fontSize: "13px" }} className='calendar'>
            06/09/2024<FontAwesomeIcon style={{ marginLeft: "14vw" }} icon={faCalendar} />
        </div>
    </ul>
<div style={{width: "50%"}}>
    <label style={{width: "100%", marginLeft: "1rem", marginTop: "26%"}}>Number of shares</label>
    <input
    style={{width: "100%", marginLeft: "1rem"}}
            name="name"
            placeholder="Investment"
            type="number"
            className="form-control border-end"
            />
            </div>
</ul>
<div style={{margin: "20px", flexDirection: "row", display: "flex"}} >
<GeneralFormDropdown
        name="Maturity and Discount"
        child={
            <div style={{flexDirection: "row", display: "flex", width: "35vw"}} >
                <ul style={{display: "flex", flexDirection: "column"}} >
                <div style={{width: "18vw", marginTop: "1rem"}}>
                <label>Floor</label>
                <input
                    name="street2"
                    placeholder="Valuation floor"
                    type="text"
                    className="form-control"
                />
                </div>
                <div style={{width: "18vw", marginTop: "1rem"}}>
                <label>Cap</label>
                <input
                    name="street2"
                    placeholder="Discount"
                    type="text"
                    className="form-control"
                />
                </div>
                </ul>
                <ul style={{display: "flex", flexDirection: "column"}} >
                <div style={{width: "18vw", marginTop: "1rem"}}>
                <label>Discount</label>
                <input
                    name="street2"
                    placeholder="Valuation Cap"
                    type="text"
                    className="form-control"
                />
                </div>
                <div style={{width: "18vw", marginTop: "1rem"}}>
                    <label>Maturity date</label>
                <input
                    name="street2"
                    placeholder="gg.aa.yyyy"
                    type="text"
                    className="form-control"
                />
                </div>
                </ul>
                </div>
        }
    />
    </div>
    <div style={{margin: "20px", flexDirection: "row", display: "flex"}} >
<GeneralFormDropdown
        name="Interest"
        child={
            <div style={{flexDirection: "column", display: "flex", width: "35vw"}} >
                <ul style={{display: "flex", flexDirection: "row"}} >
                    <div>
                <label >Non-compounding</label>
            <input
            style={{width: "18vw"}}
                    name="street2"
                    placeholder="Discount"
                    type="number"
                    className="form-control"
                />
                </div>
                <div style={{marginLeft: "1rem"}} >
                <label >Interest Start Date</label>
            <input
            style={{width: "18vw"}}
                    name="Interest Start Date"
                    placeholder="10.06.2024"
                    type="number"
                    className="form-control"
                />
                </div>
                </ul>
                <ul style={{display: "flex", flexDirection: "row"}} >
                <div className='selective-button-group' >
            <button className='selective-button-1' >365</button>
            <button className='selective-button-2' >360</button>
                </div>
                <div style={{marginLeft: "12vw"}} className='selective-button-group' >
            <button className='selective-button-1' >NO</button>
            <button className='selective-button-2' >YES</button>
                </div>
                </ul>
                </div>

        }
    />
    </div>
<div style={{margin: "20px", flexDirection: "row", display: "flex"}} >
<GeneralFormDropdown
        name="Documents"
        child={
            <div style={{flexDirection: "row", display: "flex", width: "35vw"}} >
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
<div style={{margin: "20px"}} >
<GeneralFormDropdown
        name="INTERNAL NOTE"
        child={
        <div id="notes-container" className="collapse show">
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
    <div style={{marginTop: "2rem"}} className='underline' ></div>
    <button style={{marginLeft: "28vw", width: "90px", height: "30px", backgroundColor: "white", border: "none"}}>Close</button>
    <button style={{marginLeft: "1vw", width: "90px", height: "50px", backgroundColor: "black", border: "none", color: "white"}}>Save</button>
</div>
</div>;
const IssueShares = () => <div className='card-modals' >
<h2 style={{padding: "0%", transform: "translateX(-40%)" }} className='title' >Issue Shares</h2>
<div className='underline' ></div>
<ul style={{display: "flex", flexDirection: "row", padding: "1rem"}} >
    <ul style={{display: "flex", flexDirection: "column", width: "50%", padding: "0%"}} >
        <label style={{marginTop: "0px", marginBottom: "10px"}} >Stakeholder</label>
    <div>
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
                </div>
            </div>
            <label style={{marginTop: "15px", marginBottom: "10px"}} >Date</label>
            <div style={{border: "1px solid rgba(0, 0, 0, 0.208)", height: "40px", paddingTop: "8px", paddingLeft: "8px", fontSize: "13px" }} className='calendar'>
            06/09/2024<FontAwesomeIcon style={{ marginLeft: "14vw" }} icon={faCalendar} />
        </div>
            <label style={{marginTop: "10px", marginBottom: "10px"}} >Share class</label>
            <div>
        <select id="currency" name="currency" className="form-select">
            <option value="USD">Common</option>
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
            <label style={{marginTop: "15px", marginBottom: "10px"}} >Total investment</label>
            <input
    style={{width: "100%"}}
            name="name"
            placeholder="Amount"
            type="number"
            className="form-control border-end"
            />
    </ul>
    <div style={{width: "50%"}}>
    <label style={{width: "100%", marginLeft: "1rem", marginTop: "27%"}}>Number of shares</label>
    <input
    style={{width: "100%", marginLeft: "1rem"}}
            name="name"
            placeholder="Amount"
            type="number"
            className="form-control border-end"
            />
            <label style={{width: "100%", marginLeft: "1rem", marginTop: "7%"}}>Issue price</label>
    <input
    style={{width: "100%", marginLeft: "1rem"}}
            name="name"
            placeholder="Share Price"
            type="number"
            className="form-control border-end"
            />
            </div>
</ul>
<div style={{margin: "20px", flexDirection: "row", display: "flex"}} >
<GeneralFormDropdown
        name="Documents"
        child={
            <div style={{flexDirection: "row", display: "flex", width: "35vw"}} >
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
<div style={{margin: "20px"}} >
<GeneralFormDropdown
        name="INTERNAL NOTE"
        child={
        <div id="notes-container" className="collapse show">
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
    <div style={{marginTop: "2rem"}} className='underline' ></div>
    <button style={{marginLeft: "28vw", width: "90px", height: "30px", backgroundColor: "white", border: "none"}}>Close</button>
    <button style={{marginLeft: "1vw", width: "90px", height: "50px", backgroundColor: "black", border: "none", color: "white"}}>Save</button>
    </div>
</div>;
const DecreaseShares = () => <div className='card-modals' >
    <h2 style={{padding: "0%", transform: "translateX(-40%)" }} className='title' >Decrease Shares</h2>
    <div className='underline' ></div>
    <ul style={{display: "flex", flexDirection: "row", padding: "1rem"}} >
        <ul style={{display: "flex", flexDirection: "column", width: "50%", padding: "0%"}} >
            <label style={{marginTop: "0px", marginBottom: "10px"}} >Stakeholder</label>
        <div>
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
                    </div>
                </div>
                <label style={{marginTop: "15px", marginBottom: "10px"}} >Date</label>
                <div style={{border: "1px solid rgba(0, 0, 0, 0.208)", height: "40px", paddingTop: "8px", paddingLeft: "8px", fontSize: "13px" }} className='calendar'>
                06/09/2024<FontAwesomeIcon style={{ marginLeft: "14vw" }} icon={faCalendar} />
            </div>
                <label style={{marginTop: "15px", marginBottom: "10px"}} >Share class</label>
                <div>
            <select id="currency" name="currency" className="form-select">
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
        </ul>
        <div style={{width: "50%"}}>
        <label style={{width: "100%", marginLeft: "1rem", marginTop: "26%"}}>Number of shares</label>
        <input
        style={{width: "100%", marginLeft: "1rem"}}
                name="name"
                placeholder="Amount"
                type="number"
                className="form-control border-end"
                />
                </div>
    </ul>
    <div style={{margin: "20px", flexDirection: "row", display: "flex"}} >
    <GeneralFormDropdown
            name="Documents"
            child={
                <div style={{flexDirection: "row", display: "flex", width: "35vw"}} >
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
    <div style={{margin: "20px"}} >
    <GeneralFormDropdown
            name="INTERNAL NOTE"
            child={
            <div id="notes-container" className="collapse show">
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
        <div style={{marginTop: "2rem"}} className='underline' ></div>
        <button style={{marginLeft: "28vw", width: "90px", height: "30px", backgroundColor: "white", border: "none"}}>Close</button>
        <button style={{marginLeft: "1vw", width: "90px", height: "50px", backgroundColor: "black", border: "none", color: "white"}}>Save</button>
        </div>
</div>;
const Secondary = () => <div className='card-modals' >
<h2 style={{padding: "0%", transform: "translateX(-40%)" }} className='title' >Decrease Shares</h2>
<div className='underline' ></div>
<ul style={{display: "flex", flexDirection: "row", padding: "1rem"}} >
    <ul style={{display: "flex", flexDirection: "column", width: "50%", padding: "0%"}} >
        <label style={{marginTop: "0px", marginBottom: "10px"}} >From Stakeholder</label>
    <div>
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
                </div>
            </div>
            <label style={{marginTop: "10px", marginBottom: "10px"}} >From Stakeholder</label>
            <div>
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
                </div>
            </div>
            <label style={{marginTop: "15px", marginBottom: "10px"}} >Date</label>
            <div style={{border: "1px solid rgba(0, 0, 0, 0.208)", height: "40px", paddingTop: "8px", paddingLeft: "8px", fontSize: "13px" }} className='calendar'>
            06/09/2024<FontAwesomeIcon style={{ marginLeft: "14vw" }} icon={faCalendar} />
        </div>
            <label style={{marginTop: "15px", marginBottom: "10px"}} >Share class</label>
            <div>
        <select id="currency" name="currency" className="form-select">
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
    </ul>
    <div style={{width: "50%"}}>
    <label style={{width: "100%", marginLeft: "1rem", marginTop: "48%"}}>Number of shares</label>
    <input
    style={{width: "100%", marginLeft: "1rem"}}
            name="name"
            placeholder="Amount"
            type="number"
            className="form-control border-end"
            />
            <label style={{width: "100%", marginLeft: "1rem", marginTop: "7%"}}>Transfer price</label>
    <input
    style={{width: "100%", marginLeft: "1rem"}}
            name="name"
            placeholder="Share Price"
            type="number"
            className="form-control border-end"
            />
            </div>
</ul>
<div style={{margin: "20px", flexDirection: "row", display: "flex"}} >
<GeneralFormDropdown
        name="Documents"
        child={
            <div style={{flexDirection: "row", display: "flex", width: "35vw"}} >
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
<div style={{margin: "20px"}} >
<GeneralFormDropdown
        name="INTERNAL NOTE"
        child={
        <div id="notes-container" className="collapse show">
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
    <div style={{marginTop: "2rem"}} className='underline' ></div>
    <button style={{marginLeft: "28vw", width: "90px", height: "30px", backgroundColor: "white", border: "none"}}>Close</button>
    <button style={{marginLeft: "1vw", width: "90px", height: "50px", backgroundColor: "black", border: "none", color: "white"}}>Save</button>
    </div>
</div>;
const Payout = () => <div className='card-modals' >
<h2 style={{padding: "0%", transform: "translateX(-40%)" }} className='title' >Payout</h2>
<div className='underline' ></div>
<ul style={{display: "flex", flexDirection: "row", padding: "1rem", height: "20vh"}} >
    <ul style={{display: "flex", flexDirection: "column", width: "50%", padding: "0%",}} >
        <label style={{marginTop: "0px", marginBottom: "10px"}} >Stakeholder</label>
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
            <div>
            </div>
    </ul>
    <div style={{width: "50%", display: "flex", flexDirection: "row", marginTop: "3%", transform: "translateX(-105%)"}}>
    <div>
    <label style={{ marginLeft: "1rem", marginTop: "30%"}}>Date </label>
    <input
    style={{width: "12vw", marginLeft: "1rem"}}
            name="name"
            placeholder="10.06.2024"
            type="number"
            className="form-control border-end"
            />
            </div>
    <div>
    <label style={{ marginLeft: "1rem", marginTop: "30%"}}>Retention </label>
    <input
    style={{width: "12vw", marginLeft: "1rem"}}
            name="name"
            placeholder="00.0"
            type="number"
            className="form-control border-end"
            />
            </div>
        <div>
    <label style={{ marginLeft: "1rem", marginTop: "30%"}}>Total Payment</label>
    <input
    style={{width: "12vw", marginLeft: "1rem"}}
            name="name"
            placeholder="0"
            type="number"
            className="form-control border-end"
            />
            </div>
            </div>
</ul>
<div style={{margin: "20px", flexDirection: "row", display: "flex"}} >
<GeneralFormDropdown
        name="Documents"
        child={
            <div style={{flexDirection: "row", display: "flex", width: "35vw"}} >
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
<div style={{margin: "20px"}} >
<GeneralFormDropdown
        name="INTERNAL NOTE"
        child={
        <div id="notes-container" className="collapse show">
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
    <div style={{marginTop: "2rem"}} className='underline' ></div>
    <button style={{marginLeft: "28vw", width: "90px", height: "30px", backgroundColor: "white", border: "none"}}>Close</button>
    <button style={{marginLeft: "1vw", width: "90px", height: "50px", backgroundColor: "black", border: "none", color: "white"}}>Save</button>
    </div>
</div>;
const AddPool = () => <div>Add Pool Component</div>;
const AddPlan = () => <div>Add Plan Component</div>;
const PoolIncrease = () => <div></div>; // This component definition is empty, please fill it
const PoolDecrease = () => <div>Pool Decrease Component</div>;
const SingleGrant = () => <div>Single Grant Component</div>;

// Map modal types to their respective components
const modalComponents: { [key: string]: React.FC } = {
    'Financing Round': FinancingRound,
    'Valuation': Valuation,
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
                    <ModalButton Title="Financing Round" Span="Add a capital increase with valuation, shares, and pools. You can add or edit individual transactions later." onClick={() => handleOpenModal('Financing Round')} />
                    <ModalButton Title="Valuation" Span="Update your company’s post-money valuation." onClick={() => handleOpenModal('Valuation')} />
                    <ModalButton Title="Stock Split" Span="" onClick={() => handleOpenModal('Stock Split')} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', padding: '0%' }}>
                    <ModalButton Title="Convertible Loan" Span="Add a convertible loan/SAFE with optional parameters like a cap" onClick={() => handleOpenModal('Convertible Loan')} />
                    <ModalButton Title="Issue Shares" Span="Issue new shares and assign them to a stakeholder." onClick={() => handleOpenModal('Issue Shares')} />
                    <ModalButton Title="Decrease Shares" Span="Reduce the amount of shares that a stakeholder has" onClick={() => handleOpenModal('Decrease Shares')} />
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
                        {ModalContent && <ModalContent />}
                    </div>} />
                </Modal>
            )}
        </div>
    );
};

export default ModalBoxT;
