import './App.css';
import PersonForm from './components/PersonForm.js';
import Product from './components/Product';
import UserForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { useState } from 'react';
import TodoList from './components/TodoList';
import TodoListJSON from './components/TodoListJSON';
import todoList from './assets/todo';

function App() {

  // here we create an array state to store the contact form data
  const [contacts, updateContacts] = useState([]);
  const [list, setTodoList] = useState(todoList);

  const addContact = (contactInfo) => {
    updateContacts([...contacts, contactInfo]);
  };
  console.log(contacts)

  const handleAction = (todo) => (e) => {
    console.log("todo", e.target.value);
    let ab = list.map(t => {
       return t.id == todo.id ? {...t, completed: !todo.completed} : {...t};
     });
     
     setTodoList(ab);
   }

   const handleDelete = (todo) => (e) => {
    console.log("delete", todo);
    let ab = list.map(t => {
      return t.id == todo.id ? {} : {...t}
    })

    setTodoList(ab);
   }

   const handleAdd = (todo) => (e) => {
    console.log("add", todo);

    let ab = [...list];
    ab = [...ab, todo];
    setTodoList(ab);
   }

  return (
    <div className="App">
      {/* <TodoListJSON data={list} handleToggle = {handleAction} handleDelete = {handleDelete} handleAdd = {handleAdd}/> */}
      <TodoList />
      {/* <UserForm addContact={addContact} />
      <ContactList contacts={contacts} />
      <Product
          img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
          name="Cyxus"
          desc="Non-Slip Fitness Leisure Running Sneakers"
          price="$29"
        /> */}
       
    </div>
  );
}

export default App;
