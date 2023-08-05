"use client";

import {AiFillFolder , AiFillFile} from 'react-icons/ai'


function Explorer({ data = {} }) {

  return (
    <div className="px-4 text-white">
      {!data?.isFolder ? (
        <div className='flex items-center gap-2'> <AiFillFile/> {data.name}</div>
      ) : (
        <div>
          <div className='flex items-center gap-2'> <AiFillFolder/> {data?.name}</div>
          {data.items.map((el, i) => (
            <Explorer key={el.name} data={el} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Explorer;
