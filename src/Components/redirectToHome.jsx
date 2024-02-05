import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Home from "../pages/Home";

export default function RedirectToHome() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/");
    }, []);
}
