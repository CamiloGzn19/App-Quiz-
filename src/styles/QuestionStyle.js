import styled from "styled-components";

// Barra de progreso

export const ProBar = styled.div`
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Nunito", sans-serif;
  background-color: #16161a;
`;

export const Vida = styled.img`
  width: 24px;
  height: 24px;
  padding-left: 10px;
`;

export const VidaRes = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.005em;
  color: white;
  padding-left: 4px;
`;

export const Close = styled.button`
  background-color: #16161a;
  border: 0;
  width: 24px;
  height: 24px;
  margin-right: 20px;
  fill: white;
  cursor: pointer;
`;

export const Bar = styled.span`
  width: 234px;
  height: 12px;
  background-color: white;
  border-radius: 50px;
`;

//Preguntas tipo 1

export const Container = styled.div`
  width: 100%;
  height: 640px;
  display: flex;
  justify-content: center;
  font-family: "Nunito", sans-serif;
  background-color: #16161a;
`;

export const Return = styled.button`
  width: 100%;
  height: 100vh;
  border: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Nunito;
  font-style: normal;
  font-size: 22px;
  color: #7f5af0;
  text-align: center;
  background-color: #16161a;
`;

export const ImgRes = styled.img`
  width: 178px;
  margin-bottom: 20px;
`;

export const FormStyle = styled.form`
  background-color: transparent;
`;

export const Form = styled.form`
  background-color: #16161a;
`;

export const Imagen = styled.img`
  margin-top: 16px;
  margin-left: 16px;
  width: 75px;
  height: 159px;
`;

export const Principal = styled.div`
  display: flex;
`;

export const Text = styled.h2`
  display: flex;
  width: 237px;
  font-family: Nunito;
  font-style: normal;
  font-size: 22px;
  color: white;
  margin-top: 36px;
  margin-left: 16px;
`;

export const Responses = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: white;
  margin-top: 100px;
`;

export const Box = styled.button`
  width: 324px;
  height: 56px;
  border: 2px solid white;
  background-color: #232e35;
  border-radius: 4px;
  margin-bottom: 16px;
  &:focus {
    border: 2px solid #2cb67d;
  }
`;

export const Button = styled.button`
  position: fixed;
  bottom: 0;
  color: white;
  border: 0;
  border-radius: 10px;
  margin-left: 16px;
  margin-bottom: 16px;
  width: 328px;
  height: 48px;
  font-size: 14px;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  background-color: #6b47dc;

  &:active {
    background-color: #2cb67d;
    box-shadow: 0px 4px 0px 0px #0f915b;
  }
`;

export const Options = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.005em;
  color: #fffffe;
  text-align: left;
  margin-top: 16px;
  margin-left: 16px;
`;

export const Input = styled.input`
  position: relative;
  width: 24px;
  height: 24px;
  background-color: #232e35;
  margin-left: 278px;
  bottom: 25px;
  &:checked {
    background-color: red;
  }
`;

//Preguntas tipo 2
