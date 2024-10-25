import React, { Fragment } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { formatLinkPath } from "../utils/formatLinkPath";

export default function NavLinkDropdown({ link, projects }) {
  const { pathname } = useLocation();
  const isActive =
    (pathname === "/projects" && projects) ||
    (pathname === "/certificates" && !projects);

  return (
    <Fragment key={link.id}>
      <li className="nav-item dropdown">
        <NavLink
          className="nav-link dropdown-toggle"
          style={{ fontWeight: isActive ? "bold" : "" }}
          role="button"
          data-bs-toggle="dropdown"
        >
          {formatLinkPath(link.path)}
        </NavLink>
        <ul className="dropdown-menu">
          {link.items.map((item, index) =>
            index < 3 ? ( // limiting dropdown items up to 3
              <li key={index}>
                {projects ? (
                  <a
                    className="dropdown-item"
                    href={`${link.path}/${item[0]
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {item}
                  </a>
                ) : (
                  <Link
                    className="dropdown-item"
                    to={`${link.path}/${item.toLowerCase().replace(" ", "-")}`}
                  >
                    {item}
                  </Link>
                )}
              </li>
            ) : index === 3 ? ( // show more
              <Fragment key={index}>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to={link.path} className="dropdown-item">
                    See more...
                  </Link>
                </li>
              </Fragment>
            ) : null
          )}
        </ul>
      </li>
    </Fragment>
  );
}
