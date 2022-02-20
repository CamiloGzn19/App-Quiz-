import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #16161a;
  width: 100%;
  height: 100vh;
`;

export const Title = styled.h2`
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 0.0015em;
  color: #fffffe;
  width: 328px;
  margin-top: 16px;
  margin-bottom: 49px;
`;

export const Card = styled.div`
  width: 216px;
`;

export const Serie = styled.div`
  width: 100%;
  height: 100px;
  display: inline-flex;
  justify-content: space-around;
`;

export const Serie2 = styled.div`
  width: 100%;
  height: 20px;
  display: inline-flex;
  justify-content: space-around;
  margin-bottom: 24px;
`;

export const Name = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.005em;
  text-align: center;
  color: #fffffe;
  margin-top: 8px;
`;

export const Name2 = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.005em;
  text-align: center;
  color: #fffffe;
  margin-top: 8px;
  margin-right: 36px;
`; 

export const Stamp = styled.img`
  width: 64px;
  height: 64px;
  border: 10px solid #dddddd;
  border-radius: 50px;
  padding: 8px;
  justify-content: center;
  margin-left: 12px;
  margin-right: 12px;
`;
