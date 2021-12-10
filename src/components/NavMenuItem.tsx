import React from "react";
import { RouteInfo } from "./NavMenu";

interface NavMenuItemProps extends RouteInfo {
  isActive?: boolean;
}

const NavMenuItem: React.FC<NavMenuItemProps> = ({ path, title, icon, isActive = false }) => {
  const linkClassName = isActive ? "nav-link active" : "nav-link";
  return (
    <li className="nav-item">
      <a className={linkClassName} href={path}>
        {icon && <i className={icon} />}
        &nbsp;{title}
      </a>
    </li>
  );
};

export default NavMenuItem;
