import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import Header from "./molecule/Header";
import Menu from "./molecule/Menu";
import Search from "./pages/Search";
import List from "./pages/List";
import Flex from "./atom/Flex";

function App(): React.ReactElement {
  const [collaspe, setCollaspe] = useState<boolean>();
  return (
    <div>
      <Router>
        <Header />
        <Flex>
          <Menu />
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route path="/list" component={List} />
        </Flex>
      </Router>
    </div>
  );
}

export default App;
