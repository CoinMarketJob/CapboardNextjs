import "./documents.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus, faHouse, faPlus } from "@fortawesome/free-solid-svg-icons";

const Documents = () => {
  return (
    <>
      <section className="section">
        <ul className="navbar" >
          1
        </ul>
        <ul className="section-2">
        <div className="tab-content" >
          <FontAwesomeIcon icon={faHouse} /> CMJ HQ
        <div className="right-section">
          <div className="row" >
          <div className="bar" >
          <FontAwesomeIcon className="bar-icon" icon={faHouse} />
          </div >
          <div className="icon-row" >
          <FontAwesomeIcon className="icon" icon={faFolderPlus} />
          <FontAwesomeIcon className="icon" icon={faPlus} />
          </div>
          <ul className="navbar-2">
            <li style={{paddingTop: '20px', fontSize: '14px'}} >Name</li>
            <li style={{paddingTop: '20px', paddingLeft: '30vw', fontSize: '14px'}} >Date</li>
            <li style={{paddingTop: '20px', paddingLeft: '10vw', fontSize: '14px'}} >Size</li>
          </ul>
          <div className="section-right-bottom" >
            <div className="drop-file"
                  style={{border: '2px dashed gray',
                  padding: '20px',
                  textAlign: 'center',}} >
              Drop files or folders from your computer here!
            </div>
          </div>
          </div>
          </div>
        </div>
        </ul>
      </section>
    </>
  )
}

export default Documents