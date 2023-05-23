/* eslint-disable react/prop-types */
/*import { useState } from "react";
import { useRef } from "react";
function Collapsible(props) {
  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  };

  return (
    <>
      <div>
        <button onClick={toggle}>{props.label}</button>
      </div>
      <div className="content-parent">
        ref=
        {contentRef.map(
          (ref) =>
            (style = open
              ? { height: contentRef.current.scrollHeight + "px" }
              : { height: "0px" } >
                <div className="content">{props.children}</div>)
        )}}
      </div>
    </>
  );
}

export default Collapsible;
 */

/* eslint-disable react/prop-types */
import { useState, useRef } from "react";

function Collapsible(props) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef();

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div>
        <button onClick={toggle}>
          {props.label}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="15"
            viewBox="0 96 960 960"
            width="15"
          >
            <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z" />
          </svg>
        </button>
      </div>
      <div
        className="content-parent"
        style={
          open
            ? { height: contentRef.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <div className="content" ref={contentRef}>
          {props.children}
        </div>
      </div>
    </>
  );
}

export default Collapsible;
