import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../App';

const News = () => {
    const { newsId } = useParams();
    const [uudis, setUudis] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        client.getEntry(newsId).then((response) => {
            console.log(response);
            setUudis(response.fields);
            setIsLoading(false);
        });
    }, [])

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!uudis) {
        return <div>Unable to retrieve news with id { newsId }</div>;
    }

    return (
        <div style={{ maxWidth: '80%' }}>
            <h1>{uudis.title}</h1>
            <img src={uudis.image.fields.file.url} alt={uudis.image.fields.title} height="200" />
            <p style={{ whiteSpace: 'pre-wrap' }}>{uudis.body}</p>
        </div>
    );
};

export default News;
