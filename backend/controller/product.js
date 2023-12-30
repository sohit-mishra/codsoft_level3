const Quiz = require('../models/quizmodal');

const quizdisplay = async (req, res) => {
    try {
        const number = 1;
        const QuizExist = await Quiz.findOne({ index: number });

        if (!QuizExist) {
            return res.status(404).json({ message: 'Quiz not found' });
        }

        res.status(200).json({
            msg: "Quiz details",
            data: QuizExist,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = quizdisplay;