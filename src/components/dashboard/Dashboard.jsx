import React from "react";
import Navbar from "../navbar/Navbar";
import MainQuestion from "../questions/MainQuestion";
import QuestionList from "../questions/QuestionList";
import First from "../questions/first/First";
import Second from "../questions/Second"

const Dashboard = () => {
    return (
        <div>
            <Navbar/>
            <MainQuestion/>
            <QuestionList/>   
        </div>
    );
}

export default Dashboard;