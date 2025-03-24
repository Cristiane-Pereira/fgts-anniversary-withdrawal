import React from "react";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";

//Imports Image
import Hero from "../../../assets/images/hero.jpg";
import Icon from "../../../assets/images/logoIcon.svg";

const Container = ({ title, children }) => {
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <Row className="w-100 h-100">
        <Col lg={6} className="p-0 position-relative d-none d-lg-block">
          <div className="w-100 h-100 position-relative">
            <Image
              src={Hero}
              alt="Hero Image"
              fill
              style={{ objectFit: "cover" }}
              quality={100}
            />

            {/* Overlay image */}
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{ background: "rgba(0, 0, 0, 0.7)" }}
            ></div>
          </div>
        </Col>

        <Col xs={12} lg={6} className="section-container d-flex align-items-center justify-content-center"></Col>
      </Row>

      <div className="position-absolute w-100 d-flex flex-column align-items-center">
        <div className="w-50 px-lg-4 mb-4">
          <div className="mb-2">
            <Image src={Icon} alt="Icon Smile Co" />
            <span className="text-logo mx-2">SMILE Co.</span>
          </div>

          <Row>
            <Col lg="7" className="text-start mb-2">
              <h1 className="title-primary">{title}</h1>
            </Col>

            <Col lg="5" className="text-start">
              <p className="text-uppercase mb-0">Saque Aviversário</p>
              <span><strong>Insíra seus dados </strong>e verifique o quanto você pode receber!</span>
            </Col>
          </Row>
        </div>

        {children}
      </div>
    </div>
  )
}

export default Container;
