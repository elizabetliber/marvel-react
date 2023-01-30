import React, {Component} from 'react';
import ComicsList from "./ComicsList";
import MyLoader from "../Skeleton/Skeleton";
import ErrorMessage from "../../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import PropTypes from 'prop-types';
import MarvelService from "../../services/MarvelService";


class RightSide extends Component {
    state = {
        char: null,
        loading: false,
        error: false
    }

    marvelService = new MarvelService()

    componentDidMount() {
        this.updateChar()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar()
        }
    }

    componentDidCatch(err, info) {
        console.log(err, info)
         this.setState({error: true})
    }

    updateChar = () => {
        const {charId} = this.props
        if (!charId) {
            return;
        }

        this.onCharLoading();

        this.marvelService
            .getCharacter(charId)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    onCharLoading = () => {
        this.setState({
            loading: true
        })
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true,
        })
    }

    render() {
        const {char, loading, error} = this.state;

        const skeleton = char || loading || error ? null : <MyLoader/>
        const errorMessage = error ? <ErrorMessage/> : null
        const spinner = loading ? <Spinner/> : null
        const content = !(loading || error || !char) ? <View char={char}/> : null
        return (
            <div
                className="flex flex-col w-[425px] max-h-[100%] text-black bg-white p-7 shadow-[0px_0px_20px_rgba(0,0,0,0.25)]">
                {/*<div class={}>*/}

                {/*</div>*/}
                {skeleton}
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}


const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = char
    return (
        <>
            <div className="flex">
                <img src={thumbnail} alt={name} className="w-[150px] h-[150px]"/>
                <div className="flex flex-col justify-between text-black ml-6">
                    <h2 className="text-[22px] justify-between font-bold">{name}</h2>
                    <div className="space-y-3">
                        <div>
                            <a href={homepage} target="_blank" className="button button__main">
                                <div className="inner">homepage</div>
                            </a>
                        </div>
                        <div>
                            <a href={wiki} target="_blank" className="button button__secondary">
                                <div className="inner">wiki</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-sm not-italic mt-4 w-[375px]">{description}</p>
            <h3 className="text-lg font-bold mt-6">Comics:</h3>
            <div>
                <ComicsList comics={comics}/>
            </div>
        </>
    )
}

RightSide.propTypes = {
    charId: PropTypes.number
}
export default RightSide;