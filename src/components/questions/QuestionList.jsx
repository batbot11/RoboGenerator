import React from "react";
import {Segment} from "semantic-ui-react";
import Question from "./Question";

var index = 1;

class QuestionList extends React.Component {

    state = {
        selectedQuestion: null
    }


    componentDidMount() {
        this.props.questions.map(question => {
            if (question.id === index) {
                this.setState({
                    selectedQuestion: question.Question
                })
            }
        })
    }


    handleClick = () => {
        index = ++index;
        this.props.questions.map(question => {
            if (question.id === index) {
                this.setState({
                    selectedQuestion: question.Question
                })
            }
        })
    }

    render () {
        return (
            <Segment compact secondary >
                <Question questionToDisplay = {this.state.selectedQuestion}
                handleClick = {this.handleClick}
                />                    
            </Segment>
        )
    }
}

export default QuestionList;