import './App.css';
import './components/NavigationBar'
import NavigationBar from './components/NavigationBar';
import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
    </div>
  );
}

export default App;
