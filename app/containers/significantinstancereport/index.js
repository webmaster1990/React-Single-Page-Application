import React from 'react';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import SubHeader from 'components/SubHeader';
import SIRRightbar from 'components/SIRRightbar';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import './style.css';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  GetCurrentProject,
} from '../App/selectors';


export default class SignificantInstanceReport extends React.Component { // eslint-disable-line react/prefer-stateless-function
    ChangeSection = (event) => {

        this.setState({
          eventdetails:false,
          resultssummary:false,
          lessons:false,
          additionaldetails:false
        });

      switch (event) {
        case 'eventdetail':
            {
              this.setState({
                eventdetails:true,
                ActiveElement:"eventdetail"
              });
            }
          break;
          case 'results':
          {
            this.setState({
              resultssummary:true,
              ActiveElement:"results"
            });
          }
            break;
            case 'lessons':
            {
              this.setState({
                lessons:true,
                ActiveElement:"lessons"
              });
            }
              break;
              case 'additionaldetails':
              {
                this.setState({
                  additionaldetails:true,
                  ActiveElement:"additionaldetails"
                });
              }
                break;
        default:

      }

    };

    constructor(props) {
    super(props);
    this.state={
      eventdetails:true,
      resultssummary:false,
      lessons:false,
      additionaldetails:false,
      ActiveElement:"eventdetail"
    }
  }

  render() {
    return (
    	<div className="main-container">
      		 <Header currentproject={this.props.currentproject} location={this.props.location.pathname} />
      		 <Sidebar location={this.props.location.pathname} />

           <div className="page">
             <div className="page-content padding-30 container-fluid">
               <div className="row" data-plugin="matchHeight" data-by-row="true">
                 <div className="col-md-12">
                   <h1 className="heading30">Significant Instance Report (SIR)</h1>
                   <div className={this.state.eventdetails ? "inner-box CompletedForms" : "hidden inner-box CompletedForms"}>
                       <div className="box-heading">
                           <h1>
                                 <span className="EventTitle">Activity Overview</span>
                             </h1>
                         </div>
                         <div className="box-content">
                           <div className="ActivityOverviewForm">
                               <div className="form-columb">
                                   <div className="form-row">
                                       <label>Title of Event</label>
                                         <input type="text" placeholder="Enter the title of the event" />
                                     </div>
                                     <div className="form-row">
                                       <label>Place of Event</label>
                                         <input type="text" placeholder="Where is the event taking place?" />
                                     </div>
                                     <div className="form-row">
                                       <label>Authors of Report</label>
                                         <div className="dropdown">
                                           <select>
                                               <option>Everyone</option>
                                                 <option>Admin</option>
                                             </select>
                                         </div>
                                     </div>
                                     <div className="form-row">
                                       <label>Weather</label>
                                         <input type="text" placeholder="Weather"/>
                                     </div>
                                     <div className="form-row">
                                       <label>Environment/Conditions</label>
                                         <input type="text" placeholder="Environment/Conditions"/>
                                     </div>
                                 </div>
                                 <div className="form-columb">
                                   <div className="form-row width215">
                                       <label>Project</label>
                                         <div className="dropdown">
                                           <select>
                                               <option disabled="disabled">Select Project Name</option>
                                                 <option>Tawamandi Project</option>
                                                 <option>Project 1</option>
                                             </select>
                                         </div>
                                     </div>
                                     <div className="form-row inline-block width215">
                                       <label>Date of Event</label>
                                         <div className="date-piker">
                                         <input type="text" placeholder="Aug 5, 2016"/>
                                         <a href="#"><img src={require("../../../internals/images/icon-calendar.png")}/></a>
                                         </div>

                                     </div>
                                     <div className="form-row inline-block width155">
                                       <label>Duration of Event</label>
                                         <input type="text" placeholder="2 Hrs, 2 Mins"/>
                                     </div>
                                     <div className="form-row">
                                       <label>Boundary Partner</label>
                                         <div className="dropdown">
                                           <select>
                                                  <option disabled="disabled">Select Partner Name</option>
                                                  <option>Local Community Representatives (LCR)</option>
                                                  <option>Government Decision-makers (GDM)</option>
                                                  <option>Civil Society Organizations (CSO)</option>
                                             </select>
                                         </div>
                                     </div>
                                     <div className="form-row">
                                       <label>External Partners/Individuals/Organizations</label>
                                         <input type="text" placeholder="Enter any partner name(s)"/>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div className="significant-title">
                            <h4>Type of Significant Instance</h4>
                         </div>
                          <div className="significant-contant">
                            <ul>
                                <li>
                                  <div className="squaredThree">
                                    <input type="checkbox"  name="check" id="squaredThree1" value="None" />
                                    <label htmlFor="squaredThree1"></label>
                                    <p>Training</p>
                                  </div>
                                  </li>
                                  <li>
                                  <div className="squaredThree">
                                    <input type="checkbox"  name="check" id="squaredThree2" value="None" />
                                    <label htmlFor="squaredThree2"></label>
                                    <p>Discussion Group (informative)</p>
                                  </div>
                                  </li>
                                  <li>
                                  <div className="squaredThree">
                                    <input type="checkbox"  name="check" id="squaredThree3" value="None" />
                                    <label htmlFor="squaredThree3"></label>
                                    <p>Mentoring /Advising</p>
                                  </div>
                                  </li>
                                  <li>
                                  <div className="squaredThree">
                                    <input type="checkbox"  name="check" id="squaredThree4" value="None" />
                                    <label htmlFor="squaredThree4"></label>
                                    <p>Workhop</p>
                                  </div>
                                  </li>
                                  <li>
                                  <div className="squaredThree">
                                    <input type="checkbox"  name="check" id="squaredThree5" value="None" />
                                    <label htmlFor="squaredThree5"></label>
                                    <p>Conference</p>
                                  </div>
                                  </li>
                                  <li>
                                  <div className="squaredThree">
                                    <input type="checkbox"  name="check" id="squaredThree6" value="None" />
                                    <label htmlFor="squaredThree6"></label>
                                    <p>Information session</p>
                                  </div>
                                  </li>
                                  <li>
                                  <div className="squaredThree">
                                    <input type="checkbox"  name="check" id="squaredThree7" value="None" />
                                    <label htmlFor="squaredThree7"></label>
                                    <p>Focus Group (evaluative)</p>
                                  </div>
                                  </li>
                                  <li>
                                  <div className="squaredThree">
                                    <input type="checkbox"  name="check" id="squaredThree8" value="None" />
                                    <label htmlFor="squaredThree8"></label>
                                    <p>Interview (structured)</p>
                                  </div>
                                  </li>
                                  <li>
                                  <div className="squaredThree">
                                    <input type="checkbox"  name="check" id="squaredThree9" value="None" />
                                    <label htmlFor="squaredThree9"></label>
                                    <p>Other</p>
                                  </div>
                                  </li>
                                  <li>
                                  <div className="squaredThree">
                                    <input type="checkbox"  name="check" id="squaredThree10" value="None" />
                                    <label htmlFor="squaredThree10"></label>
                                    <p>Face-to-face Meeting</p>
                                  </div>
                                  </li>
                                  <li>
                                  <div className="squaredThree">
                                    <input type="checkbox"  name="check" id="squaredThree12" value="None" />
                                    <label htmlFor="squaredThree12"></label>
                                    <p>Public Event</p>
                                  </div>
                                  </li>
                                  <li>
                                  <div className="form-row">
                                          <input type="text" placeholder="Explain type here" />
                                      </div>
                                  </li>
                              </ul>
                              <div className="event">
                                <div className="event_top">
                                    <h5>What were the objectives of the event?</h5>
                                      <div className="squaredThree">
                                    <input type="checkbox"  name="check" id="squaredThree" value="None" />
                                    <label htmlFor="squaredThree"></label>
                                    <p>Not Applicable</p>
                                  </div>
                                  <div className="form-row">
                                          <textarea type="text" placeholder="Enter the objectives of this event" className="height140" ></textarea>
                                      </div>
                                  </div>
                              </div>
                          </div>
                    </div>
                    <div className={this.state.resultssummary ? "inner-box CompletedForms" : "hidden inner-box CompletedForms"}>
                        <div className="box-heading">
                            <h1>
                                  <span className="EventTitle">Results Summary</span>
                              </h1>
                          </div>
                          <div className="box-content">
                            <div className="ActivityOverviewForm">

                                    <div className="results-contant">

                                        <div className="event">
                                          <div className="event_top">
                                               <h5>1. Describe any change in the ACTIONS of the Boundary Partner in relation to this
                                                   Significant Instance.</h5>
                                                <div className="squaredThree">
                                                   <p></p>
                                                  </div>
                                                  <div className="form-row">
                                                      <input type="text" placeholder="Enter the change in the actions"  />
                                                  </div>
                                            </div>
                                            <div className="event_top innersection">
                                                 <h5>a.  Why is this change in the BPs actions SIGNIFICANT to this specific activity?</h5>
                                                  <div className="squaredThree">
                                                     <p></p>
                                                    </div>
                                                    <div className="form-row">
                                                        <input type="text" placeholder="Why is this change in the BPs actions SIGNIFICANT to this specific activity?" />
                                                    </div>
                                              </div>
                                        </div>

                                         <div className="event">
                                           <div className="event_top">
                                                <h5>2. Describe any change in the PRACTICES of the Boundary Partner in relation to this
                                                Significant Instance.</h5>
                                                 <div className="squaredThree">
                                                    <p></p>
                                                   </div>
                                                   <div className="form-row">
                                                       <textarea type="text" placeholder="Enter narrative description of ‘practices’ of BP here …." className="height140" ></textarea>
                                                   </div>
                                             </div>
                                             <div className="event_top innersection">
                                                  <h5>a. Why is this change in BP practices SIGNIFICANT in relation to this specific
                                                  activity?</h5>
                                                   <div className="squaredThree">
                                                      <p></p>
                                                     </div>
                                                     <div className="form-row">
                                                         <textarea type="text" placeholder="Enter narrative description of significance here …" className="height140" ></textarea>
                                                     </div>
                                               </div>
                                         </div>

                                         <div className="event">
                                           <div className="event_top">
                                                <h5>3. Describe any changes in the RELATIONSHIP of the Boundary Partner in relation to
                                                 this Significant Activity</h5>
                                                 <div className="squaredThree">
                                                    <p></p>
                                                   </div>
                                                   <div className="form-row">
                                                       <textarea type="text" placeholder="Enter narrative description of change in relationships here…" className="height140" ></textarea>
                                                   </div>
                                             </div>
                                             <div className="event_top innersection">
                                                  <h5>a. Why is this change in BP relationships SIGNIFICANT in relation to this activity?</h5>
                                                   <div className="squaredThree">
                                                      <p></p>
                                                     </div>
                                                     <div className="form-row">
                                                         <textarea type="text" placeholder="Enter narrative description of significance here …" className="height140" ></textarea>
                                                     </div>
                                               </div>
                                         </div>

                                         <div>
                                             <div className="form-row">
                                                  <label>Total number of participants (M/F) at the Significant Activity:</label>
                                              </div>
                                         </div>
                                         <div className="form-columb">

                                           <div className="form-row">
                                                <label>Male</label>
                                                <input type="text" placeholder="No of Male"  />
                                            </div>
                                         </div>
                                         <div className="form-columb">
                                           <div className="form-row">
                                                <label>Female</label>
                                                <input type="text" placeholder="No of Female"  />
                                            </div>
                                         </div>

                                    </div>

                              </div>
                          </div>
                     </div>
                     <div className={this.state.lessons ? "inner-box CompletedForms" : "hidden inner-box CompletedForms"}>
                         <div className="box-heading">
                             <h1>
                                   <span className="EventTitle">Lessons</span>
                               </h1>
                           </div>
                           <div className="box-content">
                             <div className="ActivityOverviewForm">
                                     <div className="significant-title">
                                        <h4>Describe how effective the implementation strategies used were and why?</h4>
                                     </div>
                                     <div className="significant-title">
                                        <h4>What challenges were encountered (logistical/process/content)?</h4>
                                     </div>
                                     <div className="significant-title">
                                        <h4>What lessons have been learned regarding conceptual and /or logistical issues?</h4>
                                     </div>
                                     <div className="significant-title">
                                        <h4>Which progress marker does this event fall under in relation to the LBM outcomes?</h4>
                                     </div>

                               </div>
                           </div>
                     </div>
                     <div className={this.state.additionaldetails ? "inner-box CompletedForms" : "hidden inner-box CompletedForms"}>
                         <div className="box-heading">
                             <h1>
                                   <span className="EventTitle">Additional Details</span>
                               </h1>
                           </div>
                           <div className="box-content">
                             <div className="ActivityOverviewForm">
                                     <div className="significant-title">
                                        <h4>What follow up actions need to be undertaken?</h4>
                                     </div>
                                     <div className="significant-title">
                                        <h4>Contact Details</h4>
                                     </div>
                                     <div className="significant-title">
                                        <h4>Valuable Quotes / Testimonies</h4>
                                     </div>
                                     <div className="significant-title">
                                        <h4>Overall Success</h4>
                                     </div>
                                     <div className="significant-title">
                                        <h4>Other Observations / Remarks</h4>
                                     </div>
                                     <div className="significant-title">
                                        <h4>What Sources of Data can be attached to support the findings documented in this SAR ?</h4>
                                     </div>
                               </div>
                           </div>
                      </div>
                 </div>
               </div>
             </div>
           </div>

           <SIRRightbar clickhandle={this.ChangeSection} ActiveElement={this.state.ActiveElement}/>

      </div>
    );
  }
}



const mapStateToProps = createStructuredSelector({
  currentproject:GetCurrentProject(),
});

export default connect(mapStateToProps, null)(SignificantInstanceReport);
