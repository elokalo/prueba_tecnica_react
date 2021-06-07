import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, showModal } from "../redux";
import LogBar from "./LogBar";
import { Table, Button } from "react-bootstrap";
import { AiFillEye } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import Detalle from "./Detalle";

function Proveedores() {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <LogBar />
      <div className={"section-container"}>
        <h2 className={"section-title"}>Proveedores</h2>
        <div className={"search-container"}>
          <input className={"search"} type="text" placeholder="Buscar por" ></input>
          <Button variant="primary" onClick={() => {dispatch(fetchUsers())}} ><FiSearch/></Button>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Mostrar Detalle</th>
            </tr>
          </thead>
          <tbody>
            {userData &&
              userData?.users &&
              userData?.users?.map((user) => (
              <tr key={user.id}>
                <td><input type="checkbox" /></td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td className={"show-details"} onClick={()=> {dispatch(showModal(user))}} ><p><AiFillEye /></p></td>
              </tr>
              ))
            }
          </tbody>
        </Table>
        <Detalle />
      </div>
    </div>
  );
}

export default Proveedores;
