import React from "react";
import { Link } from "react-router-dom";

const uudised = [
    {
        pealkiri: "Uudis 1",
        sisu: "Sisu 1"
    }
]

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>This is the home page</p>
            <Link to="/contact" state={uudised[0]}>Uudis 1</Link>
        </div>
    );
}

export default Home;
