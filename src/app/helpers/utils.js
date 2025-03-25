// valida número de telefone com base na API
export const validatePhoneNumber = async (phone) => {
    const apiKey = process.env.TOKEN_VALIDATED_PHONE_API_KEY;
    
    // Remover espaços e outros caracteres não numéricos
    const formattedPhone = phone.replace(/\D/g, ""); // Remove tudo que não seja número
    const formattedPhoneWithPlus = `+${formattedPhone}`;
  
    const url = `https://phonevalidation.abstractapi.com/v1/?api_key=${apiKey}&phone=${formattedPhoneWithPlus}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.valid) {
        return true; // Número válido
      } else {
        return data.error || "Número de telefone inválido."; // Retorna mensagem de erro, se houver
      }
    } catch (error) {
      return "Erro ao validar número de telefone.";
    }
};

// Calcula valor do FGTS
export const calculateWithdrawalAmount = (amount) => {
  if (isNaN(amount)) return '0.00';

  let calculatedAmount = 0;

  if (amount <= 500) {
    calculatedAmount = amount * 0.5;
  } else if (amount <= 1000) {
    calculatedAmount = amount * 0.4 + 50;
  } else if (amount <= 5000) {
    calculatedAmount = amount * 0.3 + 150;
  } else if (amount <= 10000) {
    calculatedAmount = amount * 0.2 + 650;
  } else if (amount <= 15000) {
    calculatedAmount = amount * 0.15 + 1150;
  } else if (amount <= 20000) {
    calculatedAmount = amount * 0.1 + 1900;
  } else {
    calculatedAmount = amount * 0.05 + 2900;
  }

  return calculatedAmount.toFixed(2);
};
  