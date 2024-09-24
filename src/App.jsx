// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    <div className="d-flex flex-column min-vh-100 app-background">
      <Header />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
      </div>
    </>
  );
}

export default App;
