// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
       <style>
      {`
        html, body {
          height: 100%;
          margin: 0;
        }
        .min-vh-100 {
          min-height: 100vh;
        }
        .d-flex {
          display: flex;
        }
        .flex-column {
          flex-direction: column;
        }
        .mt-auto {
          margin-top: auto;
        }
      `}
    </style>
    <div className="d-flex flex-column min-vh-100">
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
