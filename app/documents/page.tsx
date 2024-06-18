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
        </ul>
        <ul className="section-2">
        <div className="tab-content" >
          <div className="cmj-hq-main" >
            <FontAwesomeIcon className="cmj-hq" style={{width: 16, height: 16, overflow: "visible"}} icon={faHouse} />
            <span style={{verticalAlign: "middle"}}>CMJ</span>
          </div>
        <div className="right-section">
          <div className="row" >
          <div className="bar" >
          <FontAwesomeIcon className="bar-icon" style={{width: 16, height: 16, overflow: "visible"}} icon={faHouse} />
          </div >
          <div className="icon-row" >
          <FontAwesomeIcon className="icon" style={{width: 16, height: 16}} icon={faFolderPlus} />
          <FontAwesomeIcon className="icon" style={{width: 16, height: 16}} icon={faPlus} onClick={AddDocument} />
          <input id="Sec" type="file" style={{display: "none"}} onChange={upload} />
          </div>

          <table>
            <tr>
              <td style={{width: "50%"}}>Name</td>
              <td style={{width: "20%"}}>Date</td>
            </tr>
            {documents.map((item,index) => (
              <tr key={index}>
                <td style={{paddingTop: '20px', fontSize: '14px'}} >{item.DocumentName}</td>
                <td style={{paddingTop: '20px', fontSize: '14px'}} >{new Date(item.Date).toLocaleDateString('en-EN')}</td>
              </tr>
          ))}


          </table>          
          </div>
          </div>
        </div>
        </ul>
      </section>
    </>
  )
}

export default Documents
