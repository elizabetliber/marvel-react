import React from 'react';

const LeftSide = ({char}) => {
    const {name, description, thumbnail, homepage, wiki} = char

    return (
        <div className="flex justify-between items-center px-[40px] py-[35px]">
            <img className="w-[180px] h-[180px] flex-shrink-0" src={thumbnail} alt="thor"/>
            <div className="grid text-black grid-rows-[90px_minmax(29px, auto)_38px] ml-8">
                <h3 className="h-[29px] font-bold text-[22px]  leading-[26px] uppercase pb-3">{name}</h3>
                <p className="text-[14px] leading-4 h-[90px]">{description}</p>
                <div className="flex pt-[28px]">
                    <div>
                        <a href={homepage} className="button button__main">
                            <div className="inner">HOMEPAGE</div>
                        </a>
                    </div>
                    <div className="w-[101px] ml-8">
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">WIKI</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default LeftSide;
