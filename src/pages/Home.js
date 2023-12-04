import StyledLink from "../components/StyledLink";
import { getUudised } from "../data/uudised";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>This is the home page</p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {getUudised().map(uudis => (
                    <StyledLink key={uudis.id} to={`/news/${uudis.id}`}>{uudis.pealkiri}</StyledLink>
                ))}
            </div>
        </div>
    );
}

export default Home;
