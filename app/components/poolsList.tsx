'use client';
import { faChevronRight, faMinus, faPenToSquare, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import "./poolsList.css";


interface PoolListProps {
    name: string;
    grant: string;
    grantable: string;
    granted: string;
    grantVested: string;
    exercised: string;
}

const PoolsListCom: React.FC<PoolListProps> = ({
    name,
    grant,
    grantable,
    granted,
    grantVested,
    exercised,
}) => {

    const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

    const graphData = {
        datasets: [{
            data: [3.6],
            backgroundColor: ['green'],
            borderColor: ['green'],
        }]
    };

    const options = {
        cutout: '80%',
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
        console.log(dropdownVisible)
    };

    return (
        <div>
            <ul style={{ display: "flex", flexDirection: "row", padding: "0%", height: "50px", width: "auto", paddingTop: "20px"}}>
                <FontAwesomeIcon onClick={toggleDropdown} style={{transform: "translateX(-200%)"}} icon={faChevronRight} />
                <div style={{ width: "100px", fontSize: "10px"}}>{name}</div>
                <div style={{ width: "100px", fontSize: "10px", marginLeft: "12vw" }}>{grant}</div>
                <div style={{ width: "100px", fontSize: "10px", marginLeft: "3vw" }}>{grantable}</div>
                <div style={{ width: "100px", fontSize: "10px", marginLeft: "7vw" }}>{granted}</div>
                <div style={{ width: "100px", fontSize: "10px", marginLeft: "3vw" }}>{grantVested}</div>
                <div style={{ width: "100px", fontSize: "10px", marginLeft: "5vw" }}>{exercised}</div>
                <div style={{width: "100px", marginLeft: "3vw", padding: "0%", transform: "translateY(-130%)"}} >
                    <Doughnut style={{width: "100px", height: "100px"}} data={graphData} options={options} />
                </div>
                <FontAwesomeIcon style={{margin: "7px"}} icon={faPlus} />
                <FontAwesomeIcon style={{margin: "7px"}} icon={faMinus} />
                <FontAwesomeIcon style={{margin: "7px"}} icon={faPenToSquare} />
                <FontAwesomeIcon style={{margin: "7px"}} icon={faTrashAlt} />
            </ul>
            {dropdownVisible && (
                <div className='dropdown' >
                    <ul style={{display: "flex", flexDirection: "row"}} >
                        <div style={{fontSize: "15px"}}>2024-06-09</div>
                        <div style={{ width: "120px", textAlign: "center", marginLeft: "7vw", fontSize: "13px", backgroundColor: "#f1f5f9", color: "#475569 ", borderRadius: "0.2rem", fontWeight: "500"}} >POOL INCREASE</div>
                        <div style={{marginLeft: "10vw", fontSize: "15px"}} >{grantable}</div>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default PoolsListCom;
