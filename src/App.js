import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Body from './components/Body'
import data from './components/data';

function App() {
  const datas = data.map(taskData =>  < Body key={true} id = {taskData.id} task = {taskData.task} /> )
  return (
    <div className="App">
      <Home />
      {datas}
    </div>
  );
}

export default App;
