import styled from "styled-components";

const TypeAheadContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto Mono";
  /* float: left; */
  position: relative;
  z-index: 200;
  border-radius: 5px;
  height: fit-content;
  width: 630px;
  padding: 10px 10px;
  margin-left: -50px;
  background-color: white;
`;

const HorizontalLine = styled.div`
  display: block;
  height: 5px;
  border: 0;
  border-top: 1px solid grey;
  margin: 0.1em 0;
  padding: 0;
  width: 100%;
`;

export { TypeAheadContainerStyles, HorizontalLine };
