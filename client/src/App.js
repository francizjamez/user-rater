import { useRef, useState } from "react";
import axios from "axios";

import { FaSearch } from "react-icons/fa";
import Sidebar from "./Sidebar";

function App() {
  const [results, setResults] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const inputRef = useRef();

  return (
    <div className="container mx-auto flex">
      <Sidebar selectedLocation={selectedLocation} />
      <div className="flex flex-col justify-start justify-items-center gap-2 p-20 mx-auto">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-bold self-center">
            Enter a place to search
          </h1>
          <div className="relative">
            <button
              className="absolute right-5 top-4"
              onClick={async () => {
                const res = await axios.get(
                  `https://geocode.search.hereapi.com/v1/geocode?q=${inputRef.current.value}&apiKey=W2QI5pBCQSZ-b8fWT3GNiaUzG3LkgXn1Tax7kmtn79M`
                );
                console.log(res.data.items);
                setResults(res.data.items);
              }}
            >
              <FaSearch className=" text-4xl" />
            </button>
          </div>

          <input
            ref={inputRef}
            className="border-2 text-4xl border-black rounded-full outline-none py-2 px-6"
          />
        </div>

        <div className="grid mt-10 gap-16 ">
          {results.map(({ title, address, resultType }, i) => (
            <div
              key={i}
              onClick={() => {
                setSelectedLocation(title);
              }}
              className="gap-2 hover:border-gray-700 cursor-pointer border-4 border-gray-400 p-4 rounded-lg grid justify-items-start"
            >
              <div className="flex justify-between w-full gap-2">
                <h1 className="max-w-xs">{title}</h1>
                <p className="font-bold">{address.countryCode}</p>
              </div>
              <p className="text-gray-500">{resultType}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
