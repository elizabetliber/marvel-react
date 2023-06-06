import React from 'react';

const RightSide = ({updateChar}) => {
    return (
        <div className="flex flex-[1_1_50%] flex-col bg-[#232222] px-[40px] py-[35px] relative">
            <p className="text-[24px] font-bold">
                Random character for today!
            </p>
            <p className="text-[24px] font-bold">
                Do you want to get to know him better?
            </p>
            <p className="text-[24px] font-bold pt-5">
                Or choose another one
            </p>
            <div className="w-[101px] pt-5">
                <a href="#" className="button button__main" onClick={updateChar}>
                    <div className="inner">Try it</div>
                </a>
            </div>
        </div>
    );
}

export default RightSide;