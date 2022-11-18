import { Tab,Nav, Col, Row } from "react-bootstrap";



const DetalleProducto =()=>{
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    <Row>
      <Col sm={3}>
        <Nav variant="pills" className="flex-column">
          <Nav.Item>
            <Nav.Link eventKey="first">Tab 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">Tab 2</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col sm={9}>
        <Tab.Content>
          <Tab.Pane eventKey="first">
            <div className="columns">
              <div className="column">
                <a href="">
                  <div className="detalle-imagen d-flex">
                    <img src="https://media.istockphoto.com/id/1309352410/es/foto/hamburguesa-con-queso-con-tomate-y-lechuga-en-tabla-de-madera.jpg?s=612x612&w=0&k=20&c=HaSLXFFns4_IHfbvWY7_FX7tlccVjl0s0BrlqaLHOTE=" alt="" />
                  </div>
                  "hamburguesa"
                </a>
              </div>
              <div className="column">
                <a href="">
                  <div className="detalle-imagen d-flex">
                    <img src="https://media.istockphoto.com/id/1309352410/es/foto/hamburguesa-con-queso-con-tomate-y-lechuga-en-tabla-de-madera.jpg?s=612x612&w=0&k=20&c=HaSLXFFns4_IHfbvWY7_FX7tlccVjl0s0BrlqaLHOTE=" alt="" />
                  </div>
                  "hamburguesa"
                </a>
              </div>
              <div class="columns"></div>
              <div class="columns"></div>
              <div class="columns"></div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
          
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
    

  );
}

export default DetalleProducto;