import React, { forwardRef } from "react";
import styled from "styled-components";
const Input = forwardRef((props, ref) => {
  return (
    <InputDiv>
      <LabelInput htmlFor={props.id}>{props.labelName}</LabelInput>
      <StyledInput
        placeholder={props.placeholder || "..."}
        id={props.id}
        type={props.inputType}
        ref={ref}
      />
    </InputDiv>
  );
});

export default Input;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const LabelInput = styled.label`
  font-size: 20px;
  color: black;
  margin-top: 10px;
  border: 0;
  font-size: large;
  font-weight: bold;
`;
const StyledInput = styled.input`
  margin-top: 0.4rem;
  margin-bottom: 0.8rem;
  width: 500px;
  height: 50px;
  outline: 1px solid blue;
  &:focus {
    background-color: wheat;
    border: 0;
  }
`;
