import styled from "styled-components";

const TypeAheadContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto Mono";
  float: left;
  position: relative;
  border-radius: 5px;
  height: fit-content;
  width: 630px;
  padding: 10px 10px;
  margin-left: -50px;
  background-color: white;
`;

const HorizontalLine = styled.div`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 0.5em 0;
  padding: 0;
`;

export { TypeAheadContainerStyles, HorizontalLine };
