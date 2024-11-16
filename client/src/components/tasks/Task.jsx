const Task = ({ task, onEdit, onDelete, onStatusChange }) => {
   return (
      <div className="w-full mb-2 flex flex-row items-center justify-between border-b pb-1">
         <div className="flex items-center gap-4">
            <input
               type="checkbox"
               checked={task.status === "Completed"}
               onChange={() => onStatusChange(task)}
               className="w-4 h-4"
               aria-label={`Mark task ${task.title} as completed`}
            />
            <p className="text-base">{task.title}</p>
         </div>
         {/* <p>{task.description}</p>
         <p>Priority: {task.priority}</p> */}
         <div className="flex items-center gap-1">
            <button
               className="times w-10 h-10 center hover:bg-slate-200 active:bg-slate-200"
               onClick={() => onEdit(task)}
               aria-label={`Edit task ${task.title}`}
            >
               <i className="fa fa-pencil-square-o text-xl text-gray-400"></i>
            </button>
            <button
               className="times w-10 h-10 center hover:bg-slate-200 active:bg-slate-200"
               onClick={() => onDelete(task._id)}
               aria-label={`Delete task ${task.title}`}
            >
               <i className="fa fa-trash text-xl text-gray-400"></i>
            </button>
         </div>
      </div>
   );
};

export default Task;
