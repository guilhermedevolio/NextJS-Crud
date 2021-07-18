import User, { checkEmail } from "../../../Models/User";

export default async function handler(req, res) {
    if(req.method == "POST") {
        const {name, email, password} = req.body;

        const checkEmailExists = await User.checkEmail(email);

        if(!checkEmailExists) {
            try {
                const response = await User.createUser(name,email,password);
                return res.json({message: 'Usuário cadastrado com sucesso'});
            } catch (err) {
                //TODO : Log System
                return res.status(402).json({message: 'Erro ao cadastrar usuário'});
            }
        }else{
            return res.json({message: 'Já existe um usuário com o e-mail informado'});
        }
       
    }
}