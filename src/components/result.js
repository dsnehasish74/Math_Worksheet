import { useState, useEffect } from 'react'
import { questions } from './questions.js'
import { PieChart } from 'react-minimal-pie-chart';
const Result = ({ ans }) => {
    const [right, setRight] = useState(0)
    useEffect(() => {
        for (var i = 0; i < 10; i++) {
            if (questions[i].ans == ans[i]) {
                setRight((no) => no + 1);
            }
        }
    }, [ans])
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Your Score</h1>
            <h3 className="score" style={{textAlign:'center'}}>{right}/10</h3>
            <PieChart
                data={[
                    { title: 'Success', value: right, color: 'green' },
                    { title: 'Failure', value: 10-right, color: 'red' }
                ]}
                animate={true}
            />;
        </div>
    );
}

export default Result;