// https://levelup.gitconnected.com/building-a-reusable-component-system-with-react-js-and-styled-components-4e9f1018a31c
//
import React from "react";
import styled from "styled-components";

import Loader from "./Loader";

const StyledButton = styled.button`
  font-family: Amazon Ember
  border: None
  background-color: #ff9900;
  color: #ffffff;
  padding: 12px;
  font-size: 14px;
`;

const Button = ({ loading, children, ...props }) => {
  return (
    <StyledButton {...props}>
      {loading ? <Loader small white /> : children}
    </StyledButton>
  );
};

export default Button;
