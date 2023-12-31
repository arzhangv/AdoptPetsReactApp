import SearchParams from "./SearchParams.jsx";
import React from "react";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import { createRoot } from "react-dom/client";
import Details from "./Details.jsx";

// modify the createRoot call, delete "ReactDOM"

const App = () => {
    return (
        <BrowserRouter>
            <h1>Adopt Me!</h1>
            <Routes>
                <Route path="/details/:id" element={<Details/>} />
                <Route path="/" element={<SearchParams/>}/>
                 
            </Routes>
        </BrowserRouter>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
