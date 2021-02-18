import React from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 30px;
`;

export const Input = styled(TextField)`
  width: 80%;
`;
