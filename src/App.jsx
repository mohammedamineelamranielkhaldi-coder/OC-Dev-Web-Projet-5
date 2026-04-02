import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./router/Router";

function App() {
  return (
    <div className="layout">
      <Header />
      <div className="layout__content">
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
