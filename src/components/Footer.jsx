import Logo from "../assets/logoFooter.png"; 

export default function Footer() {
  return (
    <footer className="footer">
      <img src={Logo} alt="Kasa" className="footer__logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
