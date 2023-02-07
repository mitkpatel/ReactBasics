import './App.css';
import PersonForm from './components/PersonForm.js';
import Product from './components/Product';
import UserForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { useState } from 'react';
import TodoList from './components/TodoList';

function App() {

  // here we create an array state to store the contact form data
  const [contacts, updateContacts] = useState([]);

  const addContact = (contactInfo) => {
    updateContacts([...contacts, contactInfo]);
  };
  console.log(contacts)

  return (
    <div className="App">
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
