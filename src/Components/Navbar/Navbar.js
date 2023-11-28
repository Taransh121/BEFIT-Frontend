import { useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
// import "./Navbar.css";


export const Navbar = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 200) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    // let location = useLocation();
    const navigate = useNavigate();
    const logoutbtn = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }
    return (
        // <nav className="navbar navbar-expand-lg bg-light navbar-light">
        <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${colorChange ? 'bg-dark' : ''}`} id="mynav">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"> <span className="text-danger">BE</span>FIT </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" duration={500} aria-current="page" to="home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" duration={500} aria-current="page" to="features">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" duration={500} offset={-100} smooth={true} to="about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" duration={500} offset={-50} to="trainers">Trainers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" duration={500} offset={-120} to="pricing">Pricing</Link>
                        </li>
                    </ul>

                    {!localStorage.getItem("token") ? <form className="d-flex" role="search">
                        <Link className="btn btn-outline-danger mx-0" to="/login" role="button">Get Started</Link>
                    </form> : <button onClick={logoutbtn} className='btn btn-outline-light'>Logout</button>}
                </div>
            </div>
        </nav>

    )
}
