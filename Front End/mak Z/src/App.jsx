import React from 'react';
import LandingPage from "./components/Landing/LandingPage.jsx";
import {Outlet} from "react-router-dom";

function App() {
    return (
        <div>
          <Outlet/>
        </div>
    );
}

export default App;
