import React from "react";
import styled from "styled-components";

import Flex from "./basic/Flex";
import Button from "./basic/Button";
import pic from "../placeholder.jpg";

const ProfileContainer = styled.div`
  background: #d1ecfe;
  display: flex;
  flex-direction: column;
`;

const StyledProfileImg = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
`;

const StyledInput = styled.input`
  width: 33vw;
  font-size: 14px;
  border: None;
  border-bottom: 1px solid black;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 60px;
`;

const Profile = () => {
  return (
    <ProfileContainer>
      <Flex column alignCenter>
        <Flex column>
          <StyledProfileImg src={pic} alt="IKEA dude" />
        </Flex>
        <Flex column>
          <StyledLabel>Name</StyledLabel>
          <StyledInput></StyledInput>
          <StyledLabel>Email</StyledLabel>
          <StyledInput></StyledInput>
        </Flex>
        <Flex justifyEnd>
          <Button>CONFIRM</Button>
        </Flex>
      </Flex>
    </ProfileContainer>
  );
};

export default Profile;
