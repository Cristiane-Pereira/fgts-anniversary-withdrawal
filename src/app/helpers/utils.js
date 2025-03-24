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
  