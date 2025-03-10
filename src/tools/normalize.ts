export const normalize = (text: string): string => {
    const normalizedText = text
        .toLowerCase() // Converter para minúsculas
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Remover acentos
        .replace(/[^a-z0-9]/g, "") // Remover caracteres especiais e espaços em branco
    return normalizedText
}
