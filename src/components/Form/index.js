import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form className="w-50 border mt-5 p-3 m-auto max-w-[360px]">
                    <div className="mb-3 flex flex-col">
                        <label htmlFor="exampleFormControlInput1" className="text-black">Email address</label>
                        <input type="email" className="border border-[pink] pl-2" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3 flex flex-col">
                        <label htmlFor="exampleFormControlTextarea1" className="text-black">Example textarea</label>
                        <textarea className="border border-[pink]" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
            </div>
        )
    }
}


export default Form;
