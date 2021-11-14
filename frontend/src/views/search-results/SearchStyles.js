import styled from "styled-components";

const SearchStyles = styled.div`
  display: flex;
  background-color: #484848;
  width: 100%;
  justify-content: flex-start;
  /* width: auto; */
  /* height: 100%; */
  margin-left: 75px;
`;

const SearchInput = styled.input`
  width: 600px;
  height: 40px;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  border: none;
  background-color: white;
  :focus {
    outline: none;
  }
`;
const SearchInputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  font-family: "Roboto Mono";
  width: 100%;
  padding: 15px 8px;
  height: 40px;
  background-color: #484848;
  border-radius: 10px;
`;
const SearchIconContainer = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 50px;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
`;

export { SearchStyles, SearchInput, SearchInputContainer, SearchIconContainer };