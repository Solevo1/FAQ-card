import './card.css'
import woman from '../../images/illustration-woman-online-desktop.svg';
import Question from '../question/question';


const Card = ()=>{
    return(
        <div className="card-wrapper">
            <div className="card">
                <div className="left-side">                  
                    <img className="woman" src={woman} alt="woman"/>
                </div>
                <div className="right-side">
                    <b className="FAQ">FAQ</b>
                    <div className="questions">
                        <Question  
                            question='How many team members can I invite?'
                            answer='You can invite up to 2 additional users on the Free plan. There is no limit on 
                            team members for the Premium plan.'
                        />
                        <Question  
                            question='What is the maximum file upload size?'
                            answer='No more than 2GB. All files in your account must fit your allotted storage space.'
                        />
                        <Question  
                            question='How do I reset my password?'
                            answer='Click “Forgot password” from the login page or “Change password” from your profile page.
                            A reset link will be emailed to you.'
                        />
                        <Question  
                            question='Can I cancel my subscription?'
                            answer='Yes! Send us a message and we’ll process your request no questions asked.'
                        />
                        <Question  
                            question='Do you provide additional support?'
                            answer='Chat and email support is available 24/7. Phone lines are open during normal business hours.'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;