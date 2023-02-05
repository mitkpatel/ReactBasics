import './App.css';
import PersonForm from './components/PersonForm.js';
import Product from './components/Product';
import UserForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { useState } from 'react';

function App() {

  // here we create an array state to store the contact form data
  const [contacts, updateContacts] = useState([]);

  const addContact = (contactInfo) => {
    updateContacts([...contacts, contactInfo]);
  };
  console.log(contacts)

  return (
    <div className="App">
      <UserForm addContact={addContact} />
      <ContactList contacts={contacts} />
      {/* <Product
          img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
          name="Cyxus"
          desc="Non-Slip Fitness Leisure Running Sneakers"
          price="$29"
        />
        <Product
          img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747"
          name="Vitike"
          desc="Latest Men Sneakers -Black"
          price="$100"
        />
        <Product
          img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437"
          name="Aomei"
          desc="Men's Trend Casual Sports Shoe"
          price="$40"
        /> */}
    </div>
  );
}

export default App;
