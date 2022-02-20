import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Title,
  Card,
  Stamp,
  Name,
  Name2,
  Serie,
  Serie2,
} from "../styles/CategoryStyle";
import Navbar from "./Navbar";

const Categories = () => {
  return (
    <Fragment>
      <Container>
        <Title>Practica tus conocimientos en la categoría que prefieras.</Title>
        <Card>
          <Serie as={Link} to="/questions">
            <Stamp src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1645079168/Sprint%202/images/HTML_yqipjk.png" />
          </Serie>
          <Name>HTML</Name>
          <Serie>
            <Stamp src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1645079168/Sprint%202/images/CSS_meczkv.png" />
            <Stamp src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1645079168/Sprint%202/images/JS_qtnnra.png" />
          </Serie>
          <Serie2>
            <Name2>CSS</Name2>
            <Name>JS</Name>
          </Serie2>
          <Serie>
            <Stamp src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1645079168/Sprint%202/images/FIGMA_v26mof.png" />
            <Stamp src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1645079168/Sprint%202/images/UX_ewmnsx.png" />
          </Serie>
          <Serie2>
            <Name2>FIGMA</Name2>
            <Name>UX</Name>
          </Serie2>
        </Card>
      </Container>
      <Navbar />
    </Fragment>
  );
};

export default Categories;
