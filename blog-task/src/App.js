import logo from './logo.svg';
import './App.css';
import react from 'react';

class Navbar extends react.Component {
  render() {
    return (
      <header>
        <nav>
          <div>
            <h6>
              Mahdi Suleiman
            </h6>
          </div>
          <div className="navbar-buttons">
            <button>Sign-in</button>
            <button>Register</button>
          </div>
        </nav>
      </header>
    )
  }
}

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
