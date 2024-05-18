import { useState } from "react";
import "./Navbar.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
export default function Navbar() {
  const [nav, setNav] = useState(false);

  let links = [
    { id: 1, link: "home" },
    { id: 2, link: "skills" },
    { id: 3, link: "projects" },
    { id: 4, link: "contact" },
  ];

  return (
    <>
      <div className="main">
        <div>
          <h1 className="name">shrishti chaurasia</h1>
        </div>

        <ul className="links">
          {links.map((link) => (
            <li key={link.id} className="linklist">
              {link.link}
            </li>
          ))}
        </ul>

        <div className="linkblock" onClick={() => setNav(!nav)}>
          {nav ? <ImCross /> : <FaBarsStaggered className="lines" />}
        </div>

        {nav && (
          <ul className="linkscol">
            {links.map((link) => (
              <li key={link.id} className="linklistcol">
                {link.link}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
