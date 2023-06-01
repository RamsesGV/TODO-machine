import React from "react";
import './CreateTodoButton.css';

const CreateTodoButton = ({setOpenModal}) => { 

const onClickButton = () => { 
    setOpenModal(state => !state)
}





    return (
        <button
        className="CreateTodoButton"
        onClick={onClickButton}
        >+</button>
    )
}

export { CreateTodoButton };