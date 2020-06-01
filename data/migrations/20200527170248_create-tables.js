exports.up = function (knex) {
  return knex.schema
    .createTable('users', user => {
      user.increments('id');
      user.string('username', 255).notNullable().unique();
      user.string('email', 255).notNullable().unique();
      user.string('password', 255).notNullable();
    })
    .createTable('questions', questions => {
      questions.increments('id');
      questions.string('question', 255).notNullable().unique();
      questions.string('name', 255).notNullable().unique();
    })
    .createTable('options', options => {
      options.increments('id');
      options.string('description', 255).notNullable();
      options.string('value', 255).notNullable();
      options
        .integer('question_id')
        .unsigned()
        .notNullable()
        .references('questions.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('user_question', tbl => {
      tbl.increments();
      tbl
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('users.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .integer('question_id')
        .unsigned()
        .notNullable()
        .references('questions.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
  // .createTable('question_option', tbl => {
  //   tbl.increments();
  //   tbl
  //     .integer('question_id')
  //     .unsigned()
  //     .notNullable()
  //     .references('questions.id')
  //     .onDelete('CASCADE')
  //     .onUpdate('CASCADE');
  //   tbl
  //     .integer('option_id')
  //     .unsigned()
  //     .notNullable()
  //     .references('options.id')
  //     .onDelete('CASCADE')
  //     .onUpdate('CASCADE');
  // });
};

exports.down = function (knex) {
  return (
    knex.schema
      // .dropTableIfExists('question_option')
      .dropTableIfExists('user_question')
      .dropTableIfExists('questions')
      .dropTableIfExists('options')
      .dropTableIfExists('users')
  );
};
