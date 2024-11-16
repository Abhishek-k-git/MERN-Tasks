import { startOfWeek, isSameWeek } from "date-fns";
import ProgressBar from "../ui/ProgressBar";

const WeeklyOverview = ({ tasks }) => {
   const currentWeekStart = startOfWeek(new Date(), { weekStartsOn: 1 });

   const currentWeekTasks = tasks.filter((task) => {
      const localDate = new Date(task.setDate);
      return isSameWeek(localDate, currentWeekStart, {
         weekStartsOn: 1,
      });
   });

   const summary = currentWeekTasks.reduce(
      (acc, task) => {
         if (task.status === "Completed") {
            acc.completed++;
         } else {
            acc.open++;
         }
         return acc;
      },
      { open: 0, completed: 0 }
   );

   const totalTasks = summary.open + summary.completed;
   const progressPercentage =
      totalTasks > 0 ? (summary.completed / totalTasks) * 100 : 0;

   return (
      <>
         <div className="grid grid-cols-2 gap-4 w-full">
            <div className="flex flex-row p-2 sm:p-4 bg-blue-50">
               <span className="w-6 h-6 bg-blue-400 text-blue-900 center">
                  ✓
               </span>
               <span className="px-2 sm:px-4 text-slate-500">
                  <p className="font-semibold mb-1">Tasks Completed</p>
                  <p>
                     <b className="text-2xl font-semibold mr-2">
                        {summary.completed}
                     </b>
                     <small>This Week</small>
                  </p>
               </span>
            </div>
            <div className="flex flex-row p-2 sm:p-4 bg-red-50">
               <span className="w-6 h-6 bg-red-400 text-red-900 center">X</span>
               <span className="px-2 sm:px-4 text-slate-500">
                  <p className="font-semibold mb-1">Tasks Pending</p>
                  <p>
                     <b className="text-2xl font-semibold mr-2">
                        {summary.open}
                     </b>
                     <small>This Week</small>
                  </p>
               </span>
            </div>
         </div>
         <div>
            <h2 className="text-lg font-semibold text-slate-700 my-2 mt-4">
               Weekly Progress
            </h2>
            <ProgressBar progress={progressPercentage} />
         </div>
      </>
   );
};

export default WeeklyOverview;
