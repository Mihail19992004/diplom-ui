import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Registration} from "../models/Registration/RegistrationComponent";
import MainContainer from "../components/MainContainer/MainContainer";
import AdminPage from "../components/AdminPage/adminPage";

const MainRoute = () => {
    return (
        <Router>
            <Routes>
                <>
                    <Route path="/auth" element={<Registration />} />
                    <Route path="/" element={<MainContainer />} />
                    <Route path='/admin' element={<AdminPage />} />
                        <Route
                            path="*"
                            element={<MainContainer/>}
                    />
                </>
            </Routes>
        </Router>
    );
};

export default MainRoute;