import React from "react";
import { Card, CardBody } from "react-bootstrap";

// Imports Component
import Container from "../Container/Container";

const CustomCard = ({
  children,
}) => {
  return (
    <Container>
      <Card className="w-50 h-auto bg-link-light rounded-4 py-2 px-lg-4" style={{minWidth: '300px'}}>
        <CardBody className="mt-0 mx-lg-2">
          {children}
        </CardBody>
      </Card>
    </Container>
  );
};

export default CustomCard;
