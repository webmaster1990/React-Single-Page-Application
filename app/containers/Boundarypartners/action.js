import {
  DELETE_PARTNER,
  LOAD_PARTNERS
} from './constant';
import {fnget_projects} from 'api';
import {saveStateWithKey} from 'Localstorage';

export function Delete_Partner(project_id) {
  return {
    type: DELETE_PARTNER,
    project_id,
  };
}
export function Load_Partners() {
const partnerlist=[
  {partner_name:'Local Community Representatives (LCR)',boundary_partner_id:1},
  {partner_name:'Government Decision-makers (GDM)',boundary_partner_id:2},
  {partner_name:'Civil Society Organizations (CSO)',boundary_partner_id:3},
  {partner_name:'Elected Public Representatives (EPR)',boundary_partner_id:4},
  {partner_name:'Private Sector Actors (PSA)',boundary_partner_id:5}
];

saveStateWithKey('parnerlist',partnerlist);
  return {
    type: LOAD_PROJECTS,
    projectlist,
  };
}
