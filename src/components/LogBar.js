import React from "react";
import { ImExit } from 'react-icons/im';

function LogBar() {
  return (
    <div className={"log-bar"}>
      <p className={"log-title"}>Aportaciones</p>
      <div className={"user-n-logout"}>
        <p>Bienvenido, Alfredo Cortes</p>
        <p><ImExit /></p>
      </div>
    </div>
  );
}

export default LogBar;
