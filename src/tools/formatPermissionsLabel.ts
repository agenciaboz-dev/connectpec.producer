export const formatPermissionsLabel = (key: string) => {
    const values = {
        customers: "Clientes",
        natures: "Naturezas de operação",
        products: "Produtos",
        enterprises: "Pessoas e Empresas",
        properties: "Propriedades",
        bank_accounts: "Contas de banco",
        edit_permissions: "Editar Permissẽs",
        invite_user: "Convidar usuário",
        options: "Opções",
        report_nfe: "Notas Fiscais",
        sold_products: "Produtos Vendidos",
        chart_accounts: "Plano de Contas",
    }

    // @ts-ignore
    return values[key]
}
