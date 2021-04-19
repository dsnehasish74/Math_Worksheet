import {useState,useRef} from 'react';
import {questions} from './questions.js'
import Result from './result.js'
const QuestionPaper=()=>{
    const inputRef=useRef();
    const [qno,setQno]=useState(1);
    const [ans,setAns]=useState([]);

    const submitAnswer=()=>{
        setAns((ans)=>[...ans,inputRef.current.value])
        setQno((qno)=>qno+1);
    }
    return (
        <div>
           {
                (qno>10) ? <Result ans={ans}/> : (
                    <div>
                       <h2>Q{questions[qno-1].no}. {questions[qno-1].question} =</h2>
                       <input ref={inputRef} class="answer_input"/><button className="Start_button" onClick={submitAnswer} >Enter</button>
                    </div>)
            }
        </div>
    );
}
export default QuestionPaper;