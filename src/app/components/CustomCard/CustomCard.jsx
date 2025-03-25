import React from "react";
import { Card, CardBody } from "react-bootstrap";

const CustomCard = ({
  children,
}) => {
  return (
    <Card className="w-50 rounded-4 px-lg-4" style={{minWidth: '300px'}}>
      <CardBody>
        {children}
      </CardBody>
  </Card>
  );
};

export default CustomCard;
