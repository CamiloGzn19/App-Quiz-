import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #16161a;
  color: white;
`;

export const Title = styled.h2`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
  color: #fffffe;
  margin-bottom: 30px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin-bottom: 12px;
  text-align: left;
`;

export const Input = styled.input`
    width: 180px;
    font-family: Nunito;
    padding-left: 5px;
`;

export const Button1 = styled.button`
  color: white;
  border: 0;
  border-radius: 4px;
  width: 75px;
  height: 30px;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  background-color: #ef4565;
  text-align: center;
  text-decoration: none;
  margin-top: 30px;
`;
