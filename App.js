
import './App.css';
import ClassClick from './components/ClassClick';
import Counte from './components/Counte';
import Destructring from './components/Destructring';
import Destructuring1 from './components/Destructuring1';
import EventBind from './components/EventBind';
import Form from './components/Form';
import FunctionClick from './components/FunctionClick';
import  Hello from './components/Hello'
import ListOfObjects from './components/ListOfObjects';
import Message from './components/Message';
import NameList from './components/NameList';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import  Welcome from './components/Welcome'
function App() {
  return (
    <div className="App">
      <Form/>
      {/* <ParentComponent/>
      <EventBind/>
      <ListOfObjects/>
      <UserGreeting/>

      <NameList/> */}
      {/* <Destructring id="123" name="sandeep" salary="1000"/>
      <Destructuring1 stuId="111" stuName="naresh" marks="250"/>
      <h1>welcome  to First React Application</h1>
      <Counte></Counte>
      <Hello name="sandeep">
      <p>welcome to react child </p>
      <Message/>
      </Hello>
      <Hello/>
      <Welcome  fullname="akash kumar"/>
      <FunctionClick/>
      <ClassClick/> */}
    </div>
  );
}

export default App;
