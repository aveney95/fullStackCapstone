import { useNavigate } from 'react-router-dom';
function LandingPage() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Welcome to the Marketplace</h1>
            <button onClick={() => navigate('/home')}>Enter</button>
        </div>
    );
}
export default LandingPage;