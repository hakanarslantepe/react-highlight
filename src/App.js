import React, { Fragment } from "react";
import { useState } from "react";
import "./App.css";

function Highlight({ text, match, render }) {
  const type = {
    hashtag: "(#[a-z]+)",
    mention: "(@[a-z]+)",
  }[match];
  let regExp = new RegExp(type || `(${match}+)`, "gi");
  let parts = text.split(regExp);
  return parts.map((part, id) => (
    <Fragment key={id}>{regExp.test(part) ? render(part) : part}</Fragment>
  ));
}

const App = () => {
  const [value, setValue] = useState(null);
  const text = `Lorem ipsum dolor sit amet, et perpetua abhorreant cum, sale volumus inciderint quo id. Agam homero molestiae ei vel, @lorem nemore nostrum oportere an mei. In erat prodesset has, #lorem cum inani minim electram ex. In habeo saperet sit. Albucius consulatu appellantur ad mel, pri eu lobortis pericula liberavisse, postea probatus at pro. Vis in unum audiam aperiam, essent consulatu reprimique sea ea. Quo dicam dolorum ut. Nam ludus maiestatis no. Augue ponderum appellantur est et, in molestiae voluptaria eam. Eam legere disputationi ne, ad ocurreret accusamus deseruisse eos.`;
  return (
    <div className="content">
      <h1>React Highlight , Mention and Hashtag</h1>
      <Highlight
        text={text}
        match={value}
        render={(part) => <mark>{part}</mark>}
        className="text"
      />
      <br />
      <div className="buttons">
        <div>
          <button
            className="button"
            onClick={() =>
              setValue(prompt("Which word would you like to highlight?"))
            }
          >
            Text
          </button>
          <button className="button" onClick={() => setValue("mention")}>
            Mention
          </button>
          <button className="button" onClick={() => setValue("hashtag")}>
            Hashtag
          </button>
        </div>
        <div><button className="clear-button" onClick={() => setValue("xxxxx")}>
          Clear
        </button></div>
        
      </div>
    </div>
  );
};

export default App;
