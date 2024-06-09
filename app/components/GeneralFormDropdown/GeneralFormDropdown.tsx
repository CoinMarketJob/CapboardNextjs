"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./GeneralFormDropdown.css";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { transform } from "next/dist/build/swc";

interface GeneralFormProps {
  child: React.ReactNode;
  name: string;
}
const GeneralFormDropdown: React.FC<GeneralFormProps> = ({ name, child }) => {
  const [isFormDropdownOpen, setIsFormDropdownOpen] = useState(false);

  const ChangeFormDropdown = () => {
    setIsFormDropdownOpen(!isFormDropdownOpen);
  };
  return (
    <div style={{padding: 20}}>
      <a className="GF-drop-down-a" onClick={ChangeFormDropdown}>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="nav-link-icon nav-link-arrow-icon drop-down-arrow"
              style={isFormDropdownOpen ? {transform : "rotate(0deg)"} : {transform : "rotate(270deg)"}}
            />
        {name}
      </a>
      <AnimatePresence>
        {isFormDropdownOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div style={{padding: 15}}>
              {child}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GeneralFormDropdown;
