'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './PoolFormModal.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

interface Props {
    isOpen: boolean;
    type: string;
    editId: number;
    onClose: () => void;
    onSave: (pool: PoolState) => Promise<void>;
}

interface PoolState {
    poolName: string;
    amount: string;
    typeamount: string;
    date: string;
    shareClass: string;
    internalNote: string;
    documents: File | null;
}

const PoolFormModal: React.FC<Props> = ({ isOpen, onClose, onSave, type, editId }) => {
    const router = useRouter();
    const [ShareClass, setShareClass] = useState([]);

    const [pool, setPool] = useState<PoolState>({
        poolName: '',
        amount: '',
        typeamount: 'shares',
        date: '',
        shareClass: 'common',
        internalNote: '',
        documents: null,
    });

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch('/api/shareclasses/get');
            const data = await response.json();
            setShareClass(data);
            setPool((prevPool) => ({
                ...prevPool,
                shareClass: data[0].id,
            }));
            console.log(data);
          } catch (error) {
            console.error('Veri getirme hatası:', error);
          }
        }
      
        fetchData();
      }, [isOpen]);

    if (!isOpen) return null;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setPool((prevPool) => ({
            ...prevPool,
            [id]: value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setPool((prevPool) => ({
            ...prevPool,
            documents: file,
        }));
    };

    const handleSave = async () => {
        if(type == "PoolIncrease" || type  == "PoolDecrease") {
            const submitData = {
                grantsAmount: pool.amount,
                date: pool.date,
                Type: type,
                poolId: editId,
                note: pool.internalNote
            };
    
            try {
                const response = await fetch('/api/pool/edit', {
                    method: 'POST',
                    body: JSON.stringify(submitData),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
    
                if (response.ok) {
                    window.location.href = "/pool";
                } else {
                    console.log("Failed");
                }
            } catch (error) {
                console.log(error);
            }
        }else{
            await onSave(pool);
        }
        router.push('/pool'); // Yönlendirmek istediğiniz sayfanın yolunu belirtin
    };

     

    return (
        <div className="modalOverlayPool">
            <div className="modalPool">
                <button className="closeButtonPool" onClick={onClose}>×</button>
                <h3>Add pool</h3>
                <form>
                    <div className="formContainer">
                        <div className="formGroupPool">
                            <label htmlFor="poolName">Pool Name</label>
                            <input
                                type="text"
                                id="poolName"
                                placeholder="IT Phantoms, Options pool, ..."
                                value={pool.poolName}
                                onChange={handleInputChange}
                            />
                        </div>                        
                        <div className="formGroupPool amount">
                            <label htmlFor="amount">Amount for grants</label>
                            <div className="amountWrapper">
                                <input
                                    type="text"
                                    id="amount"
                                    className="amountoptions"
                                    placeholder="Amount"
                                    value={pool.amount}
                                    onChange={handleInputChange}
                                />
                                <select className="amountoptions" id="typeamount" value={pool.typeamount} onChange={handleInputChange}>
                                    <option value="shares">Shares</option>
                                    <option value="options">%</option>
                                </select>
                            </div>
                        </div>
                        <div className="formGroupPool">
                            <label htmlFor="date">Date</label>
                            <input type="date" id="date" value={pool.date} onChange={handleInputChange} />
                        </div>
                        <div className="formGroupPool">
                            <label htmlFor="shareClass">Underlying share class</label>
                            <select id="shareClass" value={pool.shareClass} onChange={handleInputChange}>
                                {ShareClass.map((item,index) => (
                                    <option key={index} value={item.id}>{item.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="formGroupPool">
                            <label htmlFor="internalNote">Internal Note</label>
                            <textarea id="internalNote" value={pool.internalNote} onChange={handleInputChange} />
                        </div>
                        <div className="formGroupPool">
                            <label htmlFor="UploadButton">Documents</label>
                            <label htmlFor="fileUpload" className="file-upload-button">
                                <FontAwesomeIcon icon={faUpload} />
                            </label>
                            <input type="file" id="fileUpload" style={{ display: 'none' }} onChange={handleFileChange} />
                        </div>
                    </div>
                    <div className="formActionsPool">
                        <button type="button" onClick={onClose} className="saveButtonPool">CLOSE</button>
                        <button type="button" onClick={handleSave} className="saveButtonPool">SAVE</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PoolFormModal;
