import './App.css';
import react from 'react';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Registeration from './components/register/register';

function App() {
  return (
    <div>
      <Navbar />
      <Registeration />
      <Footer />
    </div>
  );
}

export default App;