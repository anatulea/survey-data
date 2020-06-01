exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        { username: 'John1', email: 'john1@gmail.com', password: 'johnpsw1' },
        { username: 'John2', email: 'john2@gmail.com', password: 'johnpsw2' },
        { username: 'John3', email: 'john3@gmail.com', password: 'johnpsw3' },
      ]);
    });
};
