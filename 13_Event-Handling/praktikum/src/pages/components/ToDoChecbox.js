import React from "react";

export default function TodoChecbox({ onClick, defaultChecked }) {
  return (
    <div style={{ display: "inline-block", marginLeft: "-20px", marginRight: "10px" }}>
      <input type="checkbox" onClick={onClick} defaultChecked={defaultChecked} />
    </div>
  );
}
