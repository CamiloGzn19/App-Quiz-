import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #16161a;
`;

export const Title = styled.h1`
  position: absolute;
  top: 16px;
  left: 16px;
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
  color: #fffffe;
`;

export const Imagen = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 8px;
`;

export const Person = styled.h2`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #fffffe;
`;

export const Contact = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #fffffe;
  margin-bottom: 24px;
`;

export const LogOut = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ef4565;
  margin-bottom: 280px;
`;
