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
      type="submit"
      className="rounded-2 text-uppercase border-0 px-3 py-2"
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="ms-2">Carregando...</span>
        </>
      ) : (
        label
      )}
    </Button>
  )
}

export default ButtonSubmit;