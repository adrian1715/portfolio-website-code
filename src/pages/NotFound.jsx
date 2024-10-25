import React from "react";
import RootElement from "./RootElement";
import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <>
      <RootElement>
        <Helmet>
          <title>Not found - Adrian Lobato</title>
        </Helmet>
        <h1>NotFound</h1>
        <p>Your page was not found.</p>
      </RootElement>
    </>
  );
}
