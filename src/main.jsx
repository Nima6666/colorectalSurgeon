import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <Helmet>
                <title>Colerectal Surgeon In Nepal</title>
                <meta
                    name="description"
                    content="Best Colerectal Surgeon In Nepal. Book your appointment Now."
                />
            </Helmet>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
