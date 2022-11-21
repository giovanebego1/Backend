import { Container } from '@mui/system';
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Cards from '../Cards/Cards'
import Line_chart from '../Line_chart/Line_chart'
import '../Body/Body.css'

function Body() {
  return (
    <div className="Body">
      <Container>
        <Row className='first_row'>
          <Col className='column'>
            <Cards/>
            <Row className='second_row'>
              <Line_chart/>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Body;