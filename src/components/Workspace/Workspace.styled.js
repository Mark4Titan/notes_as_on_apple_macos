import styled from "@emotion/styled";

export const DivWork = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  background-color: #fafaf8;
  border: solid 1px #d6d6d6;
  border-bottom-right-radius: 5px;
`;
export const DivContent = styled.div`
  padding: 20px;
  display: grid;
  grid-template: 30px 35px 1fr/1fr;
  grid-gap: 10px;
`;
export const H2Data = styled.h2`
  display: grid;
  justify-items: center;
  align-items: center;
  justify-content: center;
  color: #00000066;
  font-size: 17px;
  letter-spacing: 1px;
  font-family: inherit;
`;
export const InputTitle = styled.input`
  display: grid;
  justify-items: center;
  align-items: center;
  justify-content: start;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  font-family: inherit;
  outline: none;
  border: none;
  background-color: transparent; 
`;
export const TContent = styled.textarea`
  display: grid;
  justify-items: center;
  align-items: center;
  justify-content: start;
  font-size: 17px;
  letter-spacing: 1px;
  font-family: inherit;
  resize: none;
  border: none;
  background-color: transparent; 
  max-width: 100%;
  max-height: 100%;
  outline: none;

`;
