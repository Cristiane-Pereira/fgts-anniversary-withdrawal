import React, { useState, useEffect } from "react";
import MediaQuery from "react-responsive";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";

// Imports Images
import Hero from "../../../assets/images/hero.jpg";
import Icon from "../../../assets/images/logoIcon.svg";
import Dollar from "../../../assets/images/dollar.svg";
import Pipe from "../../../assets/images/pipe.svg";

const Container = ({ title, children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // No SSR
    return null;
  }

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      {/* Renderização para telas grandes */}
      <MediaQuery minDeviceWidth={768}>
        <Row className="w-100 h-100">
          <Col lg={6} className="p-0 position-relative d-block">
            <div className="w-100 h-100 position-relative">
              <Image
                src={Hero}
                alt="Hero Image"
                fill
                style={{ objectFit: "cover" }}
                quality={100}
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ background: "rgba(0, 0, 0, 0.7)" }}
              ></div>
            </div>
          </Col>
          <Col xs={12} lg={6} className="section-container"></Col>
        </Row>

        <div className="position-absolute d-flex flex-column align-items-center">
          <div className="w-75 px-lg-4 mb-4">
            <div className="d-flex align-items-center mb-2">
              <Image src={Icon} alt="Icon Smile Co" />
              <span className="text-logo mx-2">SMILE Co.</span>
            </div>
            <Row className="text-start">
              <Col lg="7" className="mb-2">
                <h1 className="title-primary">{title}</h1>
              </Col>
              <Col lg="4">
                <p className="text-uppercase mb-0">
                  <Image src={Dollar} alt="Icon Dollar" className="me-2"/>
                  Saque Aniversário
                </p>
                <div className="icon-pipe d-flex justify-content-start align-items-center">
                  <Image src={Pipe} alt="Icon Pipe" className="me-1" style={{height: 60, width: 25}} />
                  <span>
                    <strong>Insira seus dados </strong>e verifique o quanto você pode
                    receber!
                  </span>
                </div>
              </Col>
            </Row>
          </div>

          {children}
        </div>
      </MediaQuery>

      {/* Renderização para telas pequenas */}
      <MediaQuery maxDeviceWidth={767}>
        <Col xs={12} className="vh-100 d-flex align-items-center justify-content-center section-container px-5">
          <div className="position-relative d-flex flex-column align-items-center w-100">
            <div className="w-100 text-center mb-4">
              <div className="d-flex align-items-center mb-2 justify-content-start">
                <Image src={Icon} alt="Icon Smile Co" />
                <span className="text-logo mx-2">SMILE Co.</span>
              </div>

              <Row className="text-start">
                <Col lg="7" className="mb-2">
                  <h1 className="title-primary">{title}</h1>
                </Col>
                <Col lg="5">
                  <p className="text-uppercase mb-0">
                    <Image src={Dollar} alt="Icon Dollar" className="me-2"/>
                    Saque Aniversário
                  </p>
                  <div className="icon-pipe d-flex justify-content-start align-items-center">
                    <Image src={Pipe} alt="Icon Pipe" className="me-1" style={{height: 56, width: 25}} />
                    <span>
                      <strong>Insira seus dados </strong>e verifique o quanto você pode
                      receber!
                    </span>
                  </div>
                </Col>
              </Row>
            </div>

            {children}
          </div>
        </Col>
      </MediaQuery>
    </div>
  );
};

export default Container;
