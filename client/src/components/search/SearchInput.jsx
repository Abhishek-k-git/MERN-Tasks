import { useState, useEffect } from "react";

const useDebounce = (value, delay) => {
   const [debouncedValue, setDebouncedValue] = useState(value);

   useEffect(() => {
      const handler = setTimeout(() => {
         setDebouncedValue(value);
      }, delay);

      return () => {
         clearTimeout(handler);
      };
   }, [value, delay]);

   return debouncedValue;
};

const SearchInput = ({
   tasks,
   onSearchResults,
   searchTerm,
   setSearchTerm,
   clearSearch,
}) => {
   const debouncedSearchTerm = useDebounce(searchTerm, 600); // Debounce for 600ms

   useEffect(() => {
      if (debouncedSearchTerm.trim() === "") {
         onSearchResults([]);
      } else {
         const results = tasks.filter(
            (task) =>
               task.title
                  .toLowerCase()
                  .includes(debouncedSearchTerm.toLowerCase()) ||
               task.description
                  .toLowerCase()
                  .includes(debouncedSearchTerm.toLowerCase())
         );
         onSearchResults(results);
      }
   }, [debouncedSearchTerm, tasks, onSearchResults]);

   const handleChange = (e) => {
      setSearchTerm(e.target.value);
   };

   const handleClearSearch = () => {
      clearSearch();
   };

   return (
      <div className="relative">
         <input
            type="text"
            placeholder="Search for a task"
            value={searchTerm}
            onChange={handleChange}
         />
         {searchTerm ? (
            <button
               onClick={handleClearSearch}
               className="absolute h-full right-0 top-1/2 -translate-x-4 -translate-y-1/2 center"
            >
               <i className="fa fa-times-circle text-lg text-slate-400"></i>
            </button>
         ) : (
            <i className="fa fa-search text-sm text-slate-300 absolute right-0 top-1/2 -translate-x-4 -translate-y-1/2"></i>
         )}
      </div>
   );
};

export default SearchInput;
