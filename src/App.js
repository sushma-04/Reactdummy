import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import Mode from './components/Mode';

function App() {
  return (
    
    <>
    
    <Navbar title='Home' menu='Menu' gallery='Gallery'/>
    <TextForm />
    <Mode />
    
    </>
  );
}

export default App;
