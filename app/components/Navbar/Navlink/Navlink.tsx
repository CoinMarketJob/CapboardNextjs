"use client";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navlink.css";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface NavlinkProps {
  name: string;
  href: string;
  icon: IconDefinition;
}
const Navlink: React.FC<NavlinkProps> = ({ name, href, icon }) => {
  const pathname = usePathname();
  const color = pathname == href ? "#FFFFFF" : "#F2F2F2";
  return (
    <li className="nav-link-li" style={{ backgroundColor: color }}>
      <a href={href} className="nav-link-a">
        <FontAwesomeIcon icon={icon} className="nav-link-icon" />
        <span className="nav-link-text">{name} </span>
      </a>
    </li>
  );
};

export default Navlink;
