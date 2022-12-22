import { Toaster } from 'react-hot-toast';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className='dark:bg-violet-300'>
      <Navbar />

      <div className="hero h-72">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, rerum..</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <Home></Home>


      <Toaster />
    </div>

  );
}

export default App;
