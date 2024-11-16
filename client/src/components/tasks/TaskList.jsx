import Task from "./Task";

const TaskList = ({ tasks, onEdit, onDelete, onStatusChange }) => {
   return (
      <div>
         <h2 className="text-lg font-semibold text-slate-700 my-2">
            Tasks Today
         </h2>
         {tasks.length > 0 ? (
            tasks.map((task) => (
               <Task
                  key={task._id}
                  task={task}
                  onEdit={onEdit}
                  onDelete={onDelete}
                  onStatusChange={onStatusChange}
               />
            ))
         ) : (
            <p className="bg-blue-50 p-4 text-blue-600 font-semibold">
               No tasks for Today.
            </p>
         )}
      </div>
   );
};

export default TaskList;
