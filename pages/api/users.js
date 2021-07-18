import User from '../../Models/User';

// Fetch Users in Database
export default async function handler(req, res) {

    const users = await User.getAll();
    res.send(users);
}