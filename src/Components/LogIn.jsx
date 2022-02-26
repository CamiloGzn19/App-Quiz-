import React, { useState } from "react";
import "animate.css";
import { Link } from "react-router-dom";
import {
  Back,
  Carga,
  Imagen,
  Inicio,
  Logo,
  Title,
  Button1,
  Label,
  Input,
  Adv,
  Adv2,
  Coment,
} from "../styles/LogInStyle";

const LogIn = () => {
  //Usuario por defecto

  const [animacion, setAnimacion] = useState(true);

  const usuario = {
    nombre: "Francisco",
    apellido: "Javier",
    correo: "francisco.javier@gmail.com",
  };

  const sendInfo = () => {
    sessionStorage.setItem("usuario", JSON.stringify(usuario));
  };

  const handleRender = setInterval(() => {
    if (animacion === true) {
      setAnimacion(false);
      clearInterval(handleRender);
    }
  },4000);


  if (animacion === true) {
    return (
      <Carga>
        <Imagen 
          onClick={() => {
            handleRender()
          }}
          src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1644891959/Sprint%202/images/Color_white_Container_No_urw2bl.png"
        />
      </Carga>
    );
  } else {
    return (
      <Back>
        <Inicio>
          <Logo src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1644891959/Sprint%202/images/Color_Purple_Container_Yes_up64l7.png" />
          <Title>Iniciar Sesión</Title>
          <Button1
            as={Link}
            to="/categories"
            onClick={() => {
              sendInfo();
            }}
          >
            Continuar con Google
          </Button1>
          <hr width="328"></hr>
          <Label>Correo Electrónico</Label>
          <Input placeholder="Ingrese su correo electrónico"></Input>
          <Adv>¿Se te olvidó tu contraseña?</Adv>
          <Coment>
            ¿Aún no tienes una cuenta?{" "}
            <Adv2 onClick={() => (window.location.href = "/Subscribe")}>
              Inscribirse
            </Adv2>
          </Coment>
        </Inicio>
      </Back>
    );
  }
};

export default LogIn;
