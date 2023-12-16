import React from 'react';

function MultiSelectChips({ data, setData }) {
  // const [chips, setchips] = useState([])
  console.log('data', data);

  return (
    <>
      {
        data.length > 0 ? (
          <ul className="flex flex-wrap col-span-3 pt-5 h-36 overflow-y-scroll px-5">
            {
              data?.length > 0 && data.map(block => <li className="inline-flex h-7 mx-1 mb-2 px-1 bg-gray-400 rounded-full relative" key={block}>
                <span className="text-gray-700 text-sm p-1 pr-2 font-semibold">{block}</span>
                <i className="icofont-close inline-block text-xs rounded-full h-5 w-5 bg-gray-300 m-auto cursor-pointer"
                  style={{ padding: '2px' }}
                  onClick={() => setData(data.filter(d => d !== block))}
                />
              </li>
              )
            }
          </ul>
        )
        :
        (
          <></>
        )
      }
    </>
  );
}

export default MultiSelectChips