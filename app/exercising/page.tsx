"use client"
import React , {useEffect , useState} from 'react'
import './page.css'

const page = () => {
  const [exercised, setExercised] = useState([]);

  useEffect(() => {
    async function fetchData() {
        try {
            const response = await fetch('/api/exercise/get');
            const data = await response.json();
            console.log(data);
            setExercised(data);
        } catch (error) {
            console.error('Veri getirme hatası:', error);
        }
    }

    fetchData();
}, []);

  return (
    <div>
      <div className="my-4 rounded-1 card">
        <div className="card-body">
          <div className="sc-YtoFE dwYuRS table-responsive">
            <table className="table-sm table table-hover">
              <thead className="text-xxs text-secondary">
                <tr>
                  <th scope="col" className="col-2"></th>
                  <th className="text-uppercase">Employee name</th>
                  <th className="text-uppercase">Requested date</th>
                  <th className="text-uppercase">Requested amount</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  exercised.map((item,index) => (
                    <tr key={index} className="sc-dlUsjx bSlXAu">
                      <td className="align-middle">
                        <div className="mx-3">
                          <span className="badge bg-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" 
                              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
                              stroke-linejoin="round" className="lucide lucide-check-check ">
                                <path d="M18 6 7 17l-5-5"></path>
                                <path d="m22 10-7.5 7.5L13 16"></path>
                            </svg>Confirmed</span>
                        </div>
                      </td>
                      <td className="align-middle">{item.transaction.stakeholder.name}</td>
                      <td className="align-middle">{new Date(item.date).toLocaleDateString("en-EN")}</td>
                      <td className="align-middle"><span>{item.transaction.amount}</span></td>
                      <td className="align-middle text-end">
                        <div className="me-3 d-inline-block">
                        </div>
                      </td>
                    </tr>
                  ))
                }               

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page