import React from "react";

function Navv() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={`${process.env.PUBLIC_URL}/images/arrowDAO.svg`} alt="" />
        </a>
      </nav>
    </div>
  );
}

export default Navv;
