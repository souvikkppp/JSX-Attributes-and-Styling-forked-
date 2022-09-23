import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200/300?grayscale";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>

    <div>
      <img src={img} alt="random" />
      {/* we need to add alt attribute also coz its JSX */}
      {/*we need to close tags like <img ..../>like this coz its jsx */}
    </div>
  </div>,
  document.getElementById("root")
);
