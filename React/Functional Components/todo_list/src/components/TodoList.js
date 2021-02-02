import {useState} from "react";
import './TodoList.css';

const TodoList = () => {
    const [todoList, setTodoList] = useState([{task: "wash dishes", status: false}, {task: "clean room", status: false}]);
    const [newTask, setNewTask] = useState("");

    const onClickHandler = e => {
        setTodoList(todoList.filter( (item, index) => index !== parseInt(e.target.id)));
    }

    const checkBoxHandler = e => {
        setTodoList(todoList.map( (item, index) => index === parseInt(e.target.id) ? {task: item.task, status: e.target.checked} : {task: item.task, status: item.status}));
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        setTodoList(todoList.concat({ task: newTask, status: false }));
        setNewTask("");
    }

    return(
        <>
            <h1>Todo List:</h1>
            <ul>
                { todoList.map( (item, index) => {
                    return  <li key={index}>
                                { item.status ? <span className={ "itemStyle" }>{item.task}</span> : <span>{ item.task }</span> }
                                <button id={index} onClick={ onClickHandler }>Delete</button>
                                <label> Done?
                                    <input type="checkbox" checked={item.status} id={index} onChange={ checkBoxHandler }/>
                                </label>
                            </li>
                })}
            </ul>
            <form onSubmit={ onSubmitHandler }>
                <input type={"text"} onChange={ e => setNewTask(e.target.value) } value={newTask}/>
                <input type={"submit"} value={"Add Task"}/>
            </form>
        </>
    );
};

export default TodoList;