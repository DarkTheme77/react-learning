import React, { Component } from 'react';
import styles from './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        results: {},
        isFinished: false,
        answerState: null,
        quiz: [
            {
                question: 'Hello, World',
                rightAnswerId: 2,
                id: 1,
                answers: [
                    {text: 'Answer 1', id: 1},
                    {text: 'Answer 2', id: 2},
                    {text: 'Answer 3', id: 3},
                    {text: 'Answer 4', id: 4}
                ]
            },
            {
                question: 'Hello, EPAM',
                id: 2,
                rightAnswerId: 3,
                answers: [
                    {text: 'Answer 1', id: 1},
                    {text: 'Answer 2', id: 2},
                    {text: 'Answer 3', id: 3},
                    {text: 'Answer 4', id: 4}
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success') {
                return;
            }
        }

        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;

        const timeout = window.setTimeout(() => {
            if (this.isQuizFinished()) {
                this.setState({
                    isFinished: true
                })
            } else {
                this.setState({
                    activeQuestion: this.state.activeQuestion + 1,
                    answerState: null
                })
            }

            window.clearTimeout(timeout);
        }, 1000);

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success';
            }

            this.setState({
                answerState: {
                    [answerId]: 'success'
                },
                results
            })


        } else {
            results[question.id] = 'error';
            this.setState({
                answerState: {
                    [answerId]: 'error'
                },
                results
            })
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }

    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }

    render() {
        return (
            <div className={styles.Quiz}>
                <div className={styles.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    {
                        this.state.isFinished ?
                        <FinishedQuiz
                            results={this.state.results}
                            quiz={this.state.quiz}
                            onRetry={this.retryHandler}
                        /> :
                            <ActiveQuiz
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz;