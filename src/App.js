//import './App.css';
import React from "react";
import { TodoCounter } from './TodoCounter/TodoCounter'
import { TodoItem } from './TodoItem/TodoItem'
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton'
import { TodoSearch } from './TodoSearch/TodoSearch'
import { TodoList } from './TodoList/TodoList'
import { Modal } from './Modal/Modal'
import { TodoForm } from "./TodoForm/TodoForm";



function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  


  React.useEffect( () =>  {
    try {
      const localStorageItem = localStorage.getItem(itemName)
    let parsedItem;


    if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
    } else {
    parsedItem = JSON.parse(localStorageItem);
    setItem(parsedItem)
  }
    setItem(parsedItem)
    setLoading(false)
    } catch (error) {
      setError(true)
      setLoading(false)
    }
    
  },[]);
  
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  return {
    item, 
    saveItem, 
    loading, 
    error,
  };
}
function App() {
  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;


  
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const addToDo = (text) => { 
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    })
    saveTodos(newTodos)
  }

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };


  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
<React.Fragment> 

  <TodoCounter
  total={totalTodos}
  completed={completedTodos}
  
  />

  <TodoSearch
  searchValue={searchValue}
  setSearchValue={setSearchValue}
  /> 

  
  <TodoList>
      {loading && <p>Estamos cargando...</p>}
      {error && <p>Desesperate! hubo un error!</p>}
      {(!loading && todos.length === 0) &&<p>Crea tu primer ToDo</p>}
      {
        searchedTodos.map( todo => (
          <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
        ))
      }
  <CreateTodoButton 
  setOpenModal={setOpenModal}
  />  


    {openModal && (
      <Modal>
        <TodoForm 
        setOpenModal = {setOpenModal}
        addToDo={addToDo}
        />
      </Modal>
    )}


  </TodoList>



  

</React.Fragment>
)
}

export default App;
