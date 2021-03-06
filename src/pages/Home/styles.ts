import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1130px) {
    align-items: stretch;
    flex-direction: row;
    justify-content: space-between;
  }

  height: 100vh;
`;

export const Aside = styled.aside`
  background-color: var(--purple-500);
  color: var(--white);

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 120px 80px;
  min-height: 100vh;

  strong {
    font: 400 36px "Poppins", sans-serif;
    line-height: 42px;
    margin-top: 16px;
  }

  p {
    font-size: 24px;
    line-height: 32px;
    margin-top: 16px;
    color: var(--gray-100);
  }
  img {
    max-width: 320px;
  }

  width: 100%;
  @media (min-width: 1130px) {
    width: 47%;
  }
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  min-height: 100vh;

  @media (min-width: 1130px) {
    width: 48%;
  }
`;

export const Wrapper = styled.div`
  width: 80%;

  @media (min-width: 1130px) {
    width: 70%;
  }

  @media (min-width: 1630px) {
    width: 41.88%;
  }

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  width: 100%;

  > .logo {
    margin-bottom: 50px;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  width: 100%;

  > form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 16px;
  }
`;
