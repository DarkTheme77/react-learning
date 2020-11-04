import React from 'react';
import styles from './FinishedQuiz.css';
import Button from '../UI/Button/Button';

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key)=> {
        if (props.results[key] === 'success') {
            total++
        }

        return total;
    }, 0);

    return (
        <div className={styles.FinishedQuiz}>
            <ul>
                { props.quiz.map((quizItem, index) => {
                    const iconClasses = [
                        'far',
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        styles[props.results[quizItem.id]]
                    ];

                    return (
                        <li key={index}>
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={iconClasses.join(' ')}/>
                        </li>
                    )
                }) }
            </ul>

            <p>Правильно {successCount} из {props.quiz.length}</p>

            <div>
                <Button onClick={props.onRetry} type="primary">Повторить</Button>
                <Button type="success">перейти в список тестов</Button>
            </div>
        </div>
    )
}

export default FinishedQuiz;
