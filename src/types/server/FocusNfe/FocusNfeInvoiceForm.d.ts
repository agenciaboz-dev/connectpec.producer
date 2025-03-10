import { FocusNfeStatus } from "./FocusNfeStatus"

export interface FocusNFeItemForm {
    numero_item: number
    codigo_produto: string
    descricao: string
    cfop: number
    quantidade_comercial: number
    quantidade_tributavel: number
    valor_unitario_comercial: number
    valor_unitario_tributavel: number
    unidade_comercial: string
    unidade_tributavel: string
    valor_bruto: number
    codigo_ncm: string
    inclui_no_total: 0 | 1
    icms_origem: number

    informacoes_adicionais_item?: string

    icms_situacao_tributaria: string
    cofins_situacao_tributaria: string
    pis_situacao_tributaria: string
    icms_base_calculo?: number
    icms_valor?: number

    icms_aliquota?: number
    cest?: number
    codigo_beneficio_fiscal?: string
    icms_aliquota_st?: number
    icms_reducao_base_calculo?: number
    icms_valor_desonerado?: number
    icms_percentual_diferimento?: number

    icms_modalidade_base_calculo?: number

    icms_base_calculo_mono?: number
    icms_valor_mono?: number

    icms_modalidade_base_calculo_st?: number
    icms_reducao_base_calculo_st?: number
    icms_base_calculo_st?: number
    icms_valor_st?: number

    icms_base_calculo_mono_retencao?: number
    icms_aliquota_retencao?: number
    icms_valor_mono_retencao?: number
    icms_percentual_reducao?: number
    icms_motivo_reducao?: number
    icms_margem_valor_adicionado_st?: number
    icms_valor_operacao?: number
    icms_valor_diferido?: number
    icms_valor_mono_operacao?: number
    icms_valor_mono_diferido?: number
    icms_base_calculo_mono_retido?: number
    icms_aliquota_retido?: number
    icms_valor_mono_retido?: number
    icms_margem_valor_adicionado_st?: number
    icms_aliquota_credito_simples?: number
    icms_valor_credito_simples?: number
    icms_margem_valor_adicionado_st?: number
    aliquota_icms_simulado?: number
}

export interface FocusNFeInvoiceData {
    numero?: number
    serie?: number
    natureza_operacao: string
    data_emissao: string
    data_entrada_saida: string
    tipo_documento: number
    local_destino: number
    finalidade_emissao: number
    consumidor_final: number
    presenca_comprador: number
    cnpj_emitente?: string | null
    cpf_emitente?: string | null
    nome_emitente: string
    nome_fantasia_emitente: string
    logradouro_emitente: string
    numero_emitente: number
    bairro_emitente: string
    municipio_emitente: string
    uf_emitente: string
    inscricao_estadual_emitente: string
    regime_tributario_emitente: number
    nome_destinatario: string
    cnpj_destinatario?: string | null
    cpf_destinatario?: string | null | undefined
    inscricao_estadual_destinatario: string | null
    telefone_destinatario: number
    logradouro_destinatario: string
    numero_destinatario: number
    bairro_destinatario: string
    municipio_destinatario: string
    uf_destinatario: string
    indicador_inscricao_estadual_destinatario: number
    valor_frete?: number
    valor_seguro?: number
    valor_total?: number
    valor_produtos?: number
    pis_valor?: number
    cofins_valor?: number
    modalidade_frete: number
    informacoes_adicionais_contribuinte: string
    valor_desconto: number

    formas_pagamento: {
        indicador_pagamento: number
        forma_pagamento
    }[]

    duplicatas?: {
        numero: string
        data_vencimento: string
        valor: number
    }[]

    veiculo_uf?: string
    volumes?: {
        peso_bruto: number
        peso_liquido: number
        quantidade: number
        especie: string
    }[]
    veiculo_placa?: string
    valor_seguro?: number
    valor_frete?: number

    cnpj_transportador?: number
    cpf_transportador?: number
    nome_transportador?: string
    inscricao_estadual_transportador?: string
    endereco_transportador?: string
    municipio_transportador?: string
    uf_transportador?: string

    items: FocusNFeItemForm[]

    notas_referenciadas?: { chave_nfe: string }[]

}

export interface FocusNfeInvoiceResponse {
    ref: string
    status: FocusNfeStatus
    cpf_emitente: string
}

export interface FocusNfeCorrectionForm {
    correcao: string
    data_evento?: string
}