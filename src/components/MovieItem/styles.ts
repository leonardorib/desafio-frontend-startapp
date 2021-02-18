import styled from "styled-components";

export const MovieItemContainer = styled.a`
  display: flex;
  text-decoration: none;
  margin-top: 10px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-top: 20px;
  width: 100%;
  max-width: 800px;
  background-color: #ffffff;
  border-radius: 10px;
  transition: transform(0.2s);

  &:hover {
    transform: translateX(10px);
  }
`;

export const InfoContainer = styled.div`
  margin-left: 30px;
  background-color: #ffffff;
`;

export const Poster = styled.img`
  height: 170px;
  border-radius: 5px;
  margin-top: 15px;
`;

export const Title = styled.h2`
  margin-top: 5px;
  background-color: #ffffff;
  margin-bottom: 15px;
`;

export const Sinopsis = styled.p`
  padding-right: 30px;
  background-color: #ffffff;
`;
