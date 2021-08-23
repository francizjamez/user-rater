import axios from "axios";
import { useEffect, useRef, useState } from "react";

const Sidebar = ({ selectedLocation }) => {
  const [users, setUsers] = useState([]);
  const inputRef = useRef();
  const handleAddUser = async () => {
    if (selectedLocation) {
      await axios.post("http://localhost:5000/users/", {
        name: inputRef.current.value,
        location: selectedLocation,
      });
      loadUsers();
    }
  };

  const loadUsers = () => {
    axios
      .get(`http://localhost:5000/users/${selectedLocation}`)
      .then((res) => setUsers(res.data));
  };

  useEffect(() => {
    if (selectedLocation) {
      loadUsers();
    }
    // eslint-disable-next-line
  }, [selectedLocation]);
  return (
    <div className="w-64 border-l-4 border-r-4 border-gray-500 h-screen flex flex-col justify-between">
      <h2 className="text-3xl text-center p-4">Users list</h2>
      <div className="flex-1 px-3 py-3">
        {users.map(({ name }, i) => (
          <div
            className={`${
              i % 2 === 0 && "bg-gray-200"
            } p-2 cursor-pointer hover:bg-gray-800 hover:text-white`}
          >
            <p className="font-semibold">{name}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <input
            ref={inputRef}
            className="w-56 border-4 border-gray-600 self-center px-4 py-1 rounded"
          />
          <button
            onClick={handleAddUser}
            className="rounded-xl py-2 px-6 self-center bg-gray-500 text-white"
          >
            Add user
          </button>
        </div>
        <h2 className="text-2xl text-center border-t-4 border-gray-500 px-2 py-6">
          {selectedLocation || "Select a location"}
        </h2>
      </div>
    </div>
  );
};

export default Sidebar;
