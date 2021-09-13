import { useParams, Route, Link } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from '../components/comments/Comments';
import useHttp from "../components/hooks/use-http";
import { getSingleQuote } from "../components/lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const DUMMY_QUOTES = [
    {
        id: 'q1',
        author: 'Aurora',
        text: 'Learning React is fun!'
    },
    {
        id: 'q2',
        author: 'Cannabis',
        text: 'All in ACB!'
    },
]

const QuoteDetail = () => {
    const params = useParams();

    const { quoteId } = params;

    const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);



    if(status === 'pending')
    {
        return (<div className='centered'>
            <LoadingSpinner />
        </div>);

    }

    if(error) {
        return <p className='centered'>{error}</p>
    }

    if (!loadedQuote.text) {
        return <p>No quote found!</p>
    }

    return (
        <>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
            <Route path={`/quotes/${params.quoteId}`} exact>
            <div className='centered'>
                <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>Load comments</Link>
            </div>
            </Route>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </>
    );
};

export default QuoteDetail;