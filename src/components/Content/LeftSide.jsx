import React from 'react';
import ErrorMessage from "../../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";


const LeftSide = ({charList, loading, error, newItemLoading, offset, onCharSelected, onRequest}) => {
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? charList : null;

    return (
        <div className="flex-[1_1_65%] flex-col items-center">
            <div className="flex flex-wrap gap-6">
                {errorMessage}
                {spinner}
                {content && (
                    content.map((item) => {
                        return (
                            <div key={item.id} onClick={() => onCharSelected(item.id)}
                                 className="w-[200px] shadow-[5px_5px_10px_rgba(0,0,0,0.25)]">
                                <img src={item.thumbnail} alt={item.name} className="w-[200px] h-[200px]"
                                     style={item.thumbnail.includes("image_not_available") ? {'objectFit': 'unset'} : {'objectFit': 'cover'}}/>
                                <div className="h-[118px] bg-[#232222] text-white text-2xl pt-3 pl-3 font-bold">
                                    <h2>{item.name}</h2>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>

            <div className="w-[170px] mt-[45px]">
                <button
                    className="button button__main"
                    disabled={newItemLoading}
                    onClick={() => onRequest(offset)}
                >
                    <div className="inner">Load more</div>
                </button>
            </div>
        </div>
    );
}

export default LeftSide;