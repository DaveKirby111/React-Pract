import './App.css';
import Hello from './components/Hello';
// import Message from "./components/message.js";
import Profile from "./components/Profile.js";
// import Counter from "./components/Counter.js";
import Resume from './components/Resume';
import FunctionalCounter from "./components/FunctionalCounter";
// import FunctionEvent from './components/FunctionEvent';
// import ClassEvent from './components/ClassEvent';
import ConditionalComponent from './components/ConditionalComponent';
import Product from './components/Product';
import Form from './components/Form';

function App() {
  return (
    <div className="App">

    <header>
    <Hello></Hello>
    </header>
    
    <main>

  <FunctionalCounter></FunctionalCounter>

   <ConditionalComponent></ConditionalComponent>

   <Product></Product>

   <Resume name = "David"></Resume>

   <Form></Form>

  </main>

   <footer>
   <Profile fname="David" lname="Kirby">
      <p>email: david@kinetic.com</p>
    </Profile>
   </footer>

    </div>
  );
}

export default App;
