const express = require('express');
const helmet = require('helmet');

const QuestionsRouter = require('./questions/question-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).json({ api: "Hello from the server" });
  });

server.use('/api/questions', QuestionsRouter);
// server.use('/api/resources', ResourcesRouter);
// server.use('/api/tasks', TasksRouter);

module.exports = server;