import React from 'react';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';


function SubHeader(props) {
const submenulist=[];
const location=props.location;
switch(location){
  case "/":
     {
        submenulist.push({name:"Project List",route:"#"});
     }
     break;
  case "/externalresources":
  case "/boundarypartners":
  case "/projectoverview":
     {
        submenulist.push({name:'Project Overview',route:'/projectoverview'});
        submenulist.push({name:'Boundary Partners',route:'/boundarypartners'});
        submenulist.push({name:'External Resources',route:'/externalresources'});

     }
     break;
  case "/pathwayofchange":
  case "/boundarypartnersoverivew":
     {
        submenulist.push({name:'Boundary Partners Overivew',route:'/boundarypartnersoverivew'});
        submenulist.push({name:'pathway Of Change',route:'/pathwayofchange'});
     }
     break;
  case "/significantinstancereport":
  case "/completedforms":
  case "/draftforms":
        {
           submenulist.push({name:'Completed Forms',route:'/completedforms'});
           submenulist.push({name:'Draft Forms',route:'/draftforms'});
        }
     break;
     default:
    {
        submenulist.push({name:"Project List",route:"#"});
    }
}

  return (

          <div className="header-sub-nav">
              <ul>
                  {
                      submenulist.map((item, index)=>(
                          <li key={`item-${index}`}>
                          <Link activeClassName="active"  to={item.route}>{item.name}</Link>
                          </li>
                        )
                    )

                    }
                    {props.children}
              </ul>
          </div>



  );
}

export default SubHeader;
