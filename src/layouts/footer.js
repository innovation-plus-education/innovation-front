import React from "react";
import { Button, Col, Row } from "react-bootstrap";

function footer({ items: { columns } }) {
  return (
    <div className="footer">
      <Row xs={1} md={3}>
        {columns.map(({ title, links }) => (
          <Col className="footer-col">
            <h4>{title}</h4>
            {links.map(({ href, title: btnTitle }) => (
              <div>
                <Button as="a" href={href} size="lg">
                  {btnTitle}
                </Button>
              </div>
            ))}
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default footer;
