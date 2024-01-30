import Alert from "./Alert";
import React, { useState } from "react";

interface Props {
  children: string;
  colour?: "primary" | "secondary" | "danger" | "info";
  onClick: () => void;
}

function Button({ children, colour = "secondary", onClick }: Props) {
  return (
    <>
      <div>
        <button className={`btn btn-${colour}`} onClick={onClick}>
          {children}
        </button>
      </div>
    </>
  );
}

export default Button;
