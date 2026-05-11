import "./styles.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(
        "https://raw.githubusercontent.com/cederdorff/race/master/data/users.json ",
      );
      const data = await response.json();
      console.log(data);
      setUsers(data);
    }
    fetchUser();
  }, []);

  return (
    <main className="page-layout">
      <Navigation />
      <Header />
      <MainContent />

      <Footer />
      {users.map((user) => (
        <div key={user.id}>
          <h2>Hello, {user.name}</h2>
          <p>Your email is {user.mail}</p>
        </div>
      ))}
    </main>
  );
}
