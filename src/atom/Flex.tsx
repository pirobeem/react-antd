import React, { ReactNode } from "react";
import CSS from "csstype";

interface Props {
  style?: CSS.Properties;
  children: ReactNode;
}

export default class Flex extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <div style={{ ...this.props.style, display: "flex" }}>
        {this.props.children}
      </div>
    );
  }
}
