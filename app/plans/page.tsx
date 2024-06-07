'use client'
import React, {useState, useEffect} from 'react';
import styles from './PageForm.module.css';
import { useRouter } from 'next/navigation';
import PlanForm from './pooll'

const PlansPage = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState([]);
    const router = useRouter();

    const handleCreatePlanClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
        console.log(dropdownVisible);
    };

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch('/api/plans/get');
            const data = await response.json();
            setData(data);
            console.log(data);
          } catch (error) {
            console.error('Veri getirme hatası:', error);
          }
        }
      
        fetchData();
      }, []);

      const Edit = (id : number) => {

      }

      const Delete = (id : number) => {

        async function deletePool(id:number) {
          try {
            const response = await fetch(`/api/plans/${id}`, {
              method: 'DELETE',
            });
        
            if (response.ok) {
              window.location.href="/plans";              
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
        <div className={styles.plans}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Equity plans</h1>
                    <button className={styles.createPlanBtn} onClick={handleCreatePlanClick}>+ CREATE YOUR EQUITY PLAN</button>
                </div>
                {data.map((item,index) => {

                    return(
                    <div key={index} className={styles.equityPlan}>
                        <div className={styles.planHeader}>
                            <span>{item.planName} - {item.grantType}</span>
                            <div className={styles.dropdown}>
                                <button onClick={toggleDropdown} className={styles.dropdownBtn}>⋮</button>
                                {dropdownVisible && (
                                            <div className={styles.dropdownContent}>
                                                <a onClick={(e) => Edit(item.id)}>Edit</a>
                                                <a onClick={(e) => Delete(item.id)}>Delete</a>
                                            </div>
                                        )}
                            </div>
                        </div>
                        <div className={styles.EquityPool}>
                            <div className={styles.equityPlanHeader}>
                                <span>Pool</span>
                                <span>Granted</span>
                                <span>Duration</span>
                                <span>Interval</span>
                                <span>Cliff</span>
                            </div>
                            <div className={styles.planDetails}>
                                <span>{item.name}</span>
                                <span>0</span>
                                <span>48</span>
                                <span>1</span>
                                <span>12</span>
                            </div>
                            <button className={styles.viewTransactionsBtn}>VIEW TRANSACTIONS</button>
                        </div>
                    </div>
                    );
                })}


                
            </div>

            {isModalOpen && 
            <PlanForm handleClosePopup={handleCloseModal}/>}

        </div>
    );
};

export default PlansPage;
