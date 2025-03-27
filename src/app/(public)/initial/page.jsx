"use client";

import React, { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { useRouter } from "next/navigation";
import { Formik } from "formik";
import * as yup from "yup";

// Imports Components
import Container from "@/app/components/Container/Container";
import Card from "@/app/components/CustomCard/CustomCard";
import ButtonSubmit from "@/app/components/ButtonSubmit/ButtonSubmit";

// Imports Utils
import { validatePhoneNumber } from "@/app/helpers/utils";

// Import Context
import { useAppContext } from "@/app/contexts";

export default function PageInitial() {
  const [isLoading, setIsLoading] = useState(false);
  const [enableButton, setEnableButton] = useState(false); // Inicia o botão desabilitado
  const [isPhoneValid, setIsPhoneValid] = useState(false); // Estado para validade do telefone

  const { formData, updateFormData } = useAppContext();
  const router = useRouter();

  // Definindo a validação com yup
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório"),
    phone: yup
      .string()
      .test("valid-phone", "Telefone inválido", async (value) => {
        if (!value) return true; 
        const isValid = await validatePhoneNumber(value); // Valida o telefone com a API do Twilio
        setIsPhoneValid(isValid); // Atualiza o estado de validade do telefone
        return isValid; // Retorna se o telefone é válido ou não
      })
      .required("Telefone obrigatório"),
    withdrawal_amount: yup
      .string()
      .required("Valor do saldo obrigatório")
      .matches(
        /^(?!-)(\d+|\d{1,3}(?:[.,]\d{3})*)(?:[.,]\d+)?$/, 
        "Não pode ser valor negativo"
      )
      .test('positive-number', 'O valor não pode ser negativo', value => parseFloat(value) >= 0),
  
    birth_month: yup.string().required("Mês de aniversário obrigatório"),
  });

  const handleSubmit = async (values) => {
    setIsLoading(true);
    setEnableButton(false);

    updateFormData(values);
    router.push("/result");
  };

  useEffect(() => {
    setEnableButton(false); // Desativa o btn toda vez que o component for montado
  }, []);

  return (
    <Container title="Use uma grana que já é sua e saia do aperto.">
      <Card>
        <Formik
          initialValues={formData}
          validationSchema={schema}
          onSubmit={handleSubmit}
          validateOnMount
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid }) => {
            useEffect(() => {
              setEnableButton(isValid); // Habilita ou desabilita o botão conforme o estado de validação
            }, [isValid]);

            useEffect(() => {
              if (isPhoneValid) {
                handleChange({ target: { name: 'phone', value: values.phone } });
              }
            }, [isPhoneValid, values.phone, handleChange]);

            return (
              <Form onSubmit={handleSubmit}>
                <Row>
                  {/* Campo Nome */}
                  <Form.Group as={Col} lg="6" className="mb-3">
                    <Form.Label htmlFor="name" className="input-label mb-1">Qual seu nome?</Form.Label>

                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="ex: Guilherme Neves"
                      className="input-text rounded-2"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.name && errors?.name  && (
                      <div className="d-flex align-items-center mt-2">
                        <span className="badge badge-soft-danger text-error text-danger d-flex align-items-center py-2 px-3">
                          <FontAwesomeIcon icon={faCircleXmark} className="icon-error me-1"/>
                          {errors?.name}
                        </span>
                      </div>
                    )}
                  </Form.Group>

                  {/* Campo Telefone */}
                  <Form.Group as={Col} lg="6" className="mb-3">
                    <Form.Label htmlFor="phone" className="input-label mb-1">Qual seu telefone?</Form.Label>

                    <Form.Control
                      type="text"
                      name="phone"
                      placeholder="ex: (21) 98765-9087"
                      className="input-text rounded-2"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.phone && errors?.phone  && (
                      <div className="d-flex align-items-center mt-2">
                        <span className="badge badge-soft-danger text-error text-danger d-flex align-items-center py-2 px-3">
                          <FontAwesomeIcon icon={faCircleXmark} className="icon-error me-1"/>
                          {errors?.phone}
                        </span>
                      </div>
                    )}
                  </Form.Group>
                </Row>

                <Row>
                  {/* Campo Saldo */}
                  <Form.Group as={Col} lg="6" className="mb-2">
                    <Form.Label htmlFor="withdrawal_amount" className="input-label mb-1">Qual seu saldo?</Form.Label>

                    <Form.Control
                      type="text"
                      name="withdrawal_amount"
                      placeholder="ex: R$ 5.000,00"
                      className="input-text rounded-2"
                      value={values.withdrawal_amount}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.withdrawal_amount && errors?.withdrawal_amount  && (
                      <div className="d-flex align-items-center mt-2">
                        <span className="badge badge-soft-danger text-error text-danger d-flex align-items-center py-2 px-3">
                          <FontAwesomeIcon icon={faCircleXmark} className="icon-error me-1"/>
                          {errors?.withdrawal_amount}
                        </span>
                      </div>
                    )}
                  </Form.Group>

                  {/* Campo Mês de Nascimento */} 
                  <Form.Group as={Col} lg="6" className="mb-2">
                    <Form.Label htmlFor="birth_month" className="input-label mb-1">Qual seu mês de aniversário?</Form.Label>

                    <Form.Select
                      name="birth_month"
                      value={values.birth_month}
                      className="input-text rounded-2"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="">Selecione...</option>
                      <option value="01">Janeiro</option>
                      <option value="02">Fevereiro</option>
                      <option value="03">Março</option>
                      <option value="04">Abril</option>
                      <option value="05">Maio</option>
                      <option value="06">Junho</option>
                      <option value="07">Julho</option>
                      <option value="08">Agosto</option>
                      <option value="09">Setembro</option>
                      <option value="10">Outubro</option>
                      <option value="11">Novembro</option>
                      <option value="12">Dezembro</option>
                    </Form.Select>
                    {touched.birth_month && errors?.birth_month  && (
                      <div className="d-flex align-items-center mt-2">
                        <span className="badge badge-soft-danger text-error text-danger d-flex align-items-center py-2 px-3">
                          <FontAwesomeIcon icon={faCircleXmark} className="icon-error me-1"/>
                          {errors?.birth_month}
                        </span>
                      </div>
                    )}
                  </Form.Group>
                </Row>

                {/* Botão de Consulta */}
                <div className="d-flex justify-content-center mt-3">
                  <ButtonSubmit
                    label="Ver Proposta"
                    isLoading={isLoading}
                    disabled={!enableButton || isLoading}
                    onClick={handleSubmit}
                  />
                </div>
              </Form>
            );
          }}
        </Formik>
      </Card>
    </Container>
  );
}

