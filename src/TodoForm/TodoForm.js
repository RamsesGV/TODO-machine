import React from "react";
import './TodoForm.css'

const TodoForm = ({setOpenModal,addToDo}) => { 

const onSubmit = (event) => { 
    event.preventDefault()
    addToDo(newTodoValue)
    setOpenModal(false)
}
const [newTodoValue,setNewTodoValue] = React.useState('')

const onCancel = () => { 
    setOpenModal(false)
}
const onChange = (event) => { 
    setNewTodoValue(event.target.value)
}

return(
    <form onSubmit={onSubmit}>
        <label className="labelcss">Escribe tu nuevo TODO</label>
        <textarea 
        placeholder="Escribre tu nuevo Todo"
        value={newTodoValue}
        onChange={onChange}
        />

<div className="TodoForm-buttonContainer"> 

        <button
        type="button"
        onClick={onCancel}
        className="TodoForm-button TodoForm-button--cancel"
        >Cancelar</button>

        <button
        type="submit"
        className="TodoForm-button TodoForm-button--add"
        >Agregar</button>
</div>

    </form>


)
}

export { 
    TodoForm
}