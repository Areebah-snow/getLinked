
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Intro from './components/theBigIdea/Intro';
import Rules from './components/RandG/Rules';
import Criteria from './components/criteria/Criteria';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Intro/>
      <Rules/>
      <Criteria/>
    </div>
  );
}

export default App;
