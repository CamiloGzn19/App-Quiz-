import React, { useState } from "react";
import { Form, Title, Box, Input, Button1 } from "../styles/SubscribeStyle";

const Subscribe = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    correo: "",
  });

  const { nombre, apellido, correo } = usuario;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChanged = ({ target }) => {
    setUsuario({
      ...usuario,
      [target.name]: target.value,
    });
  };

  const sendInfo = () => {
    sessionStorage.setItem("usuario", JSON.stringify(usuario));
  };

  const logged = () => {
    window.location.href = "/Categories"
  }

  return (
    <div>
      <Form id="formulario" onSubmit={handleSubmit}>
        <Title>Registro de usuario</Title>
        <Box>
          <label>Nombre</label>
          <Input id="inputNombre" type="text" name="nombre" value={nombre} onChange={handleChanged}/>
        </Box>
        <Box>
          <label>Apellido</label>
          <Input id="inputCelular" type="text" name="apellido" value={apellido} onChange={handleChanged}/>
        </Box>
        <Box>
          <label>Correo</label>
          <Input id="inputCorreo" type="email" name="correo" value={correo} onChange={handleChanged}/>
        </Box>
        <div>
          <Button1 onClick={() => {sendInfo(); logged();}} id="btnRegistro">
            Enviar
          </Button1>
        </div>
      </Form>
    </div>
  );
};

export default Subscribe;
