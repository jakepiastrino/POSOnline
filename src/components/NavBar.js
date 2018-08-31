import React, { Component } from 'react';
import '../css/NavBar.css';
import { css } from 'emotion';

	/* Button Hover Styles */

const buttonHoverColor = 'rgba(50,50,50,1)';
const buttonHoverBackgroundColor = 'rgba(245,245,245,1)';

	/* Class */

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
      	<div className="BodyContentWidthRestrict">
          	<button
          	className={css`
			    &:hover {
			       color: ${buttonHoverColor};
			       background-color: ${buttonHoverBackgroundColor};
		    	}
		    `}
		    > 
		    	MENU 
		    </button>
        </div>
      </div>
    );
  }
}

export default NavBar;