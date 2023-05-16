import styled from "@emotion/styled";

export const DivSearch = styled.div`
  position: relative; 
  
  margin-right: ${P=>P.isW ? 10 : 20}px;

  animation: slideSor 0.4s ease-in-out;  

@keyframes slideSor {
  from { transform: translateX(-80%); 
    opacity: 0;
  }
  to { transform: translateX(0); 
    opacity: 1;
  }
}

`;

export const SearchInput = styled.input`
  padding: 0 5px 0 30px ;
  border: solid 1px #fafaf8;
  background-color: #ffffff8c;
  border-radius: 5px;
  box-shadow: 0px 3px 5px 1px #4f4f4f5e;
  width: 135px;
  height: 26px;
  border: none;
  outline: none; 
  &:hover{
    background-color: #fafaf8;
  }
  &:focus{
    background-color: #fafaf8;
  }
`;
