const connection = require('../database/connection');

module.exports = {
    async create (request, response){
        const { id } = request.body;

        const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first();
        //usa first pq é só o primeiro elemento
        if(!ong){
            return response.status(400).json({error : 'No ONG found with this id'});
        }
        return response.json(ong);
    }
}