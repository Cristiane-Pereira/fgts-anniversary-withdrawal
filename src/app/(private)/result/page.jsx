'use client';

import React from "react";
import { Row, Col } from "react-bootstrap";

// Imports Components
import Card from "@/app/components/CustomCard/CustomCard";
import Container from "@/app/components/Container/Container";

// Import Utils
import { calculateWithdrawalAmount } from "@/app/helpers/utils";

// Import Context
import { useAppContext } from "@/app/contexts";

const PageResult = () => {
  const { formData } = useAppContext();
  const withdrawalAmount = parseFloat(formData.withdrawal_amount);
  const calculatedWithdrawal = calculateWithdrawalAmount(withdrawalAmount);

  return (
    <Container title={`Olá, ${formData.name}`}>
      <Card>
        <main>
          <section>
            <Row>
              <Col lg="6" className="d-flex flex-column justify-content-center align-items-start">
                <h3 className="title-secondary">Você pode receber até</h3>
                <div className="d-flex align-items-center">
                  <small>R$</small>
                  <span className="value-sake title-secondary mx-2">{calculatedWithdrawal}</span>
                </div>
              </Col>

              <Col lg="6">
                <span className="subtitle">
                  <strong className="title-secondary">Esta simulação traz valores aproximados.</strong> 
                   Para calcular o valor exato, <strong className="title-secondary">entre em
                   contato com a Smile Co para consultar seu saldo FGTS.</strong>
                </span>
              </Col>
            </Row>
          </section>
        </main>
      </Card>
    </Container>
  );
};

export default PageResult;
