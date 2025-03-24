import React from 'react';
import { Card, CardBody } from 'react-bootstrap';

const CustomCard = ({
  children,
}) => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center bg-dark py-5">
      <Card className='w-75 h-auto bg-link-light rounded-4'>
        <CardBody className="mt-0 mx-2 mb-2">
          {children}
        </CardBody>
      </Card>
    </div>
  );
};

export default CustomCard;
