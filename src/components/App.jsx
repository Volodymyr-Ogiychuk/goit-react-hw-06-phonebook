import s from './app.module.css';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter.jsx';
import ContactList from './ContactList/ContactList'

const App = () => {
  
  return (
    <div>
      <h1 className={s.title}>Phonebook #6</h1>
      <ContactForm />
      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;