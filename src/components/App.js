import React, {Component} from "react";
import Header from "./Header";
import Hero from "./Hero";
import Content from "./Content";
import superhero from "../assets/superhero.jpg"

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
                    <HelloCreating/>
                    <DynamicCreating color={"black"}>
                        <h2>ll</h2>
                        <h2>lll</h2>
                    </DynamicCreating>
                    <Content onCharSelected={this.onCharSelected} charId={this.state.selectedChar}/>
                    <img src={superhero} alt="" className="absolute -bottom-16 -right-44 w-[467px] h-[372px]"/>
                </div>
            </div>

        );
    }
}

const HelloCreating = (props) => {
    return (
        <div style={{'width': '600px', 'margin': '0 auto'}}>
            <DynamicCreating color={"black"}>
                <h2>ll</h2>
                <h2>lll</h2>
            </DynamicCreating>
        </div>
    )
}
const DynamicCreating = (props) => {
    return (
        <div className={"mb-3 p-3  border border-" + props.color}>
            {
                React.Children.map(props.children, child => {
                    return React.cloneElement(child, {className: 'text-[pink] p-10'})
                })
            }
        </div>
    )
}
export default App;
