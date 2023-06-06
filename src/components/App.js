import React, {useState} from "react";
import Header from "./Header";
import Hero from "./Hero";
import Content from "./Content";

const App = () => {
    const [selectedChar, setSelectedChar] = useState(null)

    const onCharSelected = (id) => {
        setSelectedChar(id)
    }

    return (
        <div className="w-[100%] flex justify-center">
            <div className="max-w-[1100px] flex justify-center mx-8 text-white">
                <div className="relative">
                    <Header/>
                    <Hero/>
                    <Content onCharSelected={onCharSelected} charId={selectedChar}/>
                </div>
            </div>
        </div>
    );
}


export default App;
