import React from 'react';
const axios = require('axios');


export async function getStaticProps(context) {
    const res = await fetch('http://localhost:3000/api/users');
    const data = await res.json()

    if (!data) {
      return {
        notFound: true,
      }
    }

    return {
      props: { users: data }, 
    }
}

export default function Users({users}) {
    return(
        <div>
            <h2>Lista de Usuários Cadastrados</h2>
            {users.map(user => (
                <div key={user.id}>
                    <hr/>
                    <p>Nome: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ))}
        </div>
    )
}

