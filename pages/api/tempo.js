async function tempo(req, res) {
    const dynamicDate = new Date();

    const apiSecret = process.env.CONVERTKIT_API_SECRET;

    // ? Pega os dados da url da api
    const subscribersResponse = await fetch(`https://api.convertkit.com/v3/subscribers?api_secret=${apiSecret}&from=2016-02-01&to=2015-02-28`);
    // ? Transforma em json a resposta acima
    const subscribersResponseJson = await subscribersResponse.json();
    // ? Pega um campo especifico 'total_subscribers'
    const inscritos = subscribersResponseJson.total_subscribers;

    // ? vercel adciona as requisições dentro de um buffer
    res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');





    res.json({
        date: dynamicDate.toGMTString(),
        inscritos: inscritos
    })
}
export default tempo;