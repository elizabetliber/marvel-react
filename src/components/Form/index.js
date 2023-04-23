import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Form extends Component {
    state = {
        advOpen: false
    }
    handleClick = () => {
        this.setState(({advOpen}) => ({
            advOpen: !advOpen
        }))
    }

    componentDidMount() {
        setTimeout(this.handleClick, 3000)
    }

    render() {
        return (
            <div>
                <form onClick={this.handleClick} className="w-50 border mt-4 p-3 m-auto max-w-[360px] relative">
                    <div className="mb-5 flex flex-col">
                        <label htmlFor="exampleFormControlInput1" className="text-black">Your Email address</label>
                        <input type="email" className="border border-[pink] p-2 text-black"
                               id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3 flex flex-col">
                        <label htmlFor="exampleFormControlTextarea1" className="text-black">Example textarea</label>
                        <textarea className="border border-[pink] p-2 text-black"
                                  id="exampleFormControlTextarea1"
                                  rows="3"></textarea>
                    </div>
                    {this.state.advOpen && (
                        <Portal>
                            <Msg/>
                        </Portal>
                    )}
                </form>
            </div>
        )
    }
}

const Portal = (props) => {
    const node = document.createElement('div')
    document.body.appendChild(node)

    return ReactDOM.createPortal(props.children, node)
}

const Msg = () => {
    return (
        <div style={{
            "width": "100px",
            "height": "200px",
            "position": "absolute",
            "background": "hotpink",
            "right": "50%",
            "bottom": "50%"
        }}>
            <h1>Lisa Liber</h1>
        </div>
    )
}

export default Form;
