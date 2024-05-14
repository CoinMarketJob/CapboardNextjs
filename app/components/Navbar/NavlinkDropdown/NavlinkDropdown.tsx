"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  IconDefinition,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import "./NavlinkDropdown.css";
import DropDownList from "./DropdownList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";

interface NavlinkDropdownProps {
  name: string;
  icon: IconDefinition;
  Navlinks: Array<DropDownList>;
}
const NavlinkDropdown: React.FC<NavlinkDropdownProps> = ({
  name,
  icon,
  Navlinks,
}) => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Navlinks.map((item) => {
      if (item.href == pathname) {
        setIsOpen(true);
      }
    });
  }, []);

  const ChangeVisibilityMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="nav-link-drop-down-li">
      <div className="nav-link-drop-down-li-div">
        <a className="nav-link-drop-down-a" onClick={ChangeVisibilityMenu}>
          <FontAwesomeIcon icon={icon} className="nav-link-drop-down-icon" />
          <span className="nav-link-drop-text">{name} </span>
          <div className="nav-link-arrow-div">
            <AnimatePresence>
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 180 : 0 }} // Döndürme animasyonu
                transition={{ duration: 0.3 }}
              >
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="nav-link-icon nav-link-arrow-icon"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </a>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div id="drop-menu" className="nav-link-drop-down-li-drop-menu">
              <ul className="nav-link-drop-down-bottom-ul">
                {Navlinks.map((Navlink) => (
                  <li
                    key={Navlink.name}
                    className="nav-link-drop-down-bottom-li"
                  >
                    <a href={Navlink.href} className="nav-link-a">
                      <FontAwesomeIcon
                        icon={Navlink.icon}
                        className="nav-link-icon"
                      />
                      <span className="nav-link-text">{Navlink.name} </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default NavlinkDropdown;
