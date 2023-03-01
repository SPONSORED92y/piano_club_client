import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Reserve from "./Reserve";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/Login" />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/Reserve" element={<Reserve />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;