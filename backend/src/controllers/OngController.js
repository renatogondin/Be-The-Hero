//também tem que mportar módulo crypto
const crypto = require('crypto');
//vamos exportar um objeto aqui de dentro com os métodos
//tem que importar o módulo pra conectar com o bd e lembrar que está
//pastas acima
const connection = require('../database/connection');

//rota da listagem


module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },
    async create(request, response) {
        const {name, email, whatsapp, city, uf } = request.body;
        //gera id
         const id = crypto.randomBytes(4).toString('HEX');
     
         await connection('ongs').insert({
             id,
             name,
             email,
             whatsapp,
             city,
             uf,
         })
     
         return response.json({ id });
    }

};