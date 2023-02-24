import logo from './logo.svg';
import './App.css';
import self from './assets/images/self.png'

function App() {
  return (
    <div className="App">
      <div className='content'>
        <div className='left_c'><h1 className='typed'>Hi, Vishal M. here!</h1></div>
        <div className='right_c'><img className="App-logo" alt="logo" src={self}></img></div>
      </div>
    </div>
  );
}

export default App;
