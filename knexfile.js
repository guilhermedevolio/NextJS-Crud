module.exports = {
    development: {
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
    },
    staging: {
      client: 'postgresql',
      connection: {
        database: 'my_db',
        user:     'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    },
  
    production: {
      client: 'postgresql',
      connection: {
        database: 'my_db',
        user:     'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
};