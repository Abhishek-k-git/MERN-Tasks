
const Error = ({ message }) => {
   return (
      <div className="center h-screen w-screen flex-col text-sm font-semibold">
         <h2 className="text-lg font-bold text-red-500">
            Oops! Something went wrong.
         </h2>
         <p className="text-gray-500">
            {message || "Please try again later."}
         </p>
         <button
            onClick={() => window.location.reload()}
            className="w-[140px] h-[42px] center my-4 bg-red-500 text-white hover:bg-red-600 transition duration-300"
         >
            Retry
         </button>
      </div>
   );
};

export default Error;
