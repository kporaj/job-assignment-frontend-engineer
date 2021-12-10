import React, { useEffect } from "react";
import { NavMenu } from "components/NavMenu";
import { useHistory } from "react-router-dom";

const LogoutScreen: React.FC = () => {
  // TODO - In it's current form this Screen is redundant (just a button in NavMenu would suffice), i've left it here because it was in the app skeleton
  const history = useHistory();
  useEffect(() => {
    sessionStorage.removeItem("token");
    history.push("/");
  }, [history]);

  return (
    <>
      <NavMenu />

      <footer>
        <div className="container">
          <a href="/#" className="logo-font">
            conduit
          </a>
          <span className="attribution">
            An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
            licensed under MIT.
          </span>
        </div>
      </footer>
    </>
  );
};

export default LogoutScreen;
