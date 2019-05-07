import React from 'react'

// const Todo = props => <li>{props.text}</li>
const Todo = props => {
    // return (
    //   <div>
    //     {/* <span>{props.text}</span><button>DELETE</button> */}
    //     <span>{props.text}</span><button onClick={() => props.delete(props.text)}>DELETE</button>
    //   </div>
    // )

    renderTodos = () => {
        // return this.props.todos.map(todo => <Todo delete={
        // this.props.delete}
        //     key={todo.id} 
        //     todo={todo} 
        //     />)
        
        <div>
        <span>
            {props.todo.text}
        </span>
        <button onClick={() => props.delete(props.todo.id)}>DELETE</button>
        </div>

    }
}  

export default Todo;
