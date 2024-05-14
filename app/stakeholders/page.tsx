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

  const closeModal = () => {
    setOpenModal(false);
  };

  const ButtonClick = (type: ModalType) => {
    setType(type);
    setOpenModal(true);
  };

  return (
    <div className="stakeholders-main-div">
      <Modal id="ModalSign" open={openModal} onClose={closeModal}>
        <Box sx={{ ...style }}>
          <ModalBox Type={Type} CloseModal={closeModal} />
        </Box>
      </Modal>
      <ul className="nav nav-tabs" role="tablist">
        <li role="presentation">
          <button type="button" role="tab" className="nav-link active">
            Stakeholders list
          </button>
        </li>
        <li role="presentation">
          <button type="button" role="tab" className="nav-link">
            Change request
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
                  <tbody>
                    <tr id="stakeholder-42065-row">
                      <td style={{ maxWidth: 300 }}>
                        <div className="d-flex px-2 py-1 text-truncate">
                          <img
                            className="border rounded-2 me-2 d-none d-sm-block d-sm-none "
                            loading="lazy"
                            src=""
                            style={{ width: 40, height: 40 }}
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="grey"
                            className="lucide lucide-user d-none d-sm-block me-2 p-2 border rounded-2"
                          >
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                          <div className="my-auto text-sm">
                            <span style={{ color: "black" }}>John Doe</span>
                          </div>
                        </div>
                      </td>
                      <td className="text-xs">Person</td>
                      <td className="align-middle text-center text-xs">
                        Founders
                      </td>
                      <td className="align-middle text-center text-secondary text-xs font-weight-bold">
                        <span className="text-secondary text-xs font-weight-bold">
                          john@sarge.com
                        </span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-bold">
                          <button className="btn btn-secondary btn-sm my-auto">
                            Invite
                          </button>
                          <p className="mb-0 text-xs mt-2">
                            Last invited on 2024-03-29
                          </p>
                        </span>
                      </td>
                      <td className="align-middle">
                        <span>
                          <a
                            className="text-secondary font-weight-bold btn btn-link btn-s mb-0"
                            href="/app/sarge-tr/my-equity?stakeholder=42065"
                            target="_blank"
                          >
                            <FontAwesomeIcon
                              icon={faEye}
                              className="stakeholder-icon"
                            />
                          </a>
                        </span>
                        <button className="text-secondary font-weight-bold btn btn-link btn-s mb-0">
                          <FontAwesomeIcon
                            icon={faEdit}
                            className="stakeholder-icon"
                          />
                        </button>
                        <button className="text-secondary font-weight-bold btn btn-link btn-s mb-0">
                          <FontAwesomeIcon
                            icon={faTrash}
                            className="stakeholder-icon"
                          />
                        </button>
                      </td>
                    </tr>
                  </tbody>
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
