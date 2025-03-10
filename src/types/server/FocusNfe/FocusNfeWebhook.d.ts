import { FocusNfeStatus } from "./FocusNfeStatus"

export type FocusNfeWebhookEvent =
    | "nfe"
    | "nfse"
    | "nfce_contingencia"
    | "nfce_correcao_timeout"
    | "nfe_recebida"
    | "nfse_recebida"
    | "inutilizacao"
    | "cte"
    | "mdfe"
    | "nfsen"

export interface FocusNfeWebhookForm {
    url: string
    event: FocusNfeWebhookEvent
    cnpj?: string
    cpf?: string
}

export interface FocusNfeWebhookCallNfe {
    cnpj_emitente: string
    ref: string
    status: FocusNfeStatus
    status_sefaz: string
    mensagem_sefaz: string
    chave_nfe: string
    numero: string
    serie: string
    protocolo: string
    caminho_xml_nota_fiscal: string
    caminho_danfe: string
}
