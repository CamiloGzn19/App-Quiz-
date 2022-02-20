import React, { useState } from "react";
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
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [progress, setProgress] = useState(0);
  const [validar, setValidar] = useState("btn1");

  function handleScore(isCorrect, e) {
    e.preventDefault();
    setTimeout(() => {
      if (isCorrect) {
        setPuntuacion(puntuacion + 1);
        setValidar("btn1");
      } else {
        setValidar("btn2");
      }
    }, 20);
  }

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

  console.log(preguntaActual);
  console.log(puntuacion);

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
        <VidaRes>4</VidaRes>
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
                  <Input
                    type="radio"
                    label=""
                    value=""
                    name="responses"
                    id=""
                  />
                </Box>
              ))}
            </Responses>
            {questions1[preguntaActual].options.map((resp) => (
              <button
                className={validar}
                key={resp.response}
                variant="primary"
                type="submit"
                onClick={(e) => handleAnswerSubmit(resp.isCorrect, e)}
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
