import logo from './logo.svg';
import './App.css';
import TextComponent from './components/hoc/TextComponent';
import SharedValueComponent from './components/assignments/SharedValueComponent';
import MyContext from './components/contextDemo/MyContext';
import Counter from './components/counterComponent/Counter';
function App() {
  const sharedData = 'This is some shared Data';
  return (
    <MyContext.Provider value={sharedData}>


      <div className="App">
        <TextComponent />
        <SharedValueComponent />
        <hr />
        <Counter />
      </div>

    </MyContext.Provider>
  );
}

export default App;
