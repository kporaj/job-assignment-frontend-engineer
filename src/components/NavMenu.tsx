import React from "react";
import { matchPath } from "react-router";
import NavMenuItem from "./NavMenuItem";

export interface RouteInfo {
  title: string;
  path: string;
  icon?: string;
}

export const NavMenu: React.FC = () => {
  const routes: RouteInfo[] = [
    { title: "Home", path: "#" },
    // { title: "New Article", path: "#/editor", icon: "ion-compose" },
    // { title: "Settings", path: "#/Settings", icon: "ion-gear-a" },
    // { title: "Sign up", path: "#/register" },
  ];

  // TODO - besides checking if token is present, check its validity
  if (!sessionStorage.getItem("token")) {
    routes.push({ title: "Sign in", path: "#/login" });
  } else {
    routes.push({ title: "Logout", path: "#/logout" });
  }

  const checkIfActive = (path: string) => {
    return matchPath(window.location.hash, {
      path: path,
      exact: true,
    });
  };

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/#">
          conduit
        </a>
        <ul className="nav navbar-nav pull-xs-right">
          {routes.map(({ title, path, icon }) => (
            <NavMenuItem
              key={title}
              title={title}
              path={path}
              icon={icon}
              isActive={checkIfActive(path) ? true : false}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};
