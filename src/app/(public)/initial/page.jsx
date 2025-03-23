"use client";

import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

// Imports Components
import Card from "@/app/components/CustomCard/CustomCard";
import ButtonSubmit from "@/app/components/ButtonSubmit/ButtonSubmit";

// Import Context
import { useAppContext } from "@/app/contexts";

export default function PageInitial() {
  const [isLoading, setIsLoading] = useState(false);
  const [enableButton, setEnableButton] = useState(true);
  
  // Pegando os dados do context
  const { formData, updateFormData } = useAppContext();
  
  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)+$/, "Insira seu nome e sobrenome")
      .required("Nome completo obrigatório"),
    phone: yup
      .string()
      .transform(value => (!value || /^\+\d{1,3}$/.test(value.trim()) ? null : value))
      .test("valid-phone", "Telefone inválido", value => {
        if (!value) return true;
        const numericValue = value.replace(/\s/g, "");
        return /^\+\d{1,2}\d{12}$/.test(numericValue);
      })
      .required("Telefone obrigatório"),
    birth_date: yup
      .string()
      .required("Data de nascimento obrigatória"),
    withdrawal_amount: yup
      .number()
      .required("Valor do FGTS obrigatório para cálculo"),
  });

  const handleSubmit = async (values) => {
    setIsLoading(true);
    setEnableButton(false);
    
    // Atualizando os dados no context
    updateFormData(values);

    console.log("Dados do Form:", values);
  };

  return (
    <Card>
      <h1 className="title-primary">Consulta do Saque-Aniversário do FGTS</h1>

      <h2 className="title-secondary">Este sistema tem como objetivo calcular o valor do saque-aniversário do Fundo de Garantia do Tempo de Serviço (FGTS) com base nas informações fornecidas abaixo:</h2>

      <Formik
        initialValues={formData} // Vai iniciar com os dados do useContext()
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, handleSubmit, isValid }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <Row>
                <h3 className="subtitle mt-4 mb-2">Dados Pessoais</h3>

                {/* Campo Nome */}
                <Form.Group as={Col} lg="7" className="mb-2">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Insira seu nome completo"
                    className="rounded-2"
                    value={values.name}
                    onChange={handleChange}
                  />

                  <div className="d-flex justify-content-between align-items-center m-2 mb-2">
                    {!touched.name && !errors.name ? (
                      <span className="description-exemple">Nome completo</span>
                    ) : (
                      <span className="text-danger">{errors?.name}</span>
                    )}
                  </div>
                </Form.Group>

                {/* Campo Telefone */}
                <Form.Group as={Col} lg="5" className="mb-2">
                  <Form.Control
                    type="phone"
                    name="phone"
                    placeholder="+55(00) 00000-0000"
                    className="rounded-2"
                    value={values.phone}
                    onChange={handleChange}
                  />

                  <div className="d-flex justify-content-between align-items-center m-2 mb-2">
                    {!touched.phone && !errors.phone ? (
                      <span className="description-exemple">Telefone</span>
                    ) : (
                      <span className="text-danger">{errors?.phone}</span>
                    )}
                  </div>
                </Form.Group>
              </Row>

              <Row>
                {/* Campo Data de Nascimento */}
                <Form.Group as={Col} lg="4" className="mb-2">
                  <Form.Control
                    type="date"
                    name="birth_date"
                    className="rounded-2"
                    value={values.birth_date}
                    onChange={handleChange}
                  />

                  <div className="d-flex justify-content-between align-items-center m-2 mb-2">
                    {!touched.birth_date && !errors.birth_date ? (
                      <span className="description-exemple">Data de Nascimento</span>
                    ) : (
                      <span className="text-danger">{errors?.birth_date}</span>
                    )}
                  </div>
                </Form.Group>

                {/* Campo Valor de Saque */}
                <Form.Group as={Col} lg="4" className="mb-2">
                  <Form.Control
                    type="number"
                    name="withdrawal_amount"
                    placeholder="1000"
                    className="rounded-2"
                    value={values.withdrawal_amount}
                    onChange={handleChange}
                  />

                  <div className="d-flex justify-content-between align-items-center m-2 mb-2">
                    {!touched.withdrawal_amount && !errors.withdrawal_amount ? (
                      <span className="description-exemple">Valor do FGTS</span>
                    ) : (
                      <span className="text-danger">{errors?.withdrawal_amount}</span>
                    )}
                  </div>
                </Form.Group>
              </Row>

              {/* Botão de Consulta */}
              <ButtonSubmit
                label="Consultar FGTS"
                isLoading={isLoading}
                disabled={!isValid || isLoading || !enableButton}
                onClick={handleSubmit}
              />
            </Form>
          );
        }}
      </Formik>
    </Card>
  );
}