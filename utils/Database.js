const config = {
    client: 'mysql2',
      connection: {
        database: 'nextjs',
        user: 'root',
        password: '',
        host: 'localhost',
        port: '3306',
      },
      migrations: {
        directory: __dirname + '/migrations',
      },
};
module.exports = require('knex')(config);