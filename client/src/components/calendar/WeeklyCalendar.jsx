import { startOfWeek, addDays } from "date-fns";

const WeeklyCalendar = ({ selectedDate, onDateSelect }) => {
   const handleDateSelect = (date) => {
      onDateSelect(date);
   };

   const startDate = startOfWeek(new Date(selectedDate), { weekStartsOn: 1 }); // starts on Monday

   const calendar = [...Array(7)].map((_, i) => {
      const date = addDays(startDate, i);
      const isSelected =
         date.toDateString() === new Date(selectedDate).toDateString();

      return (
         <button
            key={i}
            onClick={() => handleDateSelect(date)}
            className={`md:px-2 py-4 grid gap-1 ${
               isSelected ? "bg-blue-500 text-white dot" : "bg-white"
            }`}
         >
            <p>{date.toLocaleString("en-US", { weekday: "short" })}</p>
            <p>{date.getDate()}</p>
         </button>
      );
   });

   return (
      <div className="grid grid-cols-7 gap-1 sm:gap-2 w-full">{calendar}</div>
   );
};

export default WeeklyCalendar;
