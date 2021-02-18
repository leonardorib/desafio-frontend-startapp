import React, { useState } from "react";
import { TextField } from "@material-ui/core";

import { PageContainer, Title, Input } from "./styles";

const Home: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <PageContainer>
      <Title>Movie Finder</Title>
      <Input />
    </PageContainer>
  );
};

export default Home;
