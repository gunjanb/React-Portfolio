import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <p>
        This is the first page.
        <br />
        Click on the button below.
      </p>
      <Link to="/main">
        <button>Lets Go</button>
      </Link>
    </div>
  );
}

export default Homepage;
