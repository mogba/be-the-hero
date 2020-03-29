// aqui acontece a instância de recursos da projeto (ex: Crypto crypto = new Crypto();)
const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(resquest, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        // await faz esperar a conexão terminar para então prosseguir (precisa de async para funcionar)
        await connection('ongs').insert({
           id,
           name,
           email,
           whatsapp,
           city,
           uf 
        });

        return response.json({ id });
    }
};