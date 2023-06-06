import React, {useEffect, useState} from 'react';
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import MarvelService from "../../services/MarvelService";
import ErrorMessage from "../../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

const Hero = () => {
    const [char, setChar] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const marvelService = new MarvelService()

    useEffect(() => {
        updateChar();
        const timerId = setInterval(updateChar, 60000);

        return () => {
            clearInterval(timerId)
        }
    }, [])

    const onCharLoaded = (char) => {
        setLoading(false);
        setChar(char);
    }

    const onCharLoading = () => {
        setLoading(true);
    }

    const onError = () => {
        setError(true);
        setLoading(false);
    }

    const updateChar = () => {
        const id = Math.floor(Math.random() * (1011334 - 1010789) + 1010789)
        onCharLoading();
        marvelService
            .getCharacter(id)
            .then(onCharLoaded)
            .catch(onError);
    }
    // const {char, loading, error} = this.state;
    const spinner = loading ? <Spinner/> : null;
    const errorMessage = error ? <ErrorMessage/> : null;
    const content = !(loading || error) ? <LeftSide char={char}/> : null;
    return (
        <div className="flex shadow-[5px_5px_20px_rgba(0,0,0,0.25)] mt-12">
            <div className="flex flex-[1_1_50%] items-center justify-center">
                {errorMessage}
                {spinner}
                {content}
            </div>
            <RightSide updateChar={updateChar}/>
        </div>
    );
}

export default Hero;