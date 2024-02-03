"use client";
import Image from "next/image";
import { useState, useEffect , useCallback } from "react";

const SearchSelectInput = ({ options = [] }) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(options);
  const [selecte, setSelected] = useState([]);

  const searchUsers = useCallback(() => {
    let arr = [];

    options.forEach((el, i) => {
      if (
        el.name.includes(search) ||
        el.username.includes(search) ||
        el.email.includes(search)
      ) {
        arr.push(el);
      }
    });


    setSearch(arr);
  },[search ])

  useEffect(() => {
    searchUsers();
  }, [search , searchUsers]);

  return (
    <div className="relative">
      <div className="flex flex-wrap items-center gap-4 bg-white rounded-full px-4 py-2">
        {/* ---maps pills--- */}
        {}
        <input
          type="text"
          className="border-0 outline-none"
          placeholder="Search User..."
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <div className="w-full rounded-lg bottom-0 bg-white shadow-lg mt-1">
        {searchResults.map((user) => (
          <button
            key={user.id}
            onClick={() => setSelected((prev) => [...prev, user])}
            className="flex items-center gap-2"
          >
            <Image
              src={user.image}
              height={50}
              width={50}
              alt={user.username}
              unoptimized
            />
            <div>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchSelectInput;
