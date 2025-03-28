"use client"

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

  // Garantir que o valor seja tratado como string antes de fazer o replace
  const cleanedAmount = String(formData.withdrawal_amount)
    .replace(/\./g, "")  // Remove o ponto como separador de milhar
    .replace(",", ".");  // Substitui a vírgula por ponto para a conversão correta
  
  const withdrawalAmount = parseFloat(cleanedAmount);

  // Calculando o valor
  const calculatedWithdrawal = calculateWithdrawalAmount(withdrawalAmount);

  // Formatação do valor no padrão BR (R$)
  const formattedResult = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(calculatedWithdrawal);

  return (
    <Container title={`Olá, ${formData.name ? formData.name : "Name"}!`}>
      <Card>
         <Row className="py-4">
            <Col lg="6" className="d-flex flex-column justify-content-center align-items-start">
              <h3 className="title-secondary">Você pode receber até</h3>
              <div className="d-flex align-items-center">
                <small>R$</small>
                <p className="value-sake title-secondary m-0 mx-2">{formattedResult}</p>
              </div>
            </Col>

            <Col lg="6">
              <p className="subtitle m-0">
                <strong className="title-secondary">Esta simulação traz valores aproximados.</strong>
                Para calcular o valor exato, <strong className="title-secondary">entre em
                contato com a Smile Co para consultar seu saldo FGTS.</strong>
              </p>
            </Col>
          </Row>
      </Card>
    </Container>
  );
};

export default PageResult;
