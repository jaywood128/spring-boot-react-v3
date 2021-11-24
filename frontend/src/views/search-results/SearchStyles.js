import styled from "styled-components";

const SearchStyles = styled.div`
  display: flex;
  background-color: #484848;
  width: 100%;
  justify-content: flex-start;
  margin-left: 75px;
  margin-bottom: 75px;
`;

const SearchInput = styled.input`
  width: 600px;
  height: 50px;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
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
`;
const SearchIconContainer = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
`;

export { SearchStyles, SearchInput, SearchInputContainer, SearchIconContainer };
