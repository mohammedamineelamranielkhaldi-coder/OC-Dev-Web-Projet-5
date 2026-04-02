import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import Star from "../assets/Star.png";

export default function Logement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/404" />;
  }

  const rating = parseInt(logement.rating);
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="logement container">

      {/* Carrousel */}
      <Slideshow pictures={logement.pictures} />

      <div className="logement__top">
        {/* Colonne gauche */}
        <div className="logement__info">
          <h1 className="logement__title">{logement.title}</h1>
          <p className="logement__location">{logement.location}</p>

          <div className="logement__tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* Colonne droite */}
        <div className="logement__host-rating">
          <div className="logement__host">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>

          <div className="logement__rating">
            {stars.map((num) => (
              <img
                key={num}
                src={Star}
                alt="star"
                className={num <= rating ? "star red" : "star grey"}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Collapses */}
      <div className="logement__collapses">
        <Collapse title="Description">
          {logement.description}
        </Collapse>

        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((eq, index) => (
              <li key={index}>{eq}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}
