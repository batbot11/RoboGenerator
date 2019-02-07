import React from "react";
import { Radio, Icon, Segment } from 'semantic-ui-react';

const First = ({nextQuestion}) => (
	
	  <span>
		  YES! <Radio toggle onClick = {nextQuestion} /> NO!
	  </span>
);

export default First;