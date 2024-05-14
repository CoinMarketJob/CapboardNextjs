"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./GeneralFormDropdown.css";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

interface GeneralFormProps {
  name: string;
}
const GeneralFormDropdown: React.FC<GeneralFormProps> = ({ name }) => {
  const [isFormDropdownOpen, setIsFormDropdownOpen] = useState(false);

  const ChangeFormDropdown = () => {
    setIsFormDropdownOpen(!isFormDropdownOpen);
  };
  return (
    <div>
      <a className="GF-drop-down-a" onClick={ChangeFormDropdown}>
        <AnimatePresence>
          <motion.div
            initial={false}
            animate={{ rotate: isFormDropdownOpen ? 90 : 0 }} // Döndürme animasyonu
            transition={{ duration: 0.3 }}
          >
            <FontAwesomeIcon
              icon={faChevronDown}
              className="nav-link-icon nav-link-arrow-icon drop-down-arrow"
            />
          </motion.div>
        </AnimatePresence>
        {name}
      </a>

      <div className="GFDropdown-address">Deneme</div>
    </div>
  );
};

export default GeneralFormDropdown;
