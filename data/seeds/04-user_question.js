
exports.seed = function(knex) {
  return knex('user_question').del()
    .then(function () {
      return knex('user_question').insert([
        {user_id: 1, question_id: 1},
        {user_id: 2, question_id: 1},
        {user_id: 3, question_id: 1},

        {user_id: 1, question_id: 2},
        {user_id: 2, question_id: 2},
        {user_id: 3, question_id: 2},

        {user_id: 1, question_id: 3},
        {user_id: 2, question_id: 3},
        {user_id: 3, question_id: 3},

        {user_id: 1, question_id: 4},
        {user_id: 2, question_id: 4},
        {user_id: 3, question_id: 4},
      ]);
    });
};
