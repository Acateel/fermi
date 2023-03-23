import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <img className="home_logo" src="/fermi-logo.png"/>
            <img className="home_logo_text" src="/fermi.png"/>
            <Link to="/login">Login</Link>
            <Link to="/registration">Registration</Link>
            <footer>
                <a href="https://github.com/Acateel/fermi">Github</a>
                <a href="mailto:acateely@gmail.com">Feedback</a>
            </footer>
        </div>
    )
}

export default Home;