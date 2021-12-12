import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-page">
            <h1>Welcome to my super organika store</h1>
            <h4>Fresh product, always</h4>
            <Link className="btn btn-info btn-block" to="/catalog">
                Check our amazing catalog
            </Link>
        </div>
    )
}

export default Home;