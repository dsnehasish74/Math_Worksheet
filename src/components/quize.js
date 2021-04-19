import { useState } from 'react'
import QuestionPaper from './questionpaper'
const Quize = () => {

    const [isStarted, setIsStarted] = useState(false);
    const startQuiz = () => {
        setIsStarted((prev) => !prev);
    }

    return (
        <div>
            {
                (isStarted === true) ? <QuestionPaper /> : (
                    <div>
                        <h2 className="Hero">Start Your Test Now</h2>
                        <button onClick={startQuiz} className="Start_button">Start Now</button>
                    </div>)
            }
        </div>
    );

}

export default Quize;