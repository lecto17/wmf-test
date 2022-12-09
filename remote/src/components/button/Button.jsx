import React, { useState } from 'react';
import styled from "@emotion/styled";

const StyledButton = styled.button`
  background: #2eb500;
`;

export default function Button({ text }) {
  
  return (
    <StyledButton>
      { text }
    </StyledButton>
  );
}
