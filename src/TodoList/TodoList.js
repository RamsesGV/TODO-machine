import React from 'react'
import './TodoList.css'

const TodoList = (props) =>  {
    return(
        <section className='section'> 
        <ul>
            
            {props.children}
            

        </ul> 
        </section>
    )
}

export {TodoList};