"use client";
import { useState } from "react";
import "./page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faBook,
  faUsers,
  faPlus,
  faEye,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";


import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ModalBox from "./ModalBox";
import List from "../components/Stakeholders/List";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "0px",
  borderRadius: "18px",
  boxShadow: 24,
};
enum ModalType {
  Add,
  Import,
  Edit,
  Delete,
}

const Stakeholders = () => {
  const [openModal, setOpenModal] = useState(false);
  const [Type, setType] = useState(ModalType.Add);
  const [StakeholderId, setStakeholderId] = useState(0);

  const closeModal = () => {
    setOpenModal(false);
  };

  const ButtonClick = (type: ModalType) => {
    setStakeholderId(undefined);
    setType(type);
    setOpenModal(true);
  };

  const ShowFunction = (id:number) => {
    setStakeholderId(id);
    setOpenModal(true);
  };



  return (
    <div className="stakeholders-main-div">
      <Modal id="ModalSign" open={openModal} onClose={closeModal}>
        <Box sx={{ ...style }}>
          <ModalBox Type={Type} CloseModal={closeModal} StakeholderId={StakeholderId} />
        </Box>
      </Modal>
      <ul className="nav nav-tabs" role="tablist">
        <li role="presentation">
          <button type="button" role="tab" className="nav-link active">
            Stakeholders list
          </button>
        </li>
      </ul>

      <div className="tab-content-special">
        <div role="tabpanel" className="fade tab-pane active show">
          <div className="border-radius-top-start-0 card">
            <div className="pb-0 p-3 card-header">
              <div className="justify-content-between rowSpecial">
                <div className="col-12 col-md-auto d-flex align-items-center col">
                  <div>
                    <h5 className="mb-md-0">Stakeholders</h5>
                    <p>Manage stakeholders and employees of your company.</p>
                  </div>
                </div>

                <div className="col-12 col-md-auto text-end col">
                  <button
                    type="button"
                    className="w-100 w-sm-auto me-1 btn btn-secondary"
                  >
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      className="stakeholder-icon"
                    />
                  </button>

                  <a className="btn btn-secondary w-100 w-sm-auto me-1">
                    <FontAwesomeIcon
                      icon={faBook}
                      className="stakeholder-icon"
                    />
                  </a>
                  <button
                    type="button"
                    className="w-100 w-sm-auto me-1 btn btn-secondary btn-inline-flex"
                  >
                    <FontAwesomeIcon
                      icon={faUsers}
                      className="stakeholder-icon"
                    />
                    &nbsp;&nbsp;Import from CSV
                  </button>
                  <button
                    type="button"
                    className="bg-gradient-primary w-100 w-sm-auto btn btn-primary  btn-inline-flex"
                    onClick={() => ButtonClick(ModalType.Add)}
                  >
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="stakeholder-icon white-icon"
                    />
                    &nbsp;&nbsp;Add Stakeholder
                  </button>
                </div>
              </div>

              <div className="rowSpecial">
                <div className="col-lg-4 col-12">
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="gray"
                        className="lucide lucide-search "
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                    </span>
                    <input
                      placeholder="search"
                      type="text"
                      className="form-control search-input-stakeholder"
                    />
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="gray"
                        className="lucide lucide-x cursor-pointer"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-0 pb-2 card-body">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0 table-hover">
                  <thead>
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-3  pb-1">
                        Name
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 pb-1">
                        Type
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 pb-1">
                        Group
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 pb-1">
                        Email
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 pb-1">
                        Portfolio access
                        <i className="fa fa-info-circle text-muted ms-1"></i>
                      </th>
                      <th className="text-secondary opacity-7 pb-1"></th>
                    </tr>
                  </thead>
                  <List ShowFunction={ShowFunction} />
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stakeholders;
