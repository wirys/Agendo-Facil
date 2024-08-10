export async function GET() {

    const professional = [{
        name: 'WIRYS DA CUNHA FRANCISCO',
        email: 'wirys@wirys.com.br',
        phone: '5528992756672', 
        services: [
            {
                id: '001', 
                service: 'DESENVOLVIMENTO DE SITE',
                price: 1500.00,
                duration: 30

            }
        ]
    },
    {
        name: 'LUIZ CESAR',
        email: 'wirys@wirys.com.br',
        phone: '5528992756672', 
        services: [
            {
                id: '001', 
                service: 'DESENVOLVIMENTO DE SITE',
                price: 1500.00,
                duration: 30

            }
        ]
    },

    ]


    return Response.json(professional)

}