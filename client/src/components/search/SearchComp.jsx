import React, { useState } from "react";
import SearchInput from "./SearchInput";

const SearchComp = ({ tasks, onStatusChange }) => {
   const [searchResults, setSearchResults] = useState([]);
   const [searchTerm, setSearchTerm] = useState("");

   const clearSearch = () => {
      setSearchTerm("");
      setSearchResults([]);
   };

   return (
      <>
         <SearchInput
            tasks={tasks}
            onSearchResults={setSearchResults}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            clearSearch={clearSearch}
         />
         {searchResults.length !== 0 && (
            <div className="bg-slate-100 shadow-sm p-4 static inset-0 z-20">
               {searchResults.map((task) => (
                  <div key={task._id} className="flex items-center gap-4 mb-4">
                     <input
                        type="checkbox"
                        checked={task.status === "Completed"}
                        onChange={() => onStatusChange(task)}
                        className="w-4 h-4"
                     />
                     <p className="text-base">{task.title}</p>
                  </div>
               ))}
            </div>
         )}
      </>
   );
};

export default SearchComp;
