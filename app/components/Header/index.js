import React from 'react';
import SubHeader from '../SubHeader';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

function Header(props) {
const menulist=[];
var currentproject=props.currentproject;
const currentboundry=props.currentboundry;
const location=props.location;
switch(location){
     case "/":
     {
        menulist.push({name:"Integrity Watch Afghanistan",route:"#",isactive:1});
     }
     break;
    case "/externalresources":
    case "/boundarypartners":
    case "/projectoverview":
     {
        menulist.push({name:"Project List",route:"",isactive:0,isroute:1});
        menulist.push({name:currentproject,route:"#",isactive:1,isroute:0});
     }
     break;
    case "/boundarypartnersoverivew":
    case "/pathwayofchange":
     {

        menulist.push({name:currentproject,route:"/boundarypartners",isactive:0,isroute:1});
        menulist.push({name:currentboundry,route:"#",isactive:1,isroute:0});
     }
     break;
     case "/completedforms":
     case "/draftforms":
     {
       menulist.push({name:"Monitoring",route:"#",isactive:1,isroute:0});
     }
     break;
     case "/significantinstancereport":
     {
       menulist.push({name:"Draft Forms",route:"/draftforms",isactive:1,isroute:1});
       menulist.push({name:"Fill Out New Form",route:"/significantinstancereport",isactive:0,isroute:0});
     }
     break;
     default:
    {
      menulist.push({name:"Integrity Watch Afghanistan",route:"#",isactive:1});
    }
}

  return (


       <div className="site-navbar navbar navbar-default navbar-fixed-top navbar-mega" role="navigation">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle hamburger hamburger-close navbar-toggle-left hided"
                  data-toggle="menubar">
              <span className="sr-only">Toggle navigation</span>
              <span className="hamburger-bar"></span>
              </button>
              <button type="button" className="navbar-toggle collapsed" data-target="#site-navbar-collapse"
                  data-toggle="collapse">
              <i className="icon wb-more-horizontal" aria-hidden="true"></i>
              </button>
              <button type="button" className="navbar-toggle collapsed" data-target="#site-navbar-search"
                  data-toggle="collapse">
              <span className="sr-only">Toggle Search</span>
              <i className="icon wb-search" aria-hidden="true"></i>
              </button>
              <div className="navbar-brand navbar-brand-center site-gridmenu-toggle" data-toggle="gridmenu">
                  <img className="navbar-brand-logo" src={require ("../../../internals/images/sun-icon.png")} title="Remark" />
              </div>
            </div>
            <div className="navbar-container container-fluid">
              <div className="collapse navbar-collapse navbar-collapse-toolbar" id="site-navbar-collapse">
                  <ul className="nav navbar-toolbar">
                    {
                      menulist.map((item, index)=>(
                               <li key={`item-${index}`} className={(item.isactive?'active':'' + ' hidden-float')}>

                              { item.isroute ? <Link  to={item.route}> {(index==0?<img src={require ("../../../internals/images/arrow-left.png")} /> :'')} <span>{item.name}</span></Link>:<a> {(index==0?<img src={require ("../../../internals/images/arrow-left.png")} /> :'')} <span> {item.name} </span></a>}</li>
                          )
                         )
                     }
                    <li className="hidden-float pull-right">
                      <Link className="WatchAfghanistan"  to={""}><img src={require ("../../../internals/images/icon-sun.png")}/><span>Integrity Watch Afghanistan</span></Link>
                    </li>
                  </ul>
              </div>
            </div>
       </div>

  );
};

Header.propTypes = {
  items: React.PropTypes.array
};
export default Header;
