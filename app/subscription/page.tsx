"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import "./subscription.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faCircle, faUserGroup } from '@fortawesome/free-solid-svg-icons';

const Subscription = () => {
  const [planOption, setPlanOption] = useState<boolean>(true);

  return (
    <div>
      <ul className="navbar">
        <Link className="link" href="/subscription">Subscription</Link>
        <Link className="link" href="/services">Services</Link>
        <Link className="link" href="/subscription">Invoices</Link>
      </ul>
      <div className="content">
        <div className='card'>
          <h2 className='title'>Subscriptions</h2>
          <ul style={{flexDirection: "row"}}>
            <FontAwesomeIcon icon={faCircle} style={{color: "#63E6BE"}} />
            <span style={{marginLeft: "1rem"}}>Your trial period will end on. 07.06.2024 (1 days)</span>
          </ul>
          <ul style={{flexDirection: "row"}}>
            <FontAwesomeIcon icon={faUserGroup} />
            <span style={{marginLeft: "1rem"}}>3 Stakeholders</span>
          </ul>
          <h2 style={{marginTop: "2rem", marginBottom: "7vh"}} className='title'>Plans</h2>
          <ul style={{flexDirection: "column", width: "auto", height: "80vh", marginLeft: "5vw"}}>
            <ul style={{justifyContent: "center"}} >
            <div className='selective-button-group'>
            <ul style={{flexDirection: "row", marginLeft: "30vw"}} >
              <button
                onClick={() => planOption ? null : setPlanOption(!planOption)}
                className={`${
                  planOption ? "selective-button-1" : "selective-button-2"} p-[1px]`}>Monthly</button>
              <button
                onClick={() => planOption ? setPlanOption(!planOption) : null}
                className={`${
                  planOption ? "selective-button-2" : "selective-button-1"} p-[1px]`}>Annual</button>
            </ul>
            </div>
            <ul className='plans-group' >
              <div className='plan-1' >
                <h3 style={{marginLeft: "10vw", marginTop: "2.5rem", fontSize: "21px"}} >Stakeholder</h3>
                { planOption ? <h2 style={{marginLeft: "6vw", fontSize: "33px", fontWeight: "bold"}} >TRY 131.19/month</h2> : <h2 style={{marginLeft: "6vw", fontSize: "33px", fontWeight: "bold"}} >TRY 1,259.58/year</h2> }
                <span style={{marginLeft: "7vw", marginBottom: "3rem"}} >TRY 43.73 per Stakeholder / month</span>
                <button className='subscribe-button' >Subscribe</button>
                <ul style={{display: "flex", flexDirection: "column", margin: "0%"}} >
                <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Cap table management</span> </ul>
                <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Share certificates</span> </ul>
                <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Funding round simulations</span> </ul>
                <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>ESOP Pools</span> </ul>
                <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>ESOP Grants & Exercising</span> </ul>
                <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Investor Updates</span> </ul>
                <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Add company valuations</span> </ul>
                <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Admin roles</span> </ul>
                <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>SSO Google & Microsoft</span> </ul>
                <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Automated Grant letters</span> </ul>
                <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Contract templates</span> </ul>
                <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Option to hide company's valuation</span> </ul>
                <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Board management</span> </ul>
                <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Shareholder meetings</span> </ul>
                <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Unlimited share classes</span> </ul>
                <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>E-Signature</span> </ul>
                <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Cap table management</span> </ul>
                <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Track changes</span> </ul>
                <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span  style={{fontWeight: "600"}}>Customer success support</span> </ul>
                </ul>
              </div>
              <div className='plan-2' >
                <h3 style={{marginLeft: "11.5vw", marginTop: "2.5rem", fontSize: "21px"}} >Scale-up</h3>
                <h1 style={{marginLeft: "10vw", marginBottom: "9vh"}} >Custom</h1>
                <button className='subscribe-button' >Subscribe</button>
                <ul style={{display: "flex", flexDirection: "column", margin: "0%"}} >
                <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span style={{fontWeight: "600"}}>All previous features, plus:</span> </ul>
                <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Unlimited stakeholders</span> </ul>
                <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>HRIS integration</span> </ul>
                <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>E-Signature integration</span> </ul>
                <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>409a valuation</span> </ul>
                <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Customized SSO</span> </ul>
                <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>Priority onboarding</span> </ul>
                <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span style={{fontWeight: "600"}}>Dedicated customer success manager</span> </ul>
                <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span style={{fontWeight: "600"}}>Whitelabel support</span> </ul>
                <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span style={{fontWeight: "600"}}>Self-hosted version</span> </ul>
                <ul className='plan-1-item' > <FontAwesomeIcon className='plan-1-item-icon' icon={faChevronRight} /> <span>And much more...</span> </ul>
                </ul>
              </div>
            </ul>
            </ul>
          </ul>
        </div>
        <ul style={{display: "flex", flexDirection: "column"}} >
        <span style={{marginLeft: "36.5vw", marginBottom: "2rem", marginTop: "0.5rem"}} >*VAT not included</span>
        <span style={{marginLeft: "31vw", fontSize: "13px"}} >© Copyright 2024 Capboard Tech S.L. All rights reserved.</span>
        </ul>
      </div>
    </div>
  )
}

export default Subscription;
