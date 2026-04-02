export default function Banner({ image, text }) {
  return (
    <div className="banner">
      <img src={image} alt="banner" />
      {text && <h1 className="banner__text">{text}</h1>}
    </div>
  );
}
