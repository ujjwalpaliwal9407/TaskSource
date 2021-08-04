import React from 'react';
import { Row, Col, Button, Dropdown} from 'react-bootstrap';
import WidgetsOutlinedIcon from '@material-ui/icons/WidgetsOutlined';
import ViewHeadlineRoundedIcon from '@material-ui/icons/ViewHeadlineRounded';
import "./Modal.css";
import { useMediaQuery } from 'react-responsive';

export default function Highlights(props) {
  const none='flex';
  const isTabletFloor = useMediaQuery({ query: '(max-width: 426px)' });
  console.log(isTabletFloor)
  return (
    // {props.data.type}
    <div>
      <Row className="set_class">
        <Col sm={12} md={10}>
          <div className="highlights">
            <div className="ulclass">
              <div className="liclass" style={{ backgroundColor: `${props.data.type}` }}><a href="#" data-toggle="tab" role="tab" aria-selected="true" style={{ color: 'white' }}> {props.data.Hname} </a></div>
              <div className="liclass"><a href="#" data-toggle="tab" role="tab" aria-selected="true" > Hot</a></div>
              {/* {(isTabletFloor==true)?{none:'none'}:{none:'flex'}} */}
              <div className="liclass" ><a href="#" data-toggle="tab" role="tab" aria-selected="true" > New </a></div>
              <div className="liclass" ><a href="#" data-toggle="tab" role="tab" aria-selected="true" > Deals Near Me </a></div>
            </div>
          </div>
        </Col>
        {/* <Col sm={6} md={5}>
                    <div style={{marginLeft:-20}} className="highlights">
                    <ul>
                      
                    </ul>
                    </div>
                </Col> */}
        <Col sm={12} md={2}>
          <div className="highlights1">
            <ul>
              <li><Button variant='light'><WidgetsOutlinedIcon /></Button></li>
              <li>
                <Dropdown>
                  <Dropdown.Toggle style={{backgroundColor:`${props.data.type1}`,border:'none'}}>
                    <ViewHeadlineRoundedIcon />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className='filterdrop'>
                    <Dropdown.Item href="#/action-1">Don't Show Expired Deals</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-2">Cheapest</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-3">Most Commented</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-3">Most Relevant</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-3">Show Local Deals Only</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
          </div>
        </Col>
      </Row>

    </div>
  )
}
