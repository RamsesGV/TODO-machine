import React from "react";
import './TodoItem.css'

const TodoItem = ({onComplete,onDelete,text,completed}) => { 

    //const onComplete =  () => { 
       // alert('Ya completaste el todo' + props.text)
    //}
    //const onDelete =  () => { 
        //alert('Borraste el todo' + props.text)
    //}




    return(
<li className="TodoItem">
    <span 
    className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
    onClick={onComplete}
    >
        √
    </span>


    <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {text}
    </p>


    <span 
    className="Icon Icon-delete"
    onClick={onDelete}
    >
        X
    /</span>
</li> 
    )
}

export {TodoItem};