import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;

  background-color: var(--white);
  border-radius: 8px;
  margin-bottom: 8px;

  > span {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
    font: 400 16px "Poppins", sans-serif;
  }
`;
export const Footer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-left: auto;

  .icon-column {
    font: 400 16px "Poppins", sans-serif;
    > svg,
    img {
      width: 24px;
      height: 24px;
      fill: var(--gray-200);
      margin-left: 8px;
    }
    display: flex;
    align-items: center;
    color: var(--gray-200);
  }
`;

export const ProfileInfos = styled.div`
  display: flex;
  align-items: center;

  font: 400 14px "Poppins", sans-serif;
  color: var(--gray-300);
`;

export const Avatar = styled.div`
  background: ${(props) =>
    props.title ? `url(${props.title})` : "var(--purple-500)"};

  width: 32px;
  height: 32px;

  border-radius: 50%;
  margin-right: 8px;
`;
