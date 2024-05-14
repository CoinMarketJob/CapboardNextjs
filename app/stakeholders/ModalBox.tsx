import GeneralFormDropdown from "../components/GeneralFormDropdown/generalFormDropdown";
import "./ModalBox.css";

interface ModalBoxProps {
  Type: number;
  CloseModal: void;
}
const ModalBox: React.FC<ModalBoxProps> = ({ Type, CloseModal }) => {
  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title font-weight-normal">Stakeholder</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          onClick={CloseModal}
        ></button>
      </div>

      <div className="modal-body">
        <div
          id="basic-info"
          className="btn-group d-flex is-filled"
          role="group"
        >
          <input
            type="radio"
            className="btn-check"
            name="type"
            id="type-person"
            value="1"
            checked
          />
          <label className="btn btn-outline-primary">Person</label>

          <input
            type="radio"
            className="btn-check"
            name="type"
            id="type-entity"
            value="2"
          />
          <label className="btn btn-outline-primary">Entity</label>
        </div>

        <div className="form-group input-group-outline mb-3">
          <label className="form-label" data-person-child="">
            Name *
          </label>
          <label
            className="form-label"
            data-entity-child=""
            style={{ display: "none" }}
          >
            Corporate name *
          </label>
          <div className="input-group">
            <input
              name="name"
              placeholder="John"
              type="text"
              className="form-control border-end"
            />
            <input
              name="surnames"
              data-person-child=""
              placeholder="Smith"
              type="text"
              className="form-control ps-2 border-start"
            />
          </div>
        </div>
        <div className="form-group input-group-outline mb-3">
          <label className="form-label"> Primary contact email </label>
          <div className="input-group mb-3">
            <input
              name="email"
              placeholder="johnsmith@company.com"
              type="email"
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group input-group-outline mb-3">
          <label className="form-label">Group</label>
          <input
            name="group"
            list="group-name"
            className="form-control"
            placeholder="Group"
          />
          <datalist id="group-name">
            <option value="Board members">Board members</option>
            <option value="Founders">Founders</option>
            <option value="Employees">Employees</option>
            <option value="Investors">Investors</option>
            <option value="External Advisors">External Advisors</option>
            <option value="Alumni">Alumni</option>
          </datalist>
        </div>
        <GeneralFormDropdown name="Address" />
      </div>

      <div className="modal-footer">
        <button
          type="button"
          className="btn bg-gradient-secondary"
          data-bs-dismiss="modal"
          onClick={CloseModal}
        >
          Close
        </button>
        <button
          type="submit"
          form="stakeholders-form"
          className="btn bg-gradient-primary"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ModalBox;
