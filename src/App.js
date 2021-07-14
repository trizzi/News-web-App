import Navbar from './components/navbar-component/Navbar';
import Newsfeed from './components/news-section/Newsfeed';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <div>
        <Newsfeed />
      </div>
    </div>
  );
};

export default App;
