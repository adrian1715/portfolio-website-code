import React, { useState } from "react";

export default function Alert({ type, message }) {
  const [isShowing, setIsShowing] = useState(true);

  return (
    <>
      {isShowing && (
        <div
          className={`alert alert-${type} mt-4 d-flex justify-content-between w-100`}
        >
          <span>
            <i
              className={`bi bi-${
                type === "success" ? "check" : "x"
              }-circle-fill me-2`}
            ></i>
            {message}
          </span>
          <button
            onClick={() => setIsShowing(false)}
            type="button"
            className="btn-close"
            aria-label="Close"
          ></button>
        </div>
      )}
    </>
  );
}
