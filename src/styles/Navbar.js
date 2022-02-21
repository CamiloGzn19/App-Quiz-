import styled from "styled-components";

export const Footer = styled.footer`
  position: fixed;
  background-color: #232e35;
  bottom: 0;
  width: 100%;
  height: 69px;
`;

export const Logos = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 2px;
`;

export const Icons = styled.svg`
  &:active {
    fill: #2cb67d;
  }
`;

export const Titles = styled.div`
  display: flex;
  justify-content: space-between;
  display: flex;
  align-items: center;
  letter-spacing: 0.005em;
  color: #fffffe;
  margin-left: 26px;
  margin-right: 26px;
`;

export const Follow = styled.a`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: white;
  text-decoration: none;

  &:focus {
    color: #2cb67d;
  }
`;
