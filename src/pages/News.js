import { useParams } from 'react-router-dom';
import { getUudis } from '../data/uudised';

const News = () => {
    const { newsId } = useParams();
    const uudis = getUudis(newsId);

    if (!uudis) {
        return <div>Unable to retrieve news with id { newsId }</div>;
    }

    return (
        <div>
            <h1>{uudis.pealkiri}</h1>
            <p>{uudis.sisu}</p>
        </div>
    );
};

export default News;
