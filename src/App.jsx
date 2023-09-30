import { useState } from "react";
import "./App.css";
import AboutNew from "./components/AboutNew";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [myStyle, setMyStyle] = useState({
    color: "#00000094",
    backgroundColor: "#ffc1078a",
    padding: "10px",
  });

  const [changeBody, setChangeBody] = useState("#ffc1078a");

  document.body.style.backgroundColor = changeBody;

  const changeTheme = () => {
    setTimeout(() => {
      document.title = " Text_Utils";
    }, 4000);

    setTimeout(() => {
      document.title = " Install Text_Utils Now";
    }, 1000);

    if (myStyle.color === "#00000094") {
      setMyStyle({
        color: "rgb(14 7 7 / 58%)",
        backgroundColor: "#e64a1980",
        padding: "10px",
      });
      setChangeBody("rgb(229 122 89)");
    } else if (myStyle.color === "rgb(14 7 7 / 58%)") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        padding: "10px",
      });
      // document.body.style.backgroundColor = "#142aff";
      setChangeBody("rgb(0 0 0 / 72%)");
    } else if (myStyle.color === "white") {
      setMyStyle({
        color: "rgb(16 24 85 / 86%)",
        backgroundColor: "#3F51B5",
        padding: "10px",
      });
      // document.body.style.backgroundColor = "#9c3636";
      setChangeBody("#1565c0a8");
    } else if (myStyle.color === "rgb(16 24 85 / 86%)") {
      setMyStyle({
        color: "#00000094",
        backgroundColor: "#ffb30078",
        padding: "10px",
      });
      setChangeBody("#ffc1078a");
      // document.body.style.backgroundColor = "#ffc1078a";
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar
          title="Text_Utils"
          about="About_Us"
          cT={changeTheme}
          myStyle={myStyle}
        />
        <div className="container my-3">
          <Routes>
            <Route
              path="/about"
              element={<AboutNew changeBody={changeBody} myStyle={myStyle} />}
            ></Route>
            <Route
              exact path="/"
              element={
                <TextForm
                  heading="Enter The Text To Analyze Below"
                  myStyle={myStyle}
                />
              }
            ></Route>
            </Routes>

          {/* <About/> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
