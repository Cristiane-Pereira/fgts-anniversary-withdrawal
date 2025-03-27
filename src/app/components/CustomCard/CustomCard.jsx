import React from "react";
import { Card, CardBody } from "react-bootstrap";

const CustomCard = ({
  children,
}) => {
  return (
    <Card className="w-75 rounded-4 px-lg-5 py-lg-3" style={{minWidth: '300px'}}>
      <CardBody>
        {children}
      </CardBody>
  </Card>
  );
};

export default CustomCard;
