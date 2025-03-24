import React from "react";
import { Button } from "react-bootstrap";

const ButtonSubmit = ({
  label, 
  isLoading,
  disabled, 
  ...props 
}) => {
  return (
    <Button
      variant="warning"
      type="submit"
      className="button-submit rounded-2 text-uppercase border-0 px-5 py-3"
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="button-submit ms-2">Carregando...</span>
        </>
      ) : (
        label
      )}
    </Button>
  )
}

export default ButtonSubmit;