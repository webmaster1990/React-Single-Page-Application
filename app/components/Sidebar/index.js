

import React, { PropTypes } from 'react';

import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
function Sidebar(props) {
  const Sidebarlist=[];
  const location=props.location;
  switch(location){
      case "/":
      case "/externalresources":
      case "/boundarypartners":
      case "/projectoverview":
      case "/boundarypartnersoverivew":
      case "/pathwayofchange":
       {
          Sidebarlist.push({name:"Mapping",route:"/",isactive:1,isroute:0,imgpath:"icon-mapping.png"});
          Sidebarlist.push({name:"Monitoring",route:"/completedforms",isactive:0,isroute:1,imgpath:"icon-monitoring.png"});
          Sidebarlist.push({name:"Management",route:"#",isactive:0,isroute:0,imgpath:"icon-management.png"});
          Sidebarlist.push({name:"Administration",route:"#",isactive:0,isroute:0,imgpath:"icon-administration.png"});
       }
       break;
       case "/completedforms":
       case "/draftforms":
       case "/significantinstancereport":
       {
         Sidebarlist.push({name:"Mapping",route:"/",isactive:0,isroute:1,imgpath:"icon-mapping.png"});
         Sidebarlist.push({name:"Monitoring",route:"/completedforms",isactive:1,isroute:0,imgpath:"icon-monitoring.png"});
         Sidebarlist.push({name:"Management",route:"#",isactive:0,imgpath:"icon-management.png"});
         Sidebarlist.push({name:"Administration",route:"#",isactive:0,imgpath:"icon-administration.png"});
       }
       break;
       default:
      {
        Sidebarlist.push({name:"Mapping",route:"/",isactive:1,isroute:0,imgpath:"icon-mapping.png"});
        Sidebarlist.push({name:"Monitoring",route:"/completedforms",isactive:0,isroute:1,imgpath:"icon-monitoring.png"});
        Sidebarlist.push({name:"Management",route:"#",isactive:0,isroute:0,imgpath:"icon-management.png"});
        Sidebarlist.push({name:"Administration",route:"#",isactive:0,isroute:0,imgpath:"icon-administration.png"});
      }
  }

  return (

    <div className="site-menubar">
	    <div className="site-menubar-body">
	      <div>
	        <div>
	          <ul className="site-menu">
            {
              Sidebarlist.map((item, index)=>(
                       <li key={`item-${index}`}  className="site-menu-category">
                            { item.isroute ? <Link  to={item.route}  className={(item.isactive?'active':'')}><img src={require ("../../../internals/images/"+item.imgpath)}/><span>{item.name}</span></Link>:<a className={(item.isactive?'active':'')}><img src={require ("../../../internals/images/"+item.imgpath)}/><span> {item.name} </span></a>}
                      </li>
                  )
                 )
             }


	          	<li className="site-menu-category last-setting-link"><a href="#"><img src={require ("../../../internals/images/icon-settings.png")}/><span>Settings</span></a></li>
	          </ul>
	        </div>
	      </div>
	    </div>
	</div>

  );
}
Sidebar.propTypes = {
  children: React.PropTypes.node,
};
export default Sidebar;
