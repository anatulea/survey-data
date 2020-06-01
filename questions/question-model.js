const db = require('../data/db-config.js');
function find() {
  return db('questions');
}
function findById(id) {
  return db('questions').select('question').where({ id });
}
function findByIdName(id) {
  return db('questions').select('name').where({ id });
}
// function getSurveyData(id){
// // write a query that will bring back the whole surveydata object like in node-db-challenge

// return db('questions as q')
// .join('options as o', 'o.question_id', 'q.id')
// .select('q.question', 'q.name', 'o.description', 'o.value')
// .where({'q.id':id})
// }

// function getSurveyData(id) {
//   const options = db('options')
//     .where('options.question_id', '=', id)
//     .select('options.description', 'options.value');
//   let questions = db('questions').where('questions.id', '=', id);
//   return questions;
// }

function getSurveyData(id) {
  return db('questions')
    .where('questions.id', '=', id)
    .then(question => {
      question.map(item => {
        console.log('QUESTION', item);

        const options = db('options')
          .where('options.question_id', '=', 'questions.id')
          .select('options.description', 'options.value');

        item.optionsArr = options;
      });
      return question;
    });
}

module.exports = {
  find,
  findById,
  findByIdName,
  getSurveyData,
};
