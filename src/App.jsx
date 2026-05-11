import "./styles.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="page-layout">
      <Navigation />
      <Header />
      <MainContent />
      <Footer />
    </main>
  );
}
