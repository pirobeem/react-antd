import React from "react";
import styled from "styled-components";
import { DatePicker, Input } from "antd";
import Flex from "../atom/Flex";
import DateRange from "../molecule/DateRange";

const SearchDiv = styled.div`
  mergin: 5px;
  padding: 5px;
`;

const Box = styled.div`
  margin: 5px;
  padding: 5px;
  border: 1px solid gray;
`;

export default class Search extends React.Component {
  render() {
    return (
      <SearchDiv>
        <Flex>
          <Box>
            <div style={{ paddingLeft: "5px", fontWeight: "bold" }}>
              Search Condition
            </div>
            <Input
              placeholder="shopId"
              addonBefore={"shopId"}
              maxLength={8}
              style={{ padding: "5px" }}
            />
            <DateRange />
          </Box>
        </Flex>
      </SearchDiv>
    );
  }
}
