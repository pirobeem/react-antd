import React from "react";
import { Menu } from "antd";
import { SearchOutlined, BarsOutlined } from "@ant-design/icons";

export default class Header extends React.Component {
  render(): JSX.Element {
    return (
      <Menu>
        <Menu.Item key="search" icon={<SearchOutlined />}>
          Search
        </Menu.Item>
        <Menu.Item key="list" icon={<BarsOutlined />}>
          List
        </Menu.Item>
      </Menu>
    );
  }
}
