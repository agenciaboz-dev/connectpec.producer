export interface FocusNfeCompanyForm {
    nome: string
    nome_fantasia: string
    inscricao_estadual: number
    inscricao_municipal?: number
    cnpj?: string
    cpf?: string
    regime_tributario: number
    email: string
    telefone: string
    logradouro: string
    numero: number
    complemento?: string
    bairro: string
    cep: number
    municipio: string
    uf: string
    enviar_email_destinatario?: boolean
    enviar_email_homologacao?: boolean
    discrimina_impostos?: boolean
    habilita_nfe: boolean
    habilita_nfce: boolean
    habilita_cte?: boolean
    habilita_mdfe?: boolean
    proximo_numero_nfe_producao?: number
    proximo_numero_nfe_homologacao?: number
    serie_nfe_producao?: number
    serie_nfe_homologacao?: number
    proximo_numero_nfce_producao?: number
    proximo_numero_nfce_homologacao?: number
    serie_nfce_producao?: number
    serie_nfce_homologacao?: number

    arquivo_certificado_base64: string
    senha_certificado: string

    nome_responsavel?: string
    cpf_responsavel?: string
}

export interface FocusNfeCompanySettingsForm {
    focus_id: string
    habilita_cte?: boolean
    habilita_mdfe?: boolean
    proximo_numero_nfe_producao?: number
    proximo_numero_nfe_homologacao?: number
    serie_nfe_producao?: number
    serie_nfe_homologacao?: number
    proximo_numero_nfce_producao?: number
    proximo_numero_nfce_homologacao?: number
    serie_nfce_producao?: number
    serie_nfce_homologacao?: number
}