import React from "react";
import { Login } from "@/pages/Auth/Login";
import { Register } from "@/pages/Auth/Register";
import { Home } from "@/pages/Home";
import { Quiz } from "@/pages/Home/Quiz";
import { Routes, Route } from "react-router-dom";
import { Results } from "@/pages/Home/Results";


const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quizes/:subject" element={<Quiz />} />
                <Route path="/results" element={<Results />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    );
};

export default Router;