"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react'
import { faCaretDown, faCaretUp, faPenToSquare, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";


interface props {
    data: Array<any>;
}
const List:React.FC<props> = ({data}) => {
  return (<div>

    {data.map((group) => {
        const [isLogDropdownOpen, setIsLogDropdownOpen] = useState(false);

        
        const changeLogDropdown = () => {
            setIsLogDropdownOpen(!isLogDropdownOpen);
        };

        return(
            <div key={group.date} className={isLogDropdownOpen ? "card-3-2" : "card-3"}>
                <div
                    onClick={changeLogDropdown}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        cursor: "pointer",
                    }}
                >
                    {isLogDropdownOpen ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}
                    <span style={{ marginLeft: "0.5vw", fontSize: "17px", fontWeight: "500" }}>
                        {group.date}
                    </span>
                    <div className="green-text">
                        {group.users[1][0].user.email}
                    </div>
                </div>
                {isLogDropdownOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="log-list-dropdown">
                            {group.users[1].map((item) => (
                                <ul key={item.name}>
                                    <div className="log-list">
                                        <div style={{ width: "250px" }}>
                                            <div className="log-list-item-type">{item.type}</div>
                                        </div>
                                        <div style={{ width: "300px", marginBottom: "10px" }}>
                                            <div className="log-list-item">{item.page}</div>
                                        </div>
                                        <div style={{ width: "265px" }}>
                                            <div className="log-list-item">{item.collaborator}</div>
                                        </div>
                                    </div>
                                    <div className="underline"></div>
                                </ul>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        );
    })}
    </div>


  )
}

export default List