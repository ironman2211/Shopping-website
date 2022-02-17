import React from "react";
import styled from "styled-components";
import Directory from "../../components/directory-components/directory.js";
const Homepage = () => (
  <HomeComponent>
    <Directory></Directory>
  </HomeComponent>
);

const HomeComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
`;

export default Homepage;
