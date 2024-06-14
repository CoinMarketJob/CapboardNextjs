"use client"
import React, {useState , useEffect} from 'react'
import './EquityPlansList.css'
import { motion, AnimatePresence } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faChevronDown,
  faEllipsisVertical
} from "@fortawesome/free-solid-svg-icons";

interface Plans {
  data: Array<any>;
}
const EquityPlansList: React.FC<Plans> = ({data}) => {
    const [isOpen, setIsOpen] = useState(true);
    const [shares, setShares] = useState(0);
    const [totalShares, setTotalShares] = useState(0);
    const [grants, setGrants] = useState(0);
    const [totalGrant, setTotalGrant] = useState(0);
    const [combined, setCombined] = useState([]);


  const ChangeVisibilityMenu = () => {
    setIsOpen(!isOpen);
  }
  useEffect(() => {    

    const filteredData = data.map(plan => ({
      ...plan,
      transactions: plan.transactions.filter(
        transaction =>
          transaction.type === "PoolCreation" ||
          transaction.type === "PoolIncrease" ||
          transaction.type === "PoolDecrease"
      )
    }));

    const totals = filteredData.map(plan => {
      const total = plan.transactions.reduce((acc, transaction) => {
        if (transaction.type === "PoolCreation" || transaction.type === "PoolIncrease") {
          return acc + transaction.amount;
        } else if (transaction.type === "PoolDecrease") {
          return acc - transaction.amount;
        } else {
          return acc; // Diğer transaction tipleri için toplamı değiştirme
        }
      }, 0);

      return {
        planId: plan.id,
        poolName: plan.poolName,
        total,
      };
    });
    setShares(totals);
    console.log(totals);

    setTotalShares(Array.isArray(shares) ? shares.reduce((accumulator, item) => accumulator + item.total, 0) : 0);

    const grantData = data.map(plan => ({
      ...plan,
      transactions: plan.transactions.filter(
        transaction =>
          transaction.type === "Grant"
      )
    }));

    const grantTotal = grantData.map(plan => {
      const total = plan.transactions.reduce((acc, transaction) => {
        if (transaction.type === "Grant") {
          return acc + transaction.amount;
        } else {
          return acc; // Diğer transaction tipleri için toplamı değiştirme
        }
      }, 0);
    
      return {
        planId: plan.id,
        poolName: plan.poolName,
        total,
      };
    });

    setGrants(grantTotal);
    setTotalGrant(Array.isArray(grantTotal) ? grantTotal.reduce((accumulator, item) => accumulator + item.total, 0) : 0)
    if(Array.isArray(shares)){
      const combinedTotals = shares.map(share => {
        const matchingGrant = grantTotal.find(grant => grant.planId === share.planId);
        return {
          planId: share.planId,
          poolName: share.poolName,
          total: share.total,
          totalGrant: matchingGrant ? matchingGrant.total : 0,
        };
      });
      setCombined(combinedTotals);
      console.log(combinedTotals);
    }

  },[data])


  return (


    <div>
        <div className="Header">
            <div className="nav-link-arrow-div" onClick={ChangeVisibilityMenu}>
                <AnimatePresence>
                <motion.div
                    initial={false}
                    animate={{ rotate: isOpen ? 180 : 0 }} // Döndürme animasyonu
                    transition={{ duration: 0.3 }}
                >
                    <FontAwesomeIcon
                    icon={faChevronDown}
                    className="HeaderArrow"
                    />
                </motion.div>
                </AnimatePresence>
            </div>
            <div  className="FirstColumn">Plans</div>
            <div style={{marginLeft: "0vw", width: "100px"}} className="SecondColumn">{totalShares}</div>
            <div style={{marginLeft: "8vw", width: "100px"}} className="SecondColumn">{totalGrant}</div>
            <div style={{marginLeft: "8vw", width: "100px"}} className="SecondColumn">{totalGrant / totalShares * 100} %</div>
            <div style={{marginLeft: "8vw", width: "100px"}} className="SecondColumn">{(totalShares - totalGrant) / totalShares * 100} %</div>
            <div style={{marginLeft: "10vw", width: "100px"}} className="SecondColumn">0</div>
        </div>
        <AnimatePresence>
                        {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          {combined.map((item,index) => {

                            return(
                              <div key={index}>
                                <div className="Tablo">
                                  <div className="FirstColumnTablo">{item.poolName}</div>
                                    <div style={{marginLeft: "0vw", width: "100px"}} className="SecondColumn">{item.total}</div>
                                    <div style={{marginLeft: "8vw", width: "100px"}} className="SecondColumn">{item.totalGrant}</div>
                                    <div style={{marginLeft: "8vw", width: "100px"}} className="SecondColumn">{item.totalGrant / item.total * 100} %</div>
                                    <div style={{marginLeft: "8vw", width: "100px"}} className="SecondColumn">{(item.total - item.totalGrant) / item.total * 100} %</div>
                                    <div style={{marginLeft: "10vw", width: "100px"}} className="SecondColumn">0</div>
                                </div>
                              </div>
                            );
                            })}
                        </motion.div>
                        )}
                </AnimatePresence>
    </div>
  )
}

export default EquityPlansList