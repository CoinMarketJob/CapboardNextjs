"use client";

import { useEffect, useRef } from "react";
import "./signatures.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faPenToSquare, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Signatures = () => {

  const files_to_Sig = [
    { id: 1, title: "Bir", main: "BİR" },
    { id: 2, title: "İki", main: "İKİ" },
    { id: 3, title: "Üç", main: "ÜÇ" },
    { id: 4, title: "Dört", main: "DÖRT" },
  ];

  const gridContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (gridContainerRef.current) {
      const itemHeight = 100; // Height of each item, adjust as needed
      const gridHeight = files_to_Sig.length * itemHeight;
      gridContainerRef.current.style.height = `${gridHeight}px`;
    }
  }, [files_to_Sig]);

  return (
    <div style={{ width: '80vw' }}>
      <ul className="navbar">
        <Link className="link" href="/documents">Documents</Link>
        <Link className="link" href="/signatures">Signatures</Link>
        <Link className="link" href="/templates">Templates</Link>
      </ul>
      <div className="card-1" ref={gridContainerRef} style={{ width: '83vw' }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <span className="signatures-title">
            Signatures
          </span>
          <FontAwesomeIcon icon={faPlus} className="plus-icon" />
        </div>
        <div style={{ width: '80vw' }}>
          <ul>
            {files_to_Sig.map((item) => (
              <ul className="items" key={item.id}>
                <ul>
                  <div style={{ position: 'relative' }}>
                    <span className="date">YY-MM-DD</span>
                    <span>{item.main}</span>
                    <span className="draft">DRAFT</span>
                    <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '10px' }}>
                      <FontAwesomeIcon icon={faBell} style={{ width: '0.75rem', height: '0.75rem', marginRight: '0.5rem' }} />
                      <FontAwesomeIcon icon={faPenToSquare} style={{ width: '0.75rem', height: '0.75rem', marginRight: '0.5rem' }} />
                      <FontAwesomeIcon icon={faTrash} style={{ width: '0.75rem', height: '0.75rem' }} />
                    </div>
                  </div>
                  <span style={{ fontSize: '13px', marginLeft: '1rem' }}>
                    To: {" " + item.id}
                  </span>
                </ul>
              </ul>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Signatures;
