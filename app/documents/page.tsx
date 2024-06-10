"use client";
import "./documents.css";
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus, faHouse, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";


const Documents = () => {
  const [documents, setDocuments] = useState([]);

  const upload = (e) => {
    const fullPath = e.target.value;
    const lastIndex = Math.max(fullPath.lastIndexOf('\\'), fullPath.lastIndexOf('/'));
    const fileName = fullPath.substring(lastIndex + 1);
    async function saveData(){

      const submitData = {
        name: fileName
      };
  
        try {
            const response = await fetch('/api/documents', {
                method: 'POST',
                body: JSON.stringify(submitData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
  
            if (response.ok) {
                window.location.href = "/documents";
            } else {
                console.log("Failed");
            }
        } catch (error) {
            console.log(error);
        }
  
    }

    saveData()

  }

  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: 'numeric', 
    minute: 'numeric'
  };

  const AddDocument = () => {
    document.getElementById('Sec')?.click();
  }

  useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/documents/get');
                const data = await response.json();
                setDocuments(data);
                console.log(data);

            } catch (error) {
                console.error('Veri getirme hatası:', error);
            }
        }

        fetchData();
  },[])
  return (
    <>
      <section className="section">
        <ul className="navbar" >
          <Link className="link" href="/documents">Documents</Link>
          <Link className="link" href="/signatures" >Signatures</Link>
          <Link className="link" href="/templates">Templates</Link>
        </ul>
        <ul className="section-2">
        <div className="tab-content" >
          <div className="cmj-hq-main" >
          <FontAwesomeIcon className="cmj-hq"  icon={faHouse} />
          CMJ HQ
          </div>
        <div className="right-section">
          <div className="row" >
          <div className="bar" >
          <FontAwesomeIcon className="bar-icon" icon={faHouse} />
          </div >
          <div className="icon-row" >
          <FontAwesomeIcon className="icon" icon={faFolderPlus} />
          <FontAwesomeIcon className="icon" icon={faPlus} onClick={AddDocument} />
          <input id="Sec" type="file" style={{display: "none"}} onChange={upload} />
          </div>
          <ul className="navbar-2">
            <li style={{paddingTop: '20px', fontSize: '14px'}} >Name</li>
            <li style={{paddingTop: '20px', paddingLeft: '30vw', fontSize: '14px'}} >Date</li>
          </ul>
          {documents.map((item,index) => (
            <ul className="navbar-3" key={index}>
              <li style={{paddingTop: '20px', fontSize: '14px'}} >{item.DocumentName}</li>
              <li style={{paddingTop: '20px', paddingLeft: '27vw', fontSize: '14px'}} >{new Date(item.Date).toLocaleDateString('tr-TR', options)}</li>
          </ul>
          ))}
          
          <div className="section-right-bottom" >
            <div className="drop-file">
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
