import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../Helpers/url";
import {
  Container,
  Container2,
  Desc,
  Imagen,
  Drop,
  Block,
  Block2,
  Title,
  Title2,
  Valor,
  ValorI,
  Ancla,
  Button1,
  ButtonD,
  Registros,
  User,
  Datos,
  Good,
  Bad,
} from "../styles/StatsStyle";
import Navbar from "./Navbar";

const Stats = () => {
  const [jugador, setJugador] = useState("")
  const preguntas = 5;
  const [resultados, setResultados] = useState([]);
  const [incorrectas, setIncorrectas] = useState(0);
  const correctas = localStorage.getItem("correctas");
  const tiempo = localStorage.getItem("tiempo");
  let [horas, setHoras] = useState(0)

  const CalcTime = () => {
    if(tiempo < 3600) {
      setHoras(horas = 1)
    } else if (tiempo > 3600 && tiempo < 7200) {
      setHoras(horas = 2)
    }
  }

  function getInfo() {
    let data = sessionStorage.getItem("usuario");
    data = JSON.parse(data);
    setJugador( data.nombre + " " + data.apellido );
  }

  const calcDiferencia = () => {
    setIncorrectas(preguntas - correctas);
  };

  useEffect(() => {
    getInfo();
    calcDiferencia();
    getData();
    CalcTime();
  },);

  const estadisticas = {
    name: jugador,
    timeplayed: 1,
    correct: correctas,
    incorrect: incorrectas,
  };

  const getData = () => {
    axios
      .get(url)
      .then((response) => {
        setResultados(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postData = () => {
    axios
      .post(url, estadisticas)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
    alert("Datos enviados");
  };

  const deleteData = (id) => {
    axios
      .delete(url + id)
      .then((response) => {
        getData();
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Container>
        <Title>Estadísticas</Title>
        <Drop>
          <option>Los últimos 7 días</option>
          <option>El último mes</option>
        </Drop>
        <div>
          <Block>
            <Imagen src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1644891970/Sprint%202/icons%20/Property_1_clock_f8yhyj.svg" />
            <Desc>Tiempo de estudio (horas)</Desc>
            <Valor>{horas}</Valor>
          </Block>
          <Block>
            <Imagen src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1644891970/Sprint%202/icons%20/Property_1_message-circle_dg6lsq.svg" />
            <Desc>Respuestas contestadas</Desc>
            <Valor>{preguntas}</Valor>
          </Block>
          <Block>
            <Imagen src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1644891970/Sprint%202/icons%20/Property_1_message-circle_dg6lsq.svg" />
            <Desc>Respuestas correctas</Desc>
            <Valor>{correctas}</Valor>
          </Block>
          <Block>
            <Imagen src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1644891970/Sprint%202/icons%20/Property_1_message-circle_dg6lsq.svg" />
            <Desc>Respuestas incorrectas</Desc>
            <ValorI>{incorrectas}</ValorI>
          </Block>
          <Button1
            onClick={() => {
              postData();
            }}
          >
            Enviar Datos
          </Button1>
          <br />
          <Button1>
            <Ancla href="#amigos">Ver amigos</Ancla>
          </Button1>
        </div>
      </Container>
      <Container2 id="amigos">
        <Title2>Estadísticas de tus amigos</Title2>
        <Registros>
          {resultados.map((d) => (
            <>
              <Block2 key={d.id}>
                <User>{d.name}</User>
                <Datos>
                  <h5>Tiempo jugado (horas): </h5>
                  <h5>Correctas: </h5>
                  <h5>Incorrectas: </h5>
                </Datos>
                <Datos>
                  <h5>{d.timeplayed}</h5>
                  <Good>{d.correct}</Good>
                  <Bad>{d.incorrect}</Bad>
                </Datos>
              </Block2>
              <ButtonD onClick={() => deleteData(d.id)}>Borrar</ButtonD>
            </>
          ))}
        </Registros>
      </Container2>
      <Navbar />
    </div>
  );
};

export default Stats;
