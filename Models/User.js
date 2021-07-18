const db = require('../utils/Database');
const bcrypt = require('bcrypt');

class User {
    async getAll() {
        try {
            return await db.select('*').from("users");
        }catch(err){
            console.log(err);
        }
    }

    async createUser(name, email, password) {
        const password_hash = await bcrypt.hash(password, 10);

        try {
            return await db.insert({name, email, password: password_hash}).table("users");
        }catch(err){
            console.log(err);
        }
    }
}

module.exports = new User();
