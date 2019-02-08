import React from "react";
import {Form, Button} from "semantic-ui-react";

const Question = ({questionToDisplay, handleClick}) => {
    return (
        <Form>
            <h3>{questionToDisplay}</h3>
            <Form.Group>
                <Form.Input placeholder="Enter Your Answer Here!" />
                <Button primary content="Hit It!"
                onClick = {handleClick}
                />
            </Form.Group>
        </Form>
    );
}

export default Question;