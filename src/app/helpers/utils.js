// Função para validar o telefone com a API do Twilio
export const validatePhoneNumber = async (phoneNumber) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  
  // Limpeza do número (remover qualquer caractere não numérico)
  const cleanedPhone = phoneNumber.replace(/\D/g, "");

  const url = `https://lookups.twilio.com/v1/PhoneNumbers/${cleanedPhone}?CountryCode=BR`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + btoa(`${accountSid}:${authToken}`),  // Autenticação básica (base64)
      },
    });

    if (!response.ok) {
      // Se a resposta não for bem-sucedida, retorna false
      throw new Error('Falha ao validar o telefone.');
    }

    const data = await response.json();
    
    if (data && data.phone_number) {
      return true; // Retorna true se o número for válido
    }

    return false; // Caso contrário, retorna false

  } catch (error) {
    console.error('Erro ao validar o telefone:', error);
    return false;
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
  