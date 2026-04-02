import logements from "../data/logements.json";
import Card from "../components/Card";
import Banner from "../components/Banner";
import HomeImage from "../assets/HomeImage.jpg";

export default function Home() {
  return (
    <div className="home container">
      <Banner image={HomeImage} text="Chez vous, partout et ailleurs" />

      <div className="cards-wrapper">
        <div className="cards-grid">
          {logements.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
