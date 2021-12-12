import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Registration} from "../../models/Registration/RegistrationComponent";
import MainContainer from "./MainContainer";

const MainRoute = () => {
    return (
            <Routes>
                <>
                <Route path="/auth" element={<Registration />} />
                <Route path="/" element={<MainContainer />} />
                </>
            </Routes>
    );
};

export default MainRoute;