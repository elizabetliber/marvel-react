import React, {useState, useEffect} from 'react';
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import MarvelService from "../../services/MarvelService";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const Content = ({onCharSelected, charId}) => {
    const [charList, setCharList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);

    const marvelService = new MarvelService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = (offset) => {
        onCharListLoading();
        marvelService.getAllCharacters(offset)
            .then(onCharListLoaded)
            .catch(onError);
    }

    const onCharListLoading = () => {
        setNewItemLoading(true);
    }

    const  onCharListLoaded = (newCharList) => {
        setCharList(charList => [...charList, ...newCharList]);
        setLoading(loading => false);
        setNewItemLoading(newItemLoading => true);
        setOffset(offset => offset + 9);
    }

    const onError = () => {
        setError(true);
        setLoading(false)
    }

    {
        return (
            <div className="flex mt-12">
                <LeftSide
                    onCharSelected={onCharSelected}
                    onRequest={onRequest}
                    charList={charList}
                    loading={loading}
                    error={error}
                    newItemLoading={newItemLoading}
                    offset={offset}
                />
                <ErrorBoundary>
                    <RightSide charId={charId}/>
                </ErrorBoundary>
            </div>
        );
    }
}

export default Content;