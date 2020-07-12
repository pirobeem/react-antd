import React from "react";
import Flex from "../atom/Flex";
import { DatePicker } from "antd";
import styled from "styled-components";

const Title = styled.div`
  border: 1px solid #d9d9d9;
  padding 4px;
  background-color: #fafafa;
`;

export default class DateRange extends React.Component {
  render(): JSX.Element {
    return (
      <Flex style={{ paddingLeft: "5px", paddingRight: "5px" }}>
        <Title>RegDate</Title>
        <DatePicker.RangePicker showTime={false} />
      </Flex>
    );
  }
}
