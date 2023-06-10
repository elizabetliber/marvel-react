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


// export default App;

// function useInputWithValidate(initialValue) {
//     const [value, setValue] = useState(initialValue);
//
//     const onChange = event => {
//         setValue(event.target.value);
//     }
//
//     const validateInput = () => {
//         return value.search(/\d/) >= 0
//     }
//
//     return {value, onChange, validateInput}
// }
//
// const Form = () => {
//     const input = useInputWithValidate("")
//     const textArea = useInputWithValidate("")
//
//     const color = input.validateInput() ? 'text-[#e11d48]' : null
//     return (
//         <div className="flex justify-center">
//             <form className="flex flex-col w-50 border mt-5 p-3 m-auto justify-center">
//                 <div className="flex mb-3">
//                     <label
//                         htmlFor="exampleFormControlInput1"
//                         className="form-label flex-[1_1_50%] mt-3">
//                         Email address
//                     </label>
//                     <input
//                         onChange={input.onChange}
//                         type="email"
//                         value={input.value}
//                         className={`form-control flex-[1_1_50%] border-black border ml-3 ${color}`}
//                         id="exampleFormControlInput1"
//                         placeholder="name@example.com"
//                     />
//                 </div>
//                 <div className="flex mb-3">
//                     <label
//                         htmlFor="exampleFormControlTextarea1"
//                         className="form-label flex-[1_1_50%]"
//                     >
//                         Example textarea
//                     </label>
//                     <textarea
//                         className="form-control border-black ml-3 border flex-[1_1_50%]"
//                         id="exampleFormControlTextarea1"
//                         rows="3"
//                         onChange={textArea.onChange}
//                         value={textArea.value}
//
//                     >
//                     </textarea>
//                 </div>
//             </form>
//         </div>
//     )
// }

// function App() {
//     return (
//         <Form/>
//     );
// }

export default App;