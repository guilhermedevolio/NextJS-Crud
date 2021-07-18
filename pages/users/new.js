import React, { useState } from 'react';
import axios from 'axios';

export default function New() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function onSubmit(e) {
        e.preventDefault();

        if(name == undefined || email == undefined || password == undefined) {
            alert('Preencha todos os campos');
        }
        const response = await axios.post('/api/users/new', {name,email,password});

        console.log(response.data);
    }

    return (
        <div>
             <h2>Form de Cadastro</h2>
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