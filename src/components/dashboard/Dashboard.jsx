import React from "react";
import Navbar from "../navbar/Navbar";
import MainQuestion from "../questions/MainQuestion";
import QuestionList from "../questions/QuestionList";

const QuestionBank = [
    {
        id: 1,
        Question: "Whats's My Last Name?"
    },
    {
        id: 2,
        Question: "What's My College's Name?"
    },
    {
        id: 3,
        Question: "What's My Favoutite Food?"
    }

]


class Dashboard extends React.Component {

    state = {
        radioClick : false
    }

    handleRadioClick = () => {
        this.setState({
            radioClick: true
        })
    }

    render() {
        return(
        <div>
            <Navbar/>
            
                 <MainQuestion radioClick = {this.state.radioClick} onRadioClick = {this.handleRadioClick} />
                {this.state.radioClick && <QuestionList questions = {QuestionBank} />}
        </div>
        );
    }
}


export default Dashboard;