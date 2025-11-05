import React from "react";
import { Link } from "react-router";

function App() {
    const element = (
        <div>
            <p>GURT!!!</p>
            <Link to="/page">Page</Link>
        </div>
    )


    return element;
}

export default App;