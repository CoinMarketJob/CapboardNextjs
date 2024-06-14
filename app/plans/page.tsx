"use client"
import React, {useEffect, useState} from 'react'
import "./plan.css"
import PlanList from '../components/Plan/PlanList'
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ModalBox from './ModalBox';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "0px",
    borderRadius: "18px",
    boxShadow: 24,
    width: "60%"
};

const page = () => {
    const [openModal, setOpenModal] = useState(false);
    const [plan, setPlan] = useState([]);

    const closeModal = () => {
        setOpenModal(false);
    };

    const changeModalState = () => {
        setOpenModal(!openModal);
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/plans/get');
                const data = await response.json();
                setPlan(data);
                console.log(data);

            } catch (error) {
                console.error('Veri getirme hatası:', error);
            }
        }

        fetchData();
    }, []);


  return (
    <div className="cardPadding">
        <Modal id="ModalSign" open={openModal} onClose={closeModal}>
            <Box sx={{ ...style }}>
                <ModalBox CloseModal={closeModal} />
            </Box>
        </Modal>

        <div className="me-4 rounded-1 card">
            <div className="pb-0 card-header">
                <div className="justify-content-between row">
                    <div className="col-12 col-md-auto d-flex  mt-1 col">
                        <h5 className="mb-md-0">Equity plans</h5>
                    </div>
                    <div className="col-12 col-md-auto text-end col">
                        <button type="button" 
                        className="btn-secondary w-100 rounded-1 btn btn-primary" style={{color: "black"}} onClick={changeModalState}>Create your Equity Plan</button>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <PlanList planData={plan}/>
            </div>
        </div>
    </div>
  )
}

export default page