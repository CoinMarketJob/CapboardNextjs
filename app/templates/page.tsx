"use client";

import "./Templates.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";

const Templates = () => {
  const templates = [
    { id: 1, title: "Bir", main: "BİR" },
    { id: 2, title: "İki", main: "İKİ" },
    { id: 3, title: "Üç", main: "ÜÇ" },
    { id: 4, title: "Dört", main: "DÖRT" },
  ];

  const [filterVisible, setFilterVisible] = useState(false);

  return (
    <div className="main-template">
      <ul className="navbar">
        <Link className="link" href="/documents">Documents</Link>
        <Link className="link" href="/signatures">Signatures</Link>
        <Link className="link" href="/templates">Templates</Link>
      </ul>
      <div>
        <div className="card-1">
          <div style={{ margin: "1rem" }}>Filter by country</div>
          <div className="input-wrapper">
            <input
              type="text"
              className="input"
              placeholder="World"
              onFocus={() => setFilterVisible(true)}
              onBlur={() => setFilterVisible(false)}
            />
            <FontAwesomeIcon icon={faChevronDown} />
            {filterVisible && (
              <ul className="dropdown">
                {templates.map((item) => (
                  <li className="dropdown-item" key={item.id}>
                    {item.main}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="card-2">
          <ul style={{ display: "flex", flexDirection: "row" }}>
            {templates.map((item) => (
              <div className="card-2-item" key={item.id}>
                <span>{item.main}</span>
                {item.title}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Templates;
