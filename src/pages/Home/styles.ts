import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin-top: 30px;
  font-size: 48px;
  margin-bottom: 30px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 60px;
  font-size: 20px;
  border: 0;
  border-radius: 5px;
  background-color: #ffffff;
  margin-bottom: 30px;
  padding-left: 20px;
  max-width: 1000px;
`;

export const MoviesContainer = styled.div`
  margin-left: 30px;
  margin-right: 30px;
`;

export const NavigationFooter = styled.div`
  margin-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NavigationBack = styled.div``;

export const NavigationFoward = styled.div``;

export const PageButton = styled.button`
  :hover {
    svg {
      color: #ffa500;
    }
  }
`;

export const PageNumber = styled.span`
  font-size: 20px;
`;
