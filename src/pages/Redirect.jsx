import React, { useEffect } from "react";
import { useNavigate, redirect } from "react-router-dom";
import Spinner from "../components/UI/Spinner";

export default function Redirect({ path }) {
  useEffect(() => {
    window.location.href = path;
  }, []);

  return (
    <h1>
      Redirecting <Spinner />
    </h1>
  );
}
