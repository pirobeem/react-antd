import React, { useState } from "react";
import { Moment } from "moment";
import "./App.css";
import "antd/dist/antd.css";

import { DatePicker, message } from "antd";

function App(): React.ReactElement {
  const [date, setDate] = useState<Moment>();
  const handleChange = (value: Moment | null): void => {
    message.info(
      `Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`
    );
    setDate(value || undefined);
  };
  return (
    <div style={{ width: 400, margin: "100px auto" }}>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        Selected Date: {date ? date.format("YYYY-MM-DD") : "None"}
      </div>
    </div>
  );
}

export default App;
