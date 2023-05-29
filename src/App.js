import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="App">
      <h1>IronContacts</h1>
           {/* <List /> */}
           <Contacts />
    </div>
  );
}

export default App;
