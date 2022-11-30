
import Sidebar from '../../components/Sidebar/Sidebar';
import Body from "../../components/Body/Body";
import {Container, Row, Col} from 'react-bootstrap';

function Inicio() {

  return (
    <div className="Home">
      <Container>
        <Row>
          <Col>
            <Sidebar/>
          </Col>
          <Col>
            <Body/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Inicio;