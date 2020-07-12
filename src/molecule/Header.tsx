import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  height: 50px;
  background-color: gray;
  font-size: 20px;
  color: white;
  padding: 10px;
`;

export default class Header extends React.Component {
  render(): JSX.Element {
    return <HeaderDiv>My Admin Tools</HeaderDiv>;
  }
}
