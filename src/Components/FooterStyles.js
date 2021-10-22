import styled from "styled-components";

export const Box = styled.div`
  padding: 20px 20px;
  background: gray;
  margin-top: 20px;
  width: 100%;
  @media (max-width: 1000px) {
    padding: 10px 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 15px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;
