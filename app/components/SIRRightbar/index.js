

import React, { PropTypes } from 'react';
function SIRRightbar(props) {
    console.log(props.ActiveElement);
  return (

    <div className="right-menu">
        <ul>
              <li className="topli"><span>New Report</span><p>Significant Instance Report</p></li>
              <li><a onClick={props.clickhandle.bind(this,"eventdetail")}  className={props.ActiveElement=="eventdetail"?"active":""} href="#">Event Details</a></li>
              <li><a onClick={props.clickhandle.bind(this,"results")}  className={props.ActiveElement=="results"?"active":""}  href="#">Results Summary</a></li>
              <li><a onClick={props.clickhandle.bind(this,"lessons")}  className={props.ActiveElement=="lessons"?"active":""}  href="#">Lessons</a></li>
              <li><a onClick={props.clickhandle.bind(this,"additionaldetails")}  className={props.ActiveElement=="additionaldetails"?"active":""}  href="#">Additional Details</a></li>
          </ul>
          <div className="bottom-btns">
            <a className="right-save-btn" href="#"><img src={require("../../../internals/images/icon-save.png")}/> &nbsp;<span>Save & Complete</span></a>
              <a href="#">Cancel</a>
          </div>
   </div>

  );
}
export default SIRRightbar;
