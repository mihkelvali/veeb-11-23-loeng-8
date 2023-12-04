import { useState, useEffect } from "react";

import StyledLink from "../components/StyledLink";
import { client } from "../App"

const Home = () => {
    const [uudised, setUudised] = useState([]);

    useEffect(() => {
        client.getEntries().then((response) => {
            console.log(response.items);
            setUudised(response.items);
        });
    }, [])

    return (
        <div>
            <h1>Home</h1>
            <p>This is the home page</p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {uudised.map(uudis => (
                    <StyledLink key={uudis.fields.id} to={`/news/${uudis.sys.id}`}>
                        <img src={uudis.fields.image.fields.file.url} alt={uudis.fields.image.fields.title} height="80" />
                        <span>{uudis.fields.title}</span>
                    </StyledLink>
                ))}
            </div>
        </div>
    );
}

export default Home;
