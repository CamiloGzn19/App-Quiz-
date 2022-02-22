import React, { useEffect, useState } from "react";
import { questions1 } from "../Helpers/Preguntas";
import {
  Container,
  Principal,
  Return,
  Form,
  Imagen,
  ImgRes,
  Responses,
  Options,
  Box,
  Input,
  Text,
} from "../styles/QuestionStyle";
import { ProBar, Vida, Close, Bar, VidaRes } from "../styles/QuestionStyle";
import "../styles/App.css";
import LinearProgress from "@mui/material/LinearProgress";
import { Link } from "react-router-dom";

const Questions = () => {
  const [vidas, setVidas] = useState(5);
  const [time, setTime] = useState(0)
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [correct, setCorrect] = useState(true);
  const [progress, setProgress] = useState(0);
  const [validar, setValidar] = useState("btn1");

  const newTime = setInterval(() => {
    setTime(time + 1);
    clearInterval(newTime);
  }, 1000)

  console.log(time);

  function handleScore(isCorrect, e) {
    e.preventDefault();
    setTimeout(() => {
      if (isCorrect) {
        setPuntuacion(puntuacion + 1);
        setValidar("btn1");
      } else {
        setValidar("btn2");
        setCorrect(false)
      }
    }, 20);
  }

  const handleVidas = () => {
    setCorrect(correct ? console.log("good") : console.log("Bad"));
    if (correct === false) {
      setVidas(vidas - 1);
    }
  };

  function handleAnswerSubmit(isCorrect, e) {
    e.preventDefault();
    setTimeout(() => {
      if (preguntaActual === questions1.length - 1) {
        setIsFinished(true);
      } else {
        setPreguntaActual(preguntaActual + 1);
        setProgress(progress + 20);
      }
    }, 1000);
  }

  function saveScore() {
    if (isFinished) {
      localStorage.setItem("correctas", JSON.stringify(puntuacion));
      localStorage.setItem("tiempo", JSON.stringify(time));
    } else {
      console.log("Continue");
    }
  }

  saveScore();

  if (isFinished)
    return (
      <Return onClick={() => (window.location.href = "/Stats")}>
        <ImgRes
          src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1644891959/Sprint%202/images/Color_white_Container_No_urw2bl.png"
          alt="logo"
        />
        Ver resultados
      </Return>
    );
  return (
    <div>
      <ProBar>
        <Close
          as={Link}
          to="/categories"
          width="24"
          height="24"
          alt="back"
          src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1644891970/Sprint%202/icons%20/Property_1_x_twdni3.svg"
        />
        <Bar>
          <LinearProgress
            variant="determinate"
            value={progress}
            color="success"
            sx={{
              width: 234,
              height: 12,
              borderRadius: 50,
            }}
          />
        </Bar>
        <Vida src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1644891972/Sprint%202/icons%20/Property_1_heart_fbrb3e.svg" />
        <VidaRes>{vidas}</VidaRes>
      </ProBar>
      <Container>
        <LinearProgress variant="determinate" value={25} />
        <div>
          <Form>
            <Principal>
              <Imagen src={questions1[preguntaActual].image} />
              <Text>{questions1[preguntaActual].title}</Text>
            </Principal>
            <Responses>
              {questions1[preguntaActual].options.map((resp) => (
                <Box
                  key={resp.response}
                  onClick={(e) => handleScore(resp.isCorrect, e)}
                >
                  <Options>{resp.response}</Options>
                  <Input name="select" type="radio" />
                </Box>
              ))}
            </Responses>
            {questions1[preguntaActual].options.map((resp) => (
              <button
                className={validar}
                key={resp.response}
                variant="primary"
                type="submit"
                onClick={(e) => {
                  handleAnswerSubmit(resp.isCorrect, e);
                  handleVidas();
                }}
              >
                COMPROBAR
              </button>
            ))}
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Questions;
