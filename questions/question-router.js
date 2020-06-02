const express = require('express');

const questions = require('./question-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    questions.find()
    .then(questions => {
      res.json(questions);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to get questions' });
    });
  });

  router.get('/surveydata', (req, res) => {
    questions.getSurveyData()
    .then(questions => {
      res.json(questions);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to get questions' });
    });
  });

  router.get('/:id', (req, res) => {
    const { id } = req.params;
    questions.getQuestionWithOptions(id)
    .then(question => {
        console.log('question', question)
      if (!question) {
        res.status(404).json({ message: 'Could not find question with given id.' })
      } else {
        res.status(200).json(question);
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get item' });
    });
  });

  router.get('/:id/name', (req, res) => {
    const { id } = req.params;
    questions.findByIdName(id)
    .then(question => {
      if (!question) {
        res.status(404).json({ message: 'Could not find question with given id.' })
      } else {
        res.status(200).json(question);
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get item' });
    });
  });

 router.get('/welcome', (req, res) => {
      res.json({message: 'comming through'});
  });
  
  module.exports = router;