import { useNavigate, useLocation } from 'react-router-dom';
import './styles.css'; 
import EventDisplay from './eventDisplay'; // Adjust the path based on your file structure


function Home() {

    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const userId = state && state.id;
    
    return (
    <html lang="en">

        <body>
        <header>
            <h2 className="logo">Logo</h2>
            <nav className="navigation">
            <a >Home</a>
            <a >About</a>
            <a >Contact Us</a>

            <button className='btnLogin-Popup' onClick={() => 
            {
                navigate('/login')
            }}>Login</button>
            </nav>
            
        </header>
        <div className='homepage'>
            <h1>Hello {userId} and welcome to your Event Planner</h1>
            <EventDisplay /> {/* Render the EventDisplay component */}

        </div>
        </body>
    </html>
  );
}

export default Home;
