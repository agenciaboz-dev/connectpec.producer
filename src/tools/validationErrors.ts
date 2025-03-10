export const validationErrors = {
    required: "Campo obrigatório.",
    customLength: (fieldName: string, fieldLength: number) => {
        if (fieldLength > 1) return `O campo ${fieldName} deve conter ao menos ${fieldLength} caracteres.`
        else return `O campo ${fieldName} deve conter ao menos ${fieldLength} caracter.`
    },
    shortField: (fieldName: string) => `O campo ${fieldName} deve conter ao menos 3 caracteres.`,
    mediumField: (fieldName: string) => `O campo ${fieldName} deve conter ao menos 5 caracteres.`,
    longField: (fieldName: string) => `O campo ${fieldName} deve conter ao menos 8 caracteres.`,

    invalidName: "Por favor, insira um nome do usuário válido. Evite usar caracteres especiais ou símbolos.",
    invalidEmail: "Por favor, forneça um endereço de email válido.",
    // invalidPhone: "Por favor, forneça um número de telefone válido. Deve conter apenas números e ter o formato correto para seu país.",
    invalidPhone: "Por favor, forneça um número de telefone válido.",
    invalidPasswordConfirmation: "Senha incorreta. Por favor, digite a senha atual para autorizar a mudança.",
    invalidEmailConfirmation: "O endereço de email inserido não corresponde ao seu email atual.",
    invalidPhoneConfirmation: "O número de telefone inserido não corresponde ao seu telefone atual.",
    invalidDocument: "Digite um CPF ou CNPJ válido.",
    invalidStateRegistration: "Insira uma inscrição estadual válida.",
    invalidCEP: "Insira um CEP válido.",
    invalidPassword: "A senha precisa conter ao menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.",
    samePassword: "As senhas precisam ser iguais",
}
