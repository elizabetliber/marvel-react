import React from 'react';

function ComicsList({comics}) {
    console.log("COMICS", comics)
    return (
        <ul className='flex flex-col gap-2.5'>
            {comics && comics.map((item, i) => {
                return (
                    <li
                        className="flex items-center pl-2 w-[375px] h-[25px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-sm" key={item.name}>
                        {item.name}
                    </li>
                )
            })}

        </ul>
    );
}

export default ComicsList;