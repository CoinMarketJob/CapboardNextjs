"use client"
import React, {useState ,useEffect} from 'react'
import './meeting.css'
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
    width:"40%",
}

const page = () => {
  const [modal, setModal] = useState(false);
  const [meetings, setMeetings] = useState([]);

  const changeModalVisibility = () => {
    setModal(!modal);
  }

  const closeModal = () => {
    setModal(false);
  }

  useEffect(() => {
      async function fetchData() {
          try {
              const response = await fetch('/api/meeting/get');
              const data = await response.json();
              console.log(data);
              setMeetings(data);

          } catch (error) {
              console.error('Veri getirme hatası:', error);
          }
      }

      fetchData();
  },[])

  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: 'numeric', 
    minute: 'numeric'
  };

  
  const Delete = (id: number) => {
    async function deletePool(id: number) {
        try {
            const response = await fetch(`/api/meeting/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                window.location.href = "/meetings";
            } else {
                console.error('Silme hatası:', response.statusText);
            }
        } catch (error) {
            console.error('Hata:', error);
        }
    }

    deletePool(id);
};

  return (
    <div>      
      <Modal id="ModalSign" open={modal} onClose={closeModal}>
            <Box sx={{ ...style }}>
                <ModalBox CloseModal={closeModal} />
            </Box>
      </Modal>
      <div className="card">
        <div className="px-0 pb-2 card-body">
          <div className="table-responsive">
            <table className="mb-0 table table-striped table-hover">
              <thead className="text-xxs text-secondary">
                <tr>
                  <th className="px-3 text-uppercase">Name</th>
                  <th className="px-3 text-uppercase">Date</th>
                  <th className="px-3 text-end">
                    <button type="button" 
                    className="bg-gradient-primary mb-0 btn btn-primary" onClick={changeModalVisibility}>New meeting</button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {meetings.map((item,index) => (
                  <tr key={index} className="cursor-pointer">
                    <td className="ps-3 align-middle">
                      <a target="_self">
                        <span className="text-sm">{item.name}</span>
                      </a>
                    </td>
                    <td className="text-sm align-middle">{new Date(item.date).toLocaleDateString('en-En', options)}</td>

                    <td className="text-end pe-3 align-middle">
                      <div className="d-inline-block">
                        <button type="button" className="text-secondary font-weight-bold text-xs btn btn-link mb-0 px-0" onClick={() => Delete(item.id)}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trash ">
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>

                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page