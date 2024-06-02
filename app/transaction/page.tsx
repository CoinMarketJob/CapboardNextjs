import './transaction.css'
import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";

const page = () => {
  return (
    <div>
        <section>
            <div className="card mb-5 card">
              <div className="pb-0 card-header">
                <div className="justify-content-between row">
                  <div className="col-12 col-md-auto col">
                    <h5 className="mb-md-0">Transactions</h5><p>Manage 1234's transactions.</p>
                  </div>
                  <div className="col-12 col-md-auto d-flex justify-content-end align-items-center col">
                    <button type="button" data-cy="add_transaction" className="bg-gradient-primary w-100 btn btn-primary">
                      <FontAwesomeIcon icon={faPlus} />Add Transaction</button>
                  </div>
                </div>
              </div>

<div className="card-body">
  <form method="post" className="sc-gHbYXZ ipZjSO">
    <div className="row">
      <div className="col-12 col-md-4 col">
        <div className="sc-ktEKTO jttMza">
          <label className="form-label">Stakeholder</label>
          <div className="sc-ktEKTO jttMza css-b62m3t-container">
            <span id="react-select-3-live-region" className="css-7pg0cj-a11yText"></span>
            <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText"></span>
            <div className="rs__control css-13cymwt-control">
              <div className="rs__value-container rs__value-container--is-multi css-hlgwow">
                <div className="rs__placeholder css-1jqq78o-placeholder" id="react-select-3-placeholder">
                  <small className="text-truncate opacity-5">Select...</small>
                  </div>
                  <div className="rs__input-container css-19bb58m" data-value="">
                    <input className="rs__input" id="react-select-3-input" type="text" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" aria-describedby="react-select-3-placeholder" value="" />
                      </div>
                      </div>
                      <div className="rs__indicators css-1wy0on6">
                        <span className="rs__indicator-separator css-1u9des2-indicatorSeparator"></span>
                        <div className="rs__indicator rs__dropdown-indicator css-1xc3v61-indicatorContainer" aria-hidden="true">
                          <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg">
                            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                            </svg>
                            </div>
                            </div>
                            </div>
                            <div>
                              <input name="stakeholders" type="hidden" value="" className="inputStakeholder"/>
                                </div>
                                </div>
                                <input type="hidden" className="form-control" className="inputStakeholder" />
                                  </div>
                                  </div>
                                  <div className="col-12 col-md-4 col">
                                    <div className="sc-ktEKTO jttMza">
                                      <label className="form-label">Transaction type</label>
                                      <div className="sc-ktEKTO jttMza css-b62m3t-container">
                                        <span id="react-select-2-live-region" className="css-7pg0cj-a11yText">
                                          </span>
                                          <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText"></span>
                                          <div className="rs__control css-13cymwt-control">
                                            <div className="rs__value-container rs__value-container--is-multi css-hlgwow">
                                              <div className="rs__placeholder css-1jqq78o-placeholder" id="react-select-2-placeholder"><small className="text-truncate opacity-5">Select...</small>
                                              </div>
                                              <div className="rs__input-container css-19bb58m" data-value="">
                                                <input className="rs__input" id="react-select-2-input" type="text" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" aria-describedby="react-select-2-placeholder" value="" />
                                                </div>
                                                </div>
                                                <div className="rs__indicators css-1wy0on6">
                                                  <span className="rs__indicator-separator css-1u9des2-indicatorSeparator"></span>
                                                  <div className="rs__indicator rs__dropdown-indicator css-1xc3v61-indicatorContainer" aria-hidden="true">
                                                    <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg">
                                                      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
                                                      </div>
                                                      </div>
                                                      </div>
                                                      <div>
                                                        <input name="types" type="hidden" value="" />
                                                        </div>
                                                        </div>
                                                        <input type="hidden" className="form-control" />
                                                        </div>
                                                        </div>
                                                        <div className="col-12 col-md-2 col">
                                                          <div className="position-relative">
                                                            <label className="form-label">Date lower than</label>
                                                            <input name="date" type="date" className="form-control" value="" />
                                                            </div>
                                                            </div>
                                                            <div className="col-12 col-md-2 col">
                                                              <label className="opacity-0 form-label">-</label>
                                                              <button type="submit" className="w-100 search-button btn btn-secondary">
                                                              <FontAwesomeIcon icon={faSearch} />
                                                                </button>
                                                                </div>
                                                                </div>
                                                                </form>
                                                                </div>



            </div>
        </section>
    </div>
  )
}

export default page