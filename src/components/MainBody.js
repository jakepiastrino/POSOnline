import React, { Component } from 'react';
import '../css/MainBody.css';
import MainSection from './mainBody/MainSection';
import MiddleSection from './mainBody/MiddleSection';

class MainBody extends Component {
  render() {
    return (
      <div className="MainBody">
      	<div className="BodyContentWidthRestrict">
      		<MainSection />
      		<MiddleSection />
      		<div className="LowerSection">I AM THE LOWER SECTION</div>
      	</div>
      </div>
    );
  }
}

export default MainBody;