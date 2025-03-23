import React from "react";
import { Card, CardBody } from "react-bootstrap";

const CustomCard = ({
  children,
}) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-dark" style={{ height: "100vh" }}>
      <Card className="w-75 h-auto bg-link-light rounded-4">
        <CardBody className="m-2">
          {children}
        </CardBody>
      </Card>
    </div>
  );
};

export default CustomCard;
