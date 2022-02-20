import React, { useEffect, useState } from "react";
import {
  Container,
  Title,
  Imagen,
  Person,
  Contact,
  LogOut,
} from "../styles/ProfileStyle";
import Navbar from "./Navbar";

const Profile = () => {

  const [perfil, setPerfil] = useState("")
  const [correo, setCorreo] = useState("")

  function getInfo() {
    let data = sessionStorage.getItem("usuario");
    data = JSON.parse(data);
    setPerfil( data.nombre + " " + data.apellido );
    setCorreo(data.correo)
  }

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div>
      <Container>
        <Title>Perfil</Title>
        <Imagen src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1645249658/Sprint%202/images/Ellipse_3_lqfcvq.png" />
        <Person>{perfil}</Person>
        <Contact>{correo}</Contact>
        <LogOut
          onClick={() => {
            window.location.href = "/";
            sessionStorage.clear();
            localStorage.clear();
          }}
        >
          Cerrar sesión
        </LogOut>
      </Container>
      <Navbar />
    </div>
  );
};

export default Profile;
