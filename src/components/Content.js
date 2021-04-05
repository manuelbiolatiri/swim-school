import React from 'react';
import SideForm from './SideForm'
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody,Container, Row, Col
} from 'reactstrap';
import img from './swim1.jpeg'
import img2 from './swim2.jpeg'
import img3 from './swim3.jpeg'

const Example = (props) => {
  return (
    <div>
      <div className="my-5">
        <h1>All Instructors</h1>
      </div>
       <Row>
        <Col xs="3">
          <SideForm />
        </Col>
        <Col xs="9">
          <CardDeck className="mb-4">
              <Card>
                <CardImg top width="100%" src={img} alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <Button color="primary">Button</Button>
                </CardBody>
              </Card>
              <Card>
                <CardImg top width="100%" src={img2} alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                  <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                  <Button color="primary">Button</Button>
                </CardBody>
              </Card>
              <Card>
                <CardImg top width="100%" src={img3} alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                  <Button color="primary">Button</Button>
                </CardBody>
                </Card>
            </CardDeck>
          <CardDeck>
              <Card>
                <CardImg top width="100%" src={img} alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <Button color="primary">Button</Button>
                </CardBody>
              </Card>
              <Card>
                <CardImg top width="100%" src={img2} alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                  <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                  <Button color="primary">Button</Button>
                </CardBody>
              </Card>
              <Card>
                <CardImg top width="100%" src={img3} alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                  <Button color="primary">Button</Button>
                </CardBody>
                </Card>
            </CardDeck>
          </Col>
      </Row>
      </div>
  );
};

export default Example;