import React, {Component} from 'react';
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import MarvelService from "../../services/MarvelService";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

class Content extends Component {
    state = {
        charList: [],
        loading: true,
        error: false,
        newItemLoading: false,
        offset: 210
    }

    marvelService = new MarvelService()

    componentDidMount() {
        this.onRequest()
    }

    onRequest = (offset) => {
        this.onCharListLoading()
        this.marvelService.getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    onCharListLoading = () => {
        this.setState({
            newItemLoading: true,
        })
    }

    onCharListLoaded = (newCharList) => {
        this.setState(({offset, charList}) => ({
            charList: [...charList, ...newCharList],
            loading: false,
            newItemLoading: false,
            offset: offset + 9
        }))
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    render() {
        const {onCharSelected, charId} = this.props
        return (
            <div className="flex mt-12">
                <LeftSide onCharSelected={onCharSelected} onRequest={this.onRequest} state={this.state}/>
                <ErrorBoundary>
                    <RightSide charId={charId} state={this.state}/>
                </ErrorBoundary>
            </div>
        );
    }
}

export default Content;