import React from "react";
import copaStyles from "../copa-do-mundo-2022/Copa.module.css";
import libSulStyles from "../libertadores-sulamericana-2022/LibSul.module.css";

export default function Pote({ teams, pote, copa, ...props }) {
  const groups = ["A", "B", "C", "D", "E", "F", "G", "H"];

  return (
    <ul
      {...props}
      id={`pote-${pote}`}
      className={`${
        copa === "mundial" ? copaStyles.pote : libSulStyles.pote
      } list-inline text-lg-center col-8 col-sm-6 col-md-4 col-lg-3`}
    >
      <p className={`${copa !== "mundial" ? libSulStyles.p : copaStyles.p}`}>
        <b>Pote {pote}</b>
      </p>
      {teams.map((team, i) => (
        <li
          key={i}
          id={`${copa === "sulamericana" ? "sula" : ""}${
            pote === 1 ? "a1" : pote === 2 ? "b2" : pote === 3 ? "c3" : "d4"
          }${groups[i]}`}
          className={`${pote === 1 && groups[i] === "A" ? "a1A" : ""} ${
            copa !== "mundial" ? libSulStyles.li : ""
          }`}
        >
          <img
            src={`/src/projects/simulador-de-sorteio/assets/${copa}/${
              copa === "mundial"
                ? team === "New Zealand/Costa Rica"
                  ? "new rica"
                  : team === "Peru/Australia"
                  ? "perustralia"
                  : team === "Wales/Scotland/Ukraine"
                  ? "eu 4"
                  : team
                : team
            }.png`}
            alt={team}
            className={`${
              copa === "mundial" ? copaStyles.escudos : libSulStyles.escudos
            }${team === "Switzerland" ? ` ${copaStyles.suica}` : ""}`}
          />
          <span>
            {team}
            {team === "Qatar" || team === "Palmeiras" ? (
              <b className="ms-1 d-block d-md-inline-block">(Grupo A)</b>
            ) : (
              ""
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}
