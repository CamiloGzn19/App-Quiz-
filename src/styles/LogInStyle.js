import styled from "styled-components";

// Pantalla inicial

export const Back = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #16161a;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Carga = styled.div`
  display: none;
  width: 100%;
  height: 100vh;
  background-color: #7f5af0;
  display: flex;
  justify-content: center;
  align-content: center;
  animation: fadeOutLeft;
  animation-duration: 5s;
`;

export const Imagen = styled.img`
  width: 177px;
  height: 143px;
  margin-top: 248px;
`;

export const Inicio = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #16161a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Nunito", sans-serif;
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 37px;
  margin-top: 32px;
`;

export const Title = styled.h2`
  width: 100%;
  color: white;
  font-size: 32px;
  text-align: center;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  margin-bottom: 32px;
`;

export const Button1 = styled.a`
  color: white;
  border: 0;
  border-radius: 4px;
  width: 328px;
  height: 48px;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  background-color: #ef4565;
  margin-bottom: 16px;
  text-align: center;
  padding-top: 20px;
  text-decoration: none;
`;

export const Label = styled.label`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #fffffe;
  margin-right: 165px;
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 310px;
  height: 48px;
  border: 0;
  border-radius: 4px;
  margin-bottom: 32px;
  padding-left: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #72757e;
  font-weight: 400;
`;

export const Adv = styled.a`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 32px;
  text-decoration-line: underline;
  color: #2cb67d;
`;

export const Adv2 = styled.a`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 32px;
  text-decoration: none;
  color: #2cb67d;
`;

export const Coment = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #fffffe;
  margin-bottom: 148px;
`;
