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

export const BtnNav = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
  border: 0;
  background-color: transparent;
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: white;
  text-decoration: none;
  svg {
    path {
      fill: white;
    }
    &:hover {
      path {
        fill: #2cb67d;
      }
    }
  }
  &:hover {
    color: #2cb67d;
  }
`;
