import React, {Component} from 'react';
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import MarvelService from "../../services/MarvelService";
import ErrorMessage from "../../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

class Hero extends Component {
    state = {
        char: {},
        loading: true,
        error: false
    }

    marvelService = new MarvelService()

    componentDidMount() {
        this.updateChar()
        this.marvelService.getAllCharacters()
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }
    componentDidUpdate() {
        console.log('update')
    }

    componentWillUnmount() {
        console.log('unmount')
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onCharLoading = () => {
        this.setState({
            loading: true
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true,
        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011334 - 1010789) + 1010789)
        this.onCharLoading();
        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    render() {
        const {char, loading, error} = this.state;
        const spinner = loading ? <Spinner/> : null;
        const errorMessage = error ? <ErrorMessage/> : null;
        const content = !(loading || error) ? <LeftSide char={char}/> : null;
        return (
            <div className="flex shadow-[5px_5px_20px_rgba(0,0,0,0.25)] mt-12">
                <div className="w-[550px] flex items-center justify-center">
                {errorMessage}
                {spinner}
                {content}
                </div>
                <RightSide updateChar={this.updateChar}/>
            </div>
        );
    }
}

export default Hero;