import React, { Component } from 'react';
import { css } from 'emotion';

/* Side Section Hover Styles */

const sideSectionHoverGrayscale = '0';

class MiddleSection extends Component {
  render() {
    return (
      	<div className="MiddleSection">
            <div className="MiddleTitle">
            	<div className="MiddleMainTitle">WELCOME TO POS 1</div>
            	<div className="MiddleSubTitle">PERSONALIZE A 1 ON 1 CONVERSATION BY TELLING US WHO YOU ARE BELOW</div>
            </div>
            <div className="MiddleContent">
            	<div className={css`
            		filter:grayscale(100%);
				    &:hover {
				      filter: grayscale(${sideSectionHoverGrayscale});
				      cursor: pointer;
				    }
				    &:hover .SideSectionTitle {
				      background-color:rgba(0,0,0,0.8);
					  box-shadow: 1px 2px 3px rgba(0,0,0,0.8);
					  color: rgba(255,255,255,1);
					}`} 
				    id="LeftSection"
			    >
            		<div className="SideSectionTitle">JUST OPENING?</div>
            	</div>
            	<div className={css`
            		filter:grayscale(100%);
				    &:hover {
				      filter: grayscale(${sideSectionHoverGrayscale});
				      cursor: pointer;
				    }
				    &:hover .SideSectionTitle {
				      background-color:rgba(0,0,0,0.8);
					  box-shadow: 1px 2px 3px rgba(0,0,0,0.8);
					  color: rgba(255,255,255,1);
					}`} 
				    id="RightSection"
				    >
            		<div className="SideSectionTitle">UPGRADING POS?</div>
            	</div>
            </div>
        </div>
    );
  }
}

export default MiddleSection;

Hi Claire,

Thank you, Jason and the 24 Digital team for concidering me for the role.

Regards,
Jake Piastrino