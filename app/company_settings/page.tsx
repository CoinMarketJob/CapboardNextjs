"use client";

import React from 'react';
import "./company_settings.css";

const CompanySettings = () => {
  return (
    <div className="scrollable-container">
      <div className="card-1">
        <h4 className="titles">Basic Info</h4>
        <div className="card-item">
          <div className='Logo' >Logo</div>
          <ul> <div className="input-group">
            <label>Name</label>
            <input
              name="name"
              placeholder="John"
              type="text"
              className="form"
            />
          </div>
          <div className="input-group">
            <label>URL</label>
            <input
              name="name"
              placeholder="https//:..."
              type="text"
              className="form"
            />
          </div>
            </ul>
          <ul className='card-1-choices' >
              <div className="form mb-3">
              <label className="form-label">Operating Country</label>
                <div>
                  <select id="country" name="country" className="form-select">
                    <option value="239">United Arab Emirates</option>
                    <option value="71">Ethiopia</option>
                    <option value="68">Equatorial Guinea</option>
                    <option value="118">
                      Korea, Democratic People's Republic of
                    </option>
                    <option value="144">Mauritius</option>
                    <option value="193">Saint Pierre and Miquelon</option>
                    <option value="199">Sao Tome and Principe</option>
                    <option value="242">
                      United States Minor Outlying Islands
                    </option>
                    <option value="1">Afghanistan</option>
                    <option value="9">Antigua and Barbuda</option>
                    <option value="7">Anguilla</option>
                    <option value="6">Angola</option>
                    <option value="10">Argentina</option>
                    <option value="4">American Samoa</option>
                    <option value="12">Aruba</option>
                    <option value="15">Azerbaijan</option>
                    <option value="19">Barbados</option>
                    <option value="18">Bangladesh</option>
                    <option value="36">Burkina Faso</option>
                    <option value="17">Bahrain</option>
                    <option value="37">Burundi</option>
                    <option value="23">Benin</option>
                    <option value="24">Bermuda</option>
                    <option value="33">Brunei Darussalam</option>
                    <option value="26">Bolivia, Plurinational State of</option>
                    <option value="31">Brazil</option>
                    <option value="16">Bahamas</option>
                    <option value="25">Bhutan</option>
                    <option value="30">Bouvet Island</option>
                    <option value="29">Botswana</option>
                    <option value="22">Belize</option>
                    <option value="40">Canada</option>
                    <option value="48">Cocos (Keeling) Islands</option>
                    <option value="52">
                      Congo, the Democratic Republic of the
                    </option>
                    <option value="8">Antarctica</option>
                    <option value="43">Central African Republic</option>
                    <option value="51">Congo</option>
                    <option value="55">Côte d'Ivoire</option>
                    <option value="53">Cook Islands</option>
                    <option value="45">Chile</option>
                    <option value="39">Cameroon</option>
                    <option value="46">China</option>
                    <option value="49">Colombia</option>
                    <option value="54">Costa Rica</option>
                    <option value="58">Cuba</option>
                    <option value="41">Cape Verde</option>
                    <option value="47">Christmas Island</option>
                    <option value="62">Djibouti</option>
                    <option value="63">Dominica</option>
                    <option value="64">Dominican Republic</option>
                    <option value="3">Algeria</option>
                    <option value="65">Ecuador</option>
                    <option value="32">British Indian Ocean Territory</option>
                    <option value="38">Cambodia</option>
                    <option value="50">Comoros</option>
                    <option value="42">Cayman Islands</option>
                    <option value="44">Chad</option>
                    <option value="66">Egypt</option>
                    <option value="69">Eritrea</option>
                    <option value="74">Fiji</option>
                    <option value="72">Falkland Islands (Malvinas)</option>
                    <option value="147">Micronesia, Federated States of</option>
                    <option value="80">Gabon</option>
                    <option value="88">Grenada</option>
                    <option value="77">French Guiana</option>
                    <option value="92">Guernsey</option>
                    <option value="84">Ghana</option>
                    <option value="87">Greenland</option>
                    <option value="81">Gambia</option>
                    <option value="93">Guinea</option>
                    <option value="89">Guadeloupe</option>
                    <option value="91">Guatemala</option>
                    <option value="90">Guam</option>
                    <option value="94">Guinea-Bissau</option>
                    <option value="95">Guyana</option>
                    <option value="100">Hong Kong</option>
                    <option value="97">
                      Heard Island and McDonald Islands
                    </option>
                    <option value="99">Honduras</option>
                    <option value="96">Haiti</option>
                    <option value="104">Indonesia</option>
                    <option value="109">Israel</option>
                    <option value="106">Iraq</option>
                    <option value="105">Iran, Islamic Republic of</option>
                    <option value="113">Jersey</option>
                    <option value="111">Jamaica</option>
                    <option value="114">Jordan</option>
                    <option value="112">Japan</option>
                    <option value="116">Kenya</option>
                    <option value="122">Kyrgyzstan</option>
                    <option value="117">Kiribati</option>
                    <option value="119">Korea, Republic of</option>
                    <option value="121">Kuwait</option>
                    <option value="115">Kazakhstan</option>
                    <option value="123">
                      Lao People's Democratic Republic
                    </option>
                    <option value="125">Lebanon</option>
                    <option value="127">Liberia</option>
                    <option value="126">Lesotho</option>
                    <option value="128">Libyan Arab Jamahiriya</option>
                    <option value="153">Morocco</option>
                    <option value="135">Madagascar</option>
                    <option value="141">Marshall Islands</option>
                    <option value="139">Mali</option>
                    <option value="155">Myanmar</option>
                    <option value="150">Mongolia</option>
                    <option value="133">Macao</option>
                    <option value="142">Martinique</option>
                    <option value="143">Mauritania</option>
                    <option value="152">Montserrat</option>
                    <option value="138">Maldives</option>
                    <option value="136">Malawi</option>
                    <option value="146">Mexico</option>
                    <option value="137">Malaysia</option>
                    <option value="154">Mozambique</option>
                    <option value="157">Namibia</option>
                    <option value="159">Nepal</option>
                    <option value="158">Nauru</option>
                    <option value="78">French Polynesia</option>
                    <option value="67">El Salvador</option>
                    <option value="79">French Southern Territories</option>
                    <option value="145">Mayotte</option>
                    <option value="161">Netherlands Antilles</option>
                    <option value="212">South Sudan</option>
                    <option value="243">Uruguay</option>
                    <option value="253">Western Sahara</option>
                    <option value="211">
                      South Georgia and the South Sandwich Islands
                    </option>
                    <option value="191">Saint Kitts and Nevis</option>
                    <option value="192">Saint Lucia</option>
                    <option value="214">Sri Lanka</option>
                    <option value="169">Northern Mariana Islands</option>
                    <option value="162">New Caledonia</option>
                    <option value="165">Niger</option>
                    <option value="168">Norfolk Island</option>
                    <option value="166">Nigeria</option>
                    <option value="164">Nicaragua</option>
                    <option value="167">Niue</option>
                    <option value="171">Oman</option>
                    <option value="175">Panama</option>
                    <option value="178">Peru</option>
                    <option value="176">Papua New Guinea</option>
                    <option value="179">Philippines</option>
                    <option value="172">Pakistan</option>
                    <option value="180">Pitcairn</option>
                    <option value="183">Puerto Rico</option>
                    <option value="174">Palestinian Territory, Occupied</option>
                    <option value="173">Palau</option>
                    <option value="177">Paraguay</option>
                    <option value="184">Qatar</option>
                    <option value="185">Réunion</option>
                    <option value="189">Rwanda</option>
                    <option value="200">Saudi Arabia</option>
                    <option value="208">Solomon Islands</option>
                    <option value="203">Seychelles</option>
                    <option value="215">Sudan</option>
                    <option value="205">Singapore</option>
                    <option value="190">
                      Saint Helena, Ascension and Tristan da Cunha
                    </option>
                    <option value="217">Svalbard and Jan Mayen</option>
                    <option value="204">Sierra Leone</option>
                    <option value="201">Senegal</option>
                    <option value="209">Somalia</option>
                    <option value="216">Suriname</option>
                    <option value="221">Syrian Arab Republic</option>
                    <option value="218">Swaziland</option>
                    <option value="235">Turks and Caicos Islands</option>
                    <option value="228">Togo</option>
                    <option value="226">Thailand</option>
                    <option value="224">Tajikistan</option>
                    <option value="229">Tokelau</option>
                    <option value="227">Timor-Leste</option>
                    <option value="234">Turkmenistan</option>
                    <option value="232">Tunisia</option>
                    <option value="230">Tonga</option>
                    <option value="231">Trinidad and Tobago</option>
                    <option value="236">Tuvalu</option>
                    <option value="222">Taiwan, Province of China</option>
                    <option value="225">Tanzania, United Republic of</option>
                    <option value="237">Uganda</option>
                    <option value="244">Uzbekistan</option>
                    <option value="194">
                      Saint Vincent and the Grenadines
                    </option>
                    <option value="246">
                      Venezuela, Bolivarian Republic of
                    </option>
                    <option value="250">Virgin Islands, British</option>
                    <option value="251">Virgin Islands, U.S.</option>
                    <option value="248">Viet Nam</option>
                    <option value="245">Vanuatu</option>
                    <option value="252">Wallis and Futuna</option>
                    <option value="197">Samoa</option>
                    <option value="254">Yemen</option>
                    <option value="210">South Africa</option>
                    <option value="255">Zambia</option>
                    <option value="256">Zimbabwe</option>
                    <option value="83">Germany</option>
                    <option value="5">Andorra</option>
                    <option value="2">Albania</option>
                    <option value="11">Armenia</option>
                    <option value="14">Austria</option>
                    <option value="28">Bosnia and Herzegovina</option>
                    <option value="21">Belgium</option>
                    <option value="35">Bulgaria</option>
                    <option value="20">Belarus</option>
                    <option value="59">Cyprus</option>
                    <option value="60">Czech Republic</option>
                    <option value="61">Denmark</option>
                    <option value="57">Croatia</option>
                    <option value="70">Estonia</option>
                    <option value="75">Finland</option>
                    <option value="73">Faroe Islands</option>
                    <option value="76">France</option>
                    <option value="82">Georgia</option>
                    <option value="85">Gibraltar</option>
                    <option value="86">Greece</option>
                    <option value="101">Hungary</option>
                    <option value="107">Ireland</option>
                    <option value="108">Isle of Man</option>
                    <option value="102">Iceland</option>
                    <option value="110">Italy</option>
                    <option value="130">Liechtenstein</option>
                    <option value="131">Lithuania</option>
                    <option value="132">Luxembourg</option>
                    <option value="124">Latvia</option>
                    <option value="149">Monaco</option>
                    <option value="148">Moldova, Republic of</option>
                    <option value="151">Montenegro</option>
                    <option value="134">
                      Macedonia, the former Yugoslav Republic of
                    </option>
                    <option value="140">Malta</option>
                    <option value="98">Holy See (Vatican City State)</option>
                    <option value="220">Switzerland</option>
                    <option value="160">Netherlands</option>
                    <option value="170">Norway</option>
                    <option value="181">Poland</option>
                    <option value="182">Portugal</option>
                    <option value="186">Romania</option>
                    <option value="202">Serbia</option>
                    <option value="187">Russian Federation</option>
                    <option value="219">Sweden</option>
                    <option value="207">Slovenia</option>
                    <option value="206">Slovakia</option>
                    <option value="198">San Marino</option>
                    <option value="233">Turkey</option>
                    <option value="238">Ukraine</option>
                    <option value="13">Australia</option>
                    <option value="163">New Zealand</option>
                    <option value="241">United States</option>
                    <option value="213">Spain</option>
                    <option value="240">United Kingdom</option>
                    <option value="103">India</option>
                    <option value="257">Kosovo</option>
                    <option value="258">Curazao</option>
                  </select>
                  <div
                    className="ac-select-container w-100"
                    style={{ display: "none" }}
                  >
                    <div className="ac-select-dropdown w-100">
                      <div className="ac-select-search-box">
                        <input
                          type="text"
                          placeholder="Search..."
                          className="form"
                        />
                      </div>
                      <ul className="list border">
                        <li data-value="239">United Arab Emirates</li>
                        <li data-value="71">Ethiopia</li>
                        <li data-value="68">Equatorial Guinea</li>
                        <li data-value="118">
                          Korea, Democratic People's Republic of
                        </li>
                        <li data-value="144">Mauritius</li>
                        <li data-value="193">Saint Pierre and Miquelon</li>
                        <li data-value="199">Sao Tome and Principe</li>
                        <li data-value="242">
                          United States Minor Outlying Islands
                        </li>
                        <li data-value="1">Afghanistan</li>
                        <li data-value="9">Antigua and Barbuda</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form mb-3">
              <label className="form-label">Currency</label>
                <div>
                <select id="currency" name="currency" className="form-select">
            <option value="USD">United States Dollar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="JPY">Japanese Yen (JPY)</option>
            <option value="GBP">British Pound Sterling (GBP)</option>
            <option value="AUD">Australian Dollar (AUD)</option>
            <option value="CAD">Canadian Dollar (CAD)</option>
            <option value="CHF">Swiss Franc (CHF)</option>
            <option value="CNY">Chinese Yuan (CNY)</option>
            <option value="SEK">Swedish Krona (SEK)</option>
            <option value="NZD">New Zealand Dollar (NZD)</option>
            <option value="MXN">Mexican Peso (MXN)</option>
            <option value="SGD">Singapore Dollar (SGD)</option>
            <option value="HKD">Hong Kong Dollar (HKD)</option>
            <option value="NOK">Norwegian Krone (NOK)</option>
            <option value="KRW">South Korean Won (KRW)</option>
            <option value="TRY">Turkish Lira (TRY)</option>
            <option value="RUB">Russian Ruble (RUB)</option>
            <option value="INR">Indian Rupee (INR)</option>
            <option value="BRL">Brazilian Real (BRL)</option>
            <option value="ZAR">South African Rand (ZAR)</option>
            <option value="DKK">Danish Krone (DKK)</option>
            <option value="PLN">Polish Zloty (PLN)</option>
            <option value="THB">Thai Baht (THB)</option>
            <option value="IDR">Indonesian Rupiah (IDR)</option>
            <option value="HUF">Hungarian Forint (HUF)</option>
            <option value="CZK">Czech Koruna (CZK)</option>
            <option value="ILS">Israeli New Shekel (ILS)</option>
            <option value="CLP">Chilean Peso (CLP)</option>
            <option value="PHP">Philippine Peso (PHP)</option>
            <option value="AED">United Arab Emirates Dirham (AED)</option>
            <option value="COP">Colombian Peso (COP)</option>
            <option value="SAR">Saudi Riyal (SAR)</option>
            <option value="MYR">Malaysian Ringgit (MYR)</option>
            <option value="RON">Romanian Leu (RON)</option>
            <option value="ARS">Argentine Peso (ARS)</option>
            <option value="EGP">Egyptian Pound (EGP)</option>
            <option value="VND">Vietnamese Dong (VND)</option>
            <option value="KZT">Kazakhstani Tenge (KZT)</option>
          </select>
                  <div
                    className="ac-select-container w-100"
                    style={{ display: "none" }}
                  >
                    <div className="ac-select-dropdown w-100">
                      <div className="ac-select-search-box">
                        <input
                          type="text"
                          placeholder="Search..."
                          className="form"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </ul>
        </div>
        <div className="card-item">2. sıra</div>
      </div>
      <div className="card-2">
        <h4 className="titles">
          Templates
        </h4>
        <div className="card-item-column">
        <ul style={{display: "flex", flexDirection: "row", fontSize: "13px", marginTop: "2rem"}} >
          <span>Issue_Certificate</span>
          <li style={{listStyle: "none", marginLeft: "0.3rem"}} >Preview current template</li>
          </ul>
          <div className='select-file-frame' >
            <input className='select-file' accept='.html' type='file' name='select-file' >
            </input>
          </div>
          <span style={{marginLeft: "2rem", marginTop: "1.5rem", marginBottom:"1rem"}}>Issue certificate templates must contain the following variables:</span>
          <ul><span style={{backgroundColor: "#39393920", borderRadius: "1rem", height: "30px"}} >%issue_number%</span> <span>Certificate number. Ex: 2344</span></ul>
          <ul><span style={{backgroundColor: "#39393920", borderRadius: "1rem", height: "30px"}} >%shares_amount%</span> <span>Shares amount. Ex: 294.593</span></ul>
          <ul><span style={{backgroundColor: "#39393920", borderRadius: "1rem", height: "30px"}} >%stakeholder_name%</span> <span>Stakeholder name</span></ul>
          <ul><span style={{backgroundColor: "#39393920", borderRadius: "1rem", height: "30px"}} >%company_name%</span> <span>Company name</span></ul>
          <li style={{marginLeft: "2rem", listStyle: "none"}}>Click here to download a template.</li>
          <button className='button' >SAVE</button>
          </div>
      </div>
      <div className="card-3">
        <h4 className="basic-info">Basic Info</h4>
        <div className="card-item">1. sıra</div>
        <div className="card-item">2. sıra</div>
        <div className="card-item">3. sıra</div>
        <div className="card-item">4. sıra</div>
      </div>
      <div className="card-4">
        <h4 className="basic-info">Basic Info</h4>
        <div className="card-item">1. sıra</div>
        <div className="card-item">2. sıra</div>
      </div>
    </div>
  );
}

export default CompanySettings;
