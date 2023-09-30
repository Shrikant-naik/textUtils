import React from "react";

const AboutNew = (props) => {
  // const [myStyle, setMyStyle] = useState({
  //   color: "#00000094",
  //   backgroundColor: "#ffb30078",
  //   padding: "10px",
  // });

  // const changeTheme = () => {
  //   if (myStyle.color === "#00000094") {
  //     setMyStyle({
  //       color: "rgb(14 7 7 / 58%)",
  //       backgroundColor: "#e64a1980",
  //       padding: "10px",
  //     });
  //   } else if (myStyle.color === "rgb(14 7 7 / 58%)") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       padding: "10px",
  //     });
  //   } else if (myStyle.color === "white") {
  //     setMyStyle({
  //       color: "#d6b3b3",
  //       backgroundColor: "#3F51B5",
  //       padding: "10px",
  //     });
  //   } else if (myStyle.color === "#d6b3b3"){
  //     setMyStyle({
  //       color: "#00000094",
  //       backgroundColor: "#ffb30078",
  //       padding: "10px",
  //     });
  //   }
  // };

  return (
    <div className="about">
      <h1
        className="my-3"
        style={{
          color: props.myStyle.color,
          textAlign: "center",
          fontFamily: "'Varela Round', sans-serif",
        }}
      >
        About Us - Developers
      </h1>

      <div className="accordion" id="accordionExample" style={props.myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{ backgroundColor: props.changeBody }}
            >
              <b>Developer #1</b>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.changeBody,
                fontFamily: "'Josefin Sans', sans-serif",
              }}
            >
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{ backgroundColor: props.changeBody }}
            >
              <b>Developer #2</b>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.changeBody,
                fontFamily: "'Josefin Sans', sans-serif",
              }}
            >
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{ backgroundColor: props.changeBody }}
            >
              <b>Developer #3</b>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.changeBody,
                fontFamily: "'Josefin Sans', sans-serif",
              }}
            >
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutNew;
