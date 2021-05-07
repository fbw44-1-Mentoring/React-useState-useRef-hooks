
import React,{useState, useRef} from 'react';

/* let array = [2,4,7]
console.log(array[0])
console.log(array[1])

let [a,b,c]= array
console.log(a)
console.log(b)
console.log(c)

let student={name:"John", age:34,classname:"fbw44-1"}
console.log(student.name)
console.log(student.age)
console.log(student.classname)

let {name,age,classname} =student
console.log(name)
console.log(age)
console.log(classname) */




function App() {

  let input= useRef() //create ref/tag

  console.log(useState("naqvi"))

  const [counter, setCounter ]= useState(0)
  const [todo,setTodo]=useState(["task1","task2"])
/*   const [value,setValue]=useState("") */
 

const increment=(e)=>{
 setCounter(counter+1)
}

/* const getInputData =(e)=>{
    setValue(e.target.value)
} */

const addItemintoTask=()=>{
  console.log(input.current)
  setTodo([...todo, input.current.value])
}
  return (
    <div className="App">
      <h1>counter : {counter}</h1>
      <button onClick={increment}>increment</button><br/>
      <input type="text" ref={input} />
      {todo.map(task=>{
        return(
        <h3>{task}</h3>
        )
      })}
      <button onClick={addItemintoTask}>Add task</button>
    </div>
  );
}


export default App;