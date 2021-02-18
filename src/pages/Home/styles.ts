import React from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import {
  FiChevronRight,
  FiChevronLeft,
  FiChevronsRight,
  FiChevronsLeft,
} from "react-icons/fi";

export const PageContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 48px;
`;

export const SearchInput = styled(TextField)`
  width: 80%;
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
