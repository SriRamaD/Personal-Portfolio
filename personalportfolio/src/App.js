import './App.css';
import './components/NavigationBar'
import NavigationBar from './components/NavigationBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Experience from './components/Experience';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
