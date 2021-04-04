import './question.css'
import arrow from '../../images/icon-arrow-down.svg'

const Question = ({question,answer}) => {
    const handleclick=(e)=>{
        e.currentTarget.classList.toggle("visible");
    }
    return (
        <div className="question-container">
            <div onClick={handleclick} className="question">
                <div className="question-content">{question}</div>
                <div className="arrow-container"><img className="arrow" src={arrow} alt="" onClick={handleclick}/></div>
            </div>
            <div className="answer">
                {answer}
            </div>
        </div>  
    );
}

export default Question;