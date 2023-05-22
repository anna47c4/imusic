import React from "react";

function Button({ className, desc, clickAction }) {
  return (
    <button className={className} onClick={clickAction}>
      {desc}
    </button>
  );
}

export default Button;
