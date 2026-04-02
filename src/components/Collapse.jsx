import { useState } from "react";
import Arrow from "../assets/Vector.png";

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="collapse__title">{title}</h3>

        <img
          src={Arrow}
          alt="Ouvrir"
          className={`collapse__arrow ${isOpen ? "open" : ""}`}
        />
      </div>

      <div className={`collapse__content ${isOpen ? "open" : ""}`}>
        <div className="collapse__text">{children}</div>
      </div>
    </div>
  );
}
