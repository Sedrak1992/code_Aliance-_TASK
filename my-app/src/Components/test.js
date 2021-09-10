import React,{useState} from 'react';
import state from './test.json'
import img_1 from './Image/1.jpg'
const Test = () => {

    const [currentQuestion, setcurentQuestion] = useState(0)
    const [score, setscore] = useState(0)
    const [showScore, setShovcore] = useState(false)
    const Ansveroption   = (a ) => {
       if(a){
           setscore(score +1)
       }
       const next = currentQuestion + 1
       if(next < state.question.length) {
           setcurentQuestion(next)
       }
       else {
           setShovcore(true)
       }
    }
    const  Refrsh = () => {
        setcurentQuestion(0)
        setscore(0)
        setShovcore(false)
    }
    return (
        <div>


        {
            showScore

            ? <div className={'final'}>
                <div>chisht patasxan {score} /{state.question.length} ic</div>
                <button type={'button'} onClick={Refrsh}>Noric pordzel</button>
            </div>

            : <div className={'test'}>
                <div className={'test-container-1'}>
                    <div className={'question-contaier'}>
                        <div className={'quastion-count'}>

                            <span>Harc - {currentQuestion + 1 } </span>
                        </div>
                        <div className={'question-text'}>{state.question[currentQuestion].question_text}</div>
                    </div>
                    <div className={'answers'}>
                        { state.question[currentQuestion].ansver_options && state.question[currentQuestion].ansver_options.map((a) => {
                            return(
                                <div>
                                        <button type={'button'} onClick={() => Ansveroption(a.isCorect) }>{a.ansvertext}</button>
                                </div>
                        )
                        })}
                    </div>
                </div>

            </div>

        }
        </div>
    );
};

export default Test;