import React, { useState } from 'react';
import axios from 'axios';

export default function New() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [message, setMessage] = useState('');

    async function onSubmit(e) {
        e.preventDefault();

        if(name == undefined || email == undefined || password == undefined) {
            setMessage('Preencha todos os campos');
        }

        const response = await axios.post('/api/users/new', {name,email,password});

        setMessage(response.data.message);
    }

    return (
        <div>
             <h2>Form de Cadastro</h2>
             {message && message}
             <form method="POST">
                <div>
                    <label>Nome</label>
                    <input onChange={(e) => setName(e.target.value)} type="text" name="name"></input>
                </div>
                <div>
                    <label>Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" name="email"></input>
                </div>
                <div>
                    <label>Senha</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="text" name="password"></input>
                </div>
                <div>
                    <button onClick={(e) => onSubmit(e)}>Cadastrar</button>
                </div>
             </form>
        </div>
    )
}