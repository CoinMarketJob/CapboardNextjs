'use client'
import React, { useState, useEffect } from 'react';
import styles from './grants.module.css';
import PlanForm from './pooll'
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "0px",
  borderRadius: "18px",
  boxShadow: 24,
};

const GrantsPage = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCreateGrantClick = () => {
        console.log('Create Equity Grant Clicked');
        handleCreatePlanClick();
    };

    const handleCreatePlanClick = () => {
      setIsModalOpen(true);
  };

  const handleCloseModal = () => {
      setIsModalOpen(false);
  };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch('/api/grants/get');
            const data = await response.json();
            setData(data);
            console.log(data);
          } catch (error) {
            console.error('Veri getirme hatası:', error);
          }
        }
      
        fetchData();
      }, []);


      const Delete = (id : number) => {

        async function deletePool(id:number) {
          try {
            const response = await fetch(`/api/grants/${id}`, {
              method: 'DELETE',
            });
        
            if (response.ok) {
              window.location.href="/grants";              
            } else {
              console.error('Silme hatası:', response.statusText);
            }
          } catch (error) {
            console.error('Hata:', error);
          }
        }

        deletePool(id);
      }

    return (
        <div className={styles.container}>
          <Modal id="ModalSign" open={isModalOpen} onClose={handleCloseModal}>
            <Box sx={{ ...style }}>
              <PlanForm handleClosePopup={handleCloseModal}/>
            </Box>
          </Modal>

            <h1 id='EquityhEADER'>Equity Grants</h1>
            <div className={styles.actions}>
                <input type="search" placeholder="search" className={styles.search} />
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
                {data.map((item,index) => {
                    return (
                        <div key={index} className={styles.tableRow}>
                            <div>{item.name}</div>
                            <div>{item.grantType}</div>
                            <div>{item.date}</div>
                            <div>{item.duration} / {item.vestEvery} / {item.cliff}</div>
                            <div>{item.purchasePrice}</div>
                            <div>0</div>
                            <div>0</div>
                            <button className={styles.dropdownBtn} onClick={toggleDropdown}>⋮</button>
                            <div className={`${styles.dropdownContent} ${dropdownOpen ? styles.show : ''}`}>
                                <a >Edit</a>
                                <a onClick={(e) => Delete(item.id)}>Delete</a>
                            </div>
                        </div>
                        );
                })}

                
            </div>
        </div>
    );
};

export default GrantsPage;
