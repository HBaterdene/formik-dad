import React, { useState } from "react";
import "./styles/main.css";
import "antd/dist/antd.css";
import Register from "./pages/register";
import RegisterAntd from "./pages/register-antd";
import Header, { HeaderElement } from "./components/header";
function App() {
  const [active, setActive] = useState(true);
  console.log(active);
  return (
    <div className="container">
      <div className="form-wrapper">
        <Header>
          <HeaderElement
            active={!active ? true : false}
            onClick={() => setActive(false)}
          >
            Маягт
            <div />
          </HeaderElement>
          <HeaderElement
            active={active ? true : false}
            onClick={() => setActive(true)}
          >
            Маягт /with antd/
            <div />
          </HeaderElement>
        </Header>
        {!active ? <Register /> : <RegisterAntd />}
      </div>
    </div>
  );
}

export default App;
