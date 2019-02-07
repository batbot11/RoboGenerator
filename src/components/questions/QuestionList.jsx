import React from "react";
import {Segment} from "semantic-ui-react";
import First from "../questions/first/First";
import Second from "../questions/Second";


class QuestionList extends React.Component {

    state = {
        firstDone: false
    }

    nextQuestion = () => {
        this.setState({
            firstDone: true
        })
    }

    
    
    render () {
        return(
            <Segment secondary compact  >
                <First nextQuestion = {this.nextQuestion} />
               {this.state.firstDone && <Second/>} 
	        </Segment>
        );
    }
}

export default QuestionList;