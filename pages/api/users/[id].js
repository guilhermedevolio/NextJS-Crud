import User from "../../../Models/User"

export default async function handler(req, res) {
    const { id } = req.query
    const user = await User.getById(id);

    if(!user) {
        return res.send('Nenhum registro encontrado');
    }

    return res.json({user}); 
}