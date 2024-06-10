'use client';
import React, { useState } from 'react';
import './ModalBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import ModalButton from '../components/ModalButtons/modalbuttons';
import { Modal } from '@mui/material';
import Modals from '../components/Modals/modals';

// Dummy components for each modal type (replace with actual components)
const FinancingRound = () => <div>Financing Round Component</div>;
const Valuation = () => <div>Valuation Component</div>;
const StockSplit = () => <div>Stock Split Component</div>;
const ConvertibleLoan = () => <div>Convertible Loan Component</div>;
const IssueShares = () => <div>Issue Shares Component</div>;
const DecreaseShares = () => <div>Decrease Shares Component</div>;
const Secondary = () => <div>Secondary Component</div>;
const Payout = () => <div>Payout Component</div>;
const AddPool = () => <div>Add Pool Component</div>;
const AddPlan = () => <div>Add Plan Component</div>;
const PoolIncrease = () => <div>Pool Increase Component</div>;
const PoolDecrease = () => <div>Pool Decrease Component</div>;
const SingleGrant = () => <div>Single Grant Component</div>;

const modalComponents: { [key: string]: React.FC } = {
    'Financing Round': FinancingRound,
    'Valuation': Valuation,
    'Stock Split': StockSplit,
    'Convertible Loan': ConvertibleLoan,
    'Issue Shares': IssueShares,
    'Decrease Shares': DecreaseShares,
    'Secondary': Secondary,
    'Payout': Payout,
    'ADD POOL': AddPool,
    'ADD PLAN': AddPlan,
    'POOL INCREASE': PoolIncrease,
    'POOL DECREASE': PoolDecrease,
    'SINGLE GRANT': SingleGrant,
};

const ModalBoxT: React.FC<{ CloseModal: () => void }> = ({ CloseModal }) => {
    const [openModal, setOpenModal] = useState<string | null>(null);

    const handleOpenModal = (modalType: string) => {
        setOpenModal(modalType);
    };

    const handleCloseModal = () => {
        setOpenModal(null);
    };

    const ModalContent = openModal ? modalComponents[openModal] : null;

    return (
        <div className="modal-content">
            <h2 style={{ transform: 'translateX(-37.5%)' }} className="title">Add Transactions</h2>
            <FontAwesomeIcon className="close-modal" onClick={CloseModal} icon={faX} />
            <div className="underline"></div>
            <span style={{ transform: 'translateX(-39%)', marginTop: '10px' }} className="title-2">Stock transactions</span>
            <div style={{ display: 'flex', flexDirection: 'row', padding: '0%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', padding: '0%' }}>
                    <ModalButton Title="Financing Round" Span="Add a capital increase with valuation, shares, and pools. You can add or edit individual transactions later." onClick={() => handleOpenModal('Financing Round')} />
                    <ModalButton Title="Valuation" Span="Update your company’s post-money valuation." onClick={() => handleOpenModal('Valuation')} />
                    <ModalButton Title="Stock Split" Span="" onClick={() => handleOpenModal('Stock Split')} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', padding: '0%' }}>
                    <ModalButton Title="Convertible Loan" Span="Add a convertible loan/SAFE with optional parameters like a cap" onClick={() => handleOpenModal('Convertible Loan')} />
                    <ModalButton Title="Issue Shares" Span="Issue new shares and assign them to a stakeholder." onClick={() => handleOpenModal('Issue Shares')} />
                    <ModalButton Title="Decrease Shares" Span="Reduce the amount of shares that a stakeholder has" onClick={() => handleOpenModal('Decrease Shares')} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', padding: '0%', marginRight: '1rem' }}>
                    <ModalButton Title="Secondary" Span="Add a share transfer between two stakeholders" onClick={() => handleOpenModal('Secondary')} />
                    <ModalButton Title="Payout" Span="Track payouts and other dividends. It doesn’t impact the cap table." onClick={() => handleOpenModal('Payout')} />
                </div>
            </div>
            <h2 style={{ transform: 'translateX(-36%)' }} className="title-2">Equity Plan Transaction</h2>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ display: 'flex', flexDirection: 'column', padding: '0%' }}>
                    <ModalButton Title="ADD POOL" Span="Add a pool reserved for equity plans or other incentives, which will show up in the fully-diluted cap table" onClick={() => handleOpenModal('ADD POOL')} />
                    <ModalButton Title="ADD PLAN" Span="Create an equity plan for your key employees." onClick={() => handleOpenModal('ADD PLAN')} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', padding: '0%' }}>
                    <ModalButton Title="POOL INCREASE" Span="Add new authorized shares to an existing pool" onClick={() => handleOpenModal('POOL INCREASE')} />
                    <ModalButton Title="POOL DECREASE" Span="Give back shares that were previously assigned to a pool." onClick={() => handleOpenModal('POOL DECREASE')} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', padding: '0%' }}>
                    <ModalButton Title="SINGLE GRANT" Span="Add a share transfer between two stakeholders" onClick={() => handleOpenModal('SINGLE GRANT')} />
                </div>
            </div>
            {openModal && (
                <Modal open={!!openModal} onClose={handleCloseModal}>
                    <Modals CloseModal={handleCloseModal} Name={openModal} Children={<div className="modal-inner-content">
                        {ModalContent && <ModalContent />}
                        <button onClick={handleCloseModal}>Close</button>
                    </div>} />
                </Modal>
            )}
        </div>
    );
};

export default ModalBoxT;
