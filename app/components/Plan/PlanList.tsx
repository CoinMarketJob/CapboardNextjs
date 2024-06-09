"use client"
import React, {useState} from 'react'
import './PlanList.css'
import { motion, AnimatePresence } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faChevronDown,
  faEllipsisVertical
} from "@fortawesome/free-solid-svg-icons";

interface PlanListProps {
    planData : Array<any>;
}

const PlanList: React.FC<PlanListProps> = ({ planData }) => {


  

  return (
    <div>
        {planData.map((item,index) => {
            
            const [isOpen, setIsOpen] = useState(true);
            const transactions = item.transactions.filter(x=> x.type == "Grant");
            const granted = transactions.reduce((acc,transaction) => acc + transaction.amount, 0);
            const grantTransaction = transactions.find(x => x.type === "Grant");
            const duration = grantTransaction != undefined ? grantTransaction.duration : 0;
            const interval = grantTransaction != undefined ? grantTransaction.vestEveryDate : 0;
            const cliff = grantTransaction != undefined ? grantTransaction.cliff : 0;


            const ChangeVisibilityMenu = () => {
                setIsOpen(!isOpen);
              };

            return (
                <div key={index}>
                    <div className="HeaderList">
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
                        <div className="NameHeader" onClick={ChangeVisibilityMenu}>{item.planName} - {item.grantType}</div>
                        <div className="MenuList">
                            <FontAwesomeIcon
                                icon={faEllipsisVertical}
                                className="HeaderArrow"
                                />
                        </div>
                    </div>
                    <AnimatePresence>
                        {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                        <div className="px-4 accordion-collapse collapse show">
                                <div className="table-responsive">
                                    <table className="table table-sm">
                                        <thead className="text-xxs text-secondary">
                                            <tr>
                                                <th scope="col">Pool</th>
                                                <th scope="col"></th>
                                                <th scope="col">Granted</th>
                                                <th scope="col">Duration</th>
                                                <th scope="col">Interval</th>
                                                <th scope="col">Cliff</th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="align-middle">
                                                    <a>{item.pool.poolName}</a>
                                                </td>
                                                <td className="align-middle">
                                                    <div className="ms-2"></div>
                                                </td>
                                                <td className="align-middle"><span>{granted}</span></td>
                                                <td className="align-middle"><span>{duration}</span></td>
                                                <td className="align-middle"><span>{interval}</span></td>
                                                <td className="align-middle"><span>{cliff}</span></td>
                                                <td className="align-middle text-end">
                                                    <a className="text-primary text-xs text-uppercase me-2">
                                                        <span className="me-2">View grants</span>
                                                    </a>
                                                </td>
                                                <td className="align-middle text-end">
                                                    <a className="text-primary text-xs text-uppercase text-bold">View transactions</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div> 
            
                        </motion.div>
                        )}
                </AnimatePresence>
              </div>
            );
        })}

        
    </div>
  )
}

export default PlanList