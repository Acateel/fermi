import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <main>
        <img className="home_logo" src="/fermi-logo.png" />
        <img className="home_logo_text" src="/fermi.png" />
        <div className="home_links">
          <Link to="/login">Login</Link>
          <Link to="/registration">Registration</Link>
        </div>
      </main>
      <footer>
        <a href="https://github.com/Acateel/fermi">Github</a>
        <a href="mailto:acateely@gmail.com">Feedback</a>
      </footer>
    </div>
  );
};

export default Home;
