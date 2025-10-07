import React from 'react'
import classes from './FaqItem.module.css'

type FaqItemProps = {
    id: number
    question: string
    answer: string
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
    const [viewAnswer, setViewAnswer] = React.useState(false)
    const handleAnswer = () => {
        setViewAnswer((prevState)=> {
            return (
                !prevState
            )
        })
    }

    return (
        <div className={classes.faq_item} style={viewAnswer ? {backgroundColor: "var(--white)"} : {backgroundColor: "var(--orange-95)"}}>
            <div className={classes.faq_item_top}>
                <h5 className={classes.faq_item_question}>{question}</h5>
                <button className={classes.faq_item_action} onClick={handleAnswer}>
                    <img src={viewAnswer ? "/images/minus.png" : "/images/plus.png"} alt="minus/plus" />
                </button>
            </div>
            <p className={viewAnswer ? classes.faq_item_answer : classes.d_n}>{answer}</p>
        </div>
    )
}

export default FaqItem