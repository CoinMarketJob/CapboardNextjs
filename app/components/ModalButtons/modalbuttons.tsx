'use client';
import React from 'react';
import './modalbuttons.css';

interface ModalButtonProps {
    Title: string;
    Span: string;
    onClick: () => void;
}

const ModalButton: React.FC<ModalButtonProps> = ({ Title, Span, onClick }) => {
    return (
        <button className="modal-button" onClick={onClick}>
            <h2 className="title">{Title}</h2>
            <span className="span">{Span}</span>
        </button>
    );
};

export default ModalButton;
