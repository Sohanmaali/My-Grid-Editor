import React from "react";

export default function Test({ h, p ,children}) {
  return (
    <>
      <div className="bg-success fs-bold">i am Testing component call👌👌</div>

      <div>
        <h1>{h}</h1>
        <p>{p}</p>
        <div className="inner-content">{children}</div>
      </div>
    </>
  );
}
