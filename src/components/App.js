import React, {Component} from "react";
import Header from "./Header";
import Hero from "./Hero";
import Content from "./Content";
import superhero from "../assets/superhero.jpg"
import Form from "./Form";

class App extends Component {
    state = {
        selectedChar: null
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        return (
            <div className="flex justify-center text-white">
                <div className="relative w-[1100px]">
                    <Header/>
                    <Hero/>
                    <Form/>
                    <Content onCharSelected={this.onCharSelected} charId={this.state.selectedChar}/>
                    <img src={superhero} alt="" className="absolute -bottom-16 -right-44 w-[467px] h-[372px]"/>
                </div>
            </div>

        );
    }
}


export default App;
