"use client";
import { ReactElement } from "react";
import "./modals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

interface ModalBoxProps {
    CloseModal: () => void;
    Name: string;
    Children: ReactElement;
}

const Modals: React.FC<ModalBoxProps> = ({ Name, CloseModal, Children }) => {
    return (
        <div className="modal-content">
            <h2>{Name}</h2>
            <FontAwesomeIcon className="close-modal" onClick={CloseModal} icon={faX} />
            <div className="modal-children">
                {Children}
            </div>
        </div>
    );
};

export default Modals;
