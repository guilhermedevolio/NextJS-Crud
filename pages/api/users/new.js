import User from "../../../Models/User";

export default async function handler(req, res) {
    if(req.method == "POST") {
        const {name, email, password} = req.body;
        try {
            const response = await User.createUser(name,email,password);
            return res.json({message: 'Usuário cadastrado com sucesso'});
        } catch (err) {
            //TODO : Log System
            return res.json({message: 'Erro ao cadastrar usuário'});
        }
    }
}