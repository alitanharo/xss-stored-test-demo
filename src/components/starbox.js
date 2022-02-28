import React from "react";

const starStyle = {
  size: "500 px",
  color: "black",
  text_align: "right",
  width: "400px",
  border: "400px",
};

function StarBox() {
  return (
    <div className="starbox">
      <span style={starStyle} id="flag">
        &#9734;&#9734;&#9734;
      </span>
    </div>
  );
}

export default StarBox;
