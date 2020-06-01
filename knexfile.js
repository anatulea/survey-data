// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/surveydb',
  
    // connection: {
    //   host: "127.0.0.1",
    //   filename: './data/survey.db3',
    //   database: "anatulea",
    //   user: "anatulea",
    //   port: 5433,
    //   password: "",
    // },
    // connection: {
    //   filename: './data/survey.db3',
    // },
    // useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    // pool: {
    //   afterCreate: (conn, done) => {
    //     conn.run('PRAGMA foreign_keys = ON', done);
    //   },
    // },
  },
};