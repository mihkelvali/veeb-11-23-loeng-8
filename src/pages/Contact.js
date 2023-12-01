import { useLocation } from 'react-router-dom'

const Contact = () => {
    const location = useLocation();
    const uudis = location.state

    return (
        <div>
            <p>{uudis.pealkiri}</p>
            <p>{uudis.sisu}</p>
        </div>
    );
}

export default Contact;
