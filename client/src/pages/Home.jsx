import React, { useState } from "react";
import {
   WeeklyCalendar,
   WeeklyOverview,
   FormModal,
   SearchComp,
   TaskList,
   Error,
   Loading
} from "../components";
import {
   useGetTasksQuery,
   useCreateTaskMutation,
   useDeleteTaskMutation,
   useUpdateTaskMutation,
   useUpdateTaskStatusMutation,
} from "../api/tasksApi";

const Home = () => {
   const { data: tasks, error, isLoading } = useGetTasksQuery();
   const [createTask] = useCreateTaskMutation();
   const [updateTask] = useUpdateTaskMutation();
   const [deleteTask] = useDeleteTaskMutation();
   const [updateTaskStatus] = useUpdateTaskStatusMutation();

   const [selectedDate, setSelectedDate] = useState(new Date());
   const [isModalOpen, setModalOpen] = useState(false);
   const [taskToEdit, setTaskToEdit] = useState(null);

   if (isLoading) return <Loading />;
   if (error) return <Error message={error.error} />;

   const filteredTasks = tasks.filter((task) => {
      const taskDate = new Date(task.setDate);
      return taskDate.toDateString() === selectedDate.toDateString();
   });

   const handleDateSelect = (date) => {
      setSelectedDate(date);
   };

   const handleDeleteTask = async (taskId) => {
      await deleteTask(taskId);
   };

   const handleStatusChange = async (task) => {
      const newStatus =
         task.status === "In Progress" ? "Completed" : "In Progress";
      await updateTaskStatus({ id: task._id, status: newStatus });
   };

   const handleEditTask = (task) => {
      setTaskToEdit(task);
      setModalOpen(true);
   };

   const handleCreateTask = () => {
      setTaskToEdit(null);
      setModalOpen(true);
   };

   const handleSubmit = async (formData) => {
      if (taskToEdit) {
         await updateTask({
            id: taskToEdit._id,
            ...formData,
            setDate: taskToEdit.setDate,
         });
      } else {
         await createTask({ ...formData, setDate: new Date(selectedDate) });
      }
      setModalOpen(false);
      setTaskToEdit(null);
   };

   console.log("tasks to edit : ", taskToEdit);

   return (
      <main className="w-full max-w-2xl mx-auto p-4 sm:p-10 text-sm">
         <SearchComp
            tasks={filteredTasks}
            onStatusChange={handleStatusChange}
         />
         <br />
         <WeeklyCalendar
            selectedDate={selectedDate}
            onDateSelect={handleDateSelect}
         />
         <br />
         <WeeklyOverview tasks={tasks} />
         <br />
         <TaskList
            tasks={filteredTasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            onStatusChange={handleStatusChange}
         />

         <div className="fixed bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button
               className="times w-14 h-14 bg-blue-600 text-white"
               onClick={handleCreateTask}
            >
               <i className="fa fa-plus tex-3xl"></i>
            </button>
         </div>

         <FormModal
            isOpen={isModalOpen}
            onClose={() => {
               setModalOpen(false);
               setTaskToEdit(null);
            }}
            onSubmit={handleSubmit}
            task={taskToEdit}
         />
      </main>
   );
};

export default Home;
