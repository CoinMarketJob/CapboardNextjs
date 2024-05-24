"use client";
import {useState,useEffect} from 'react';
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



const List = () => {
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch('/api/stakeholders/get');
            const data = await response.json();
            setData(data);
            console.log(data);
            setLoaded(true);
          } catch (error) {
            console.error('Veri getirme hatası:', error);
          }
        }
      
        fetchData();
      }, []); 

      const deleteData = (stakeholder_id:number) => {
        
        async function deleteStakeholder(id:number) {

          try {
            const response = await fetch(`/api/stakeholders/${id}`, {
              method: 'DELETE',
            });
        
            if (response.ok) {
              window.location.href="/stakeholders";              
            } else {
              console.error('Silme hatası:', response.statusText);
            }
          } catch (error) {
            console.error('Hata:', error);

          }

        }
       if(loaded) deleteStakeholder(stakeholder_id);
      }

    

    return(
        <tbody>
            {data.map((item, index) => (
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
                      <span style={{ color: "black" }}>{item.name+ " " + item.lastName}</span>
                    </div>
                  </div>
                </td>
                <td className="text-xs">{item.type == false ? "Person" : "Entity"}</td>
                <td className="align-middle text-center text-xs">
                  {item.group}
                </td>
                <td className="align-middle text-center text-secondary text-xs font-weight-bold">
                  <span className="text-secondary text-xs font-weight-bold">
                    {item.contactEmail}
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
                  <button className="text-secondary font-weight-bold btn btn-link btn-s mb-0" onClick={() => deleteData(item.id)}>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="stakeholder-icon"
                    />
                  </button>
                </td>
              </tr>
      ))}
        </tbody>
    )


}

export default List