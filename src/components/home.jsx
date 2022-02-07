import { Link } from "react-router-dom";
import "./home.css"

const Home = () => {
    return (
        <div className="home-page">
            <div className="body">
            <h1 className="welcome">Welcome to Alpha-Delta Co.</h1>
            <h4>We're Happy to Have You</h4>
            <Link className="btn btn-secondary bg-gradient btn-block catalog-link" to="/catalog">
                --Take a peek at our catalog!!--
            </Link>
            </div>
        </div>
    )
}

export default Home;