import React from 'react'
import Charts from '../../components/Charts/Charts';
import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '../../components/Table/Table';
import "./Sector.css";
import { Row, Col} from 'react-bootstrap'

function Sector() {
  return (
      <div className="Sector">
        <Row>
          <Col>
            <Sidebar className="Sidebar"/>
          </Col>
          <Col className="Table">
            <Table />
            <Row>
              <Charts />
            </Row>
          </Col>
        </Row>
      </div>
  )
}

export default Sector;