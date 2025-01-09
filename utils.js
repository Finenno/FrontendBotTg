/*
СДЕЛАНО ПО ВИДЕО:
https://www.youtube.com/watch?v=BQr9u6Bb_mE&t=2969s
*/


const questions = require("./questions.json");
const { Random } = require('random-js');

const getRandomQuestion = (topic) => {
    const random = new Random();

    let questionTopic = topic.toLowerCase();

    const randomQuestionIndex = random.integer(
        0,
    questions[questionTopic].length - 1,
    );

    return  questions[questionTopic][randomQuestionIndex];
};

const getCorrectAnswer = (topic, id) => {
    const question = questions[topic].find((question) => question.id === id);

    if (!question.hasOptions) {
        return question.answer;
    }

    return question.options.find((option) => option.isCorreact).text;
}

module.exports = { getRandomQuestion, getCorrectAnswer }