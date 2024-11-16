import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tasksApi = createApi({
   reducerPath: "tasksApi",
   baseQuery: fetchBaseQuery({
      // baseUrl: "http://localhost:5000/api",
      baseUrl: "https://tasks-mern-app.vercel.app/api",
   }),
   tagTypes: ["Task"],
   endpoints: (builder) => ({
      getTasks: builder.query({
         query: () => "/tasks",
         providesTags: (result) =>
            result
               ? [
                    ...result.map(({ _id }) => ({ type: "Task", id: _id })),
                    { type: "Task", id: "LIST" },
                 ]
               : [{ type: "Task", id: "LIST" }],
      }),
      createTask: builder.mutation({
         query: (newTask) => ({
            url: "/tasks",
            method: "POST",
            body: newTask,
         }),
         invalidatesTags: [{ type: "Task", id: "LIST" }],
      }),
      updateTask: builder.mutation({
         query: ({ id, ...updatedTask }) => ({
            url: `/tasks/${id}`,
            method: "PUT",
            body: updatedTask,
         }),
         invalidatesTags: (result, error, { id }) => [{ type: "Task", id }],
      }),
      deleteTask: builder.mutation({
         query: (id) => ({
            url: `/tasks/${id}`,
            method: "DELETE",
         }),
         invalidatesTags: [{ type: "Task", id: "LIST" }],
      }),
      searchTasks: builder.query({
         query: (query) => `/tasks/search?query=${query}`,
         providesTags: ["Task"],
      }),
      updateTaskStatus: builder.mutation({
         query: ({ id, status }) => ({
            url: `/tasks/${id}/status`,
            method: "PATCH",
            body: { status },
         }),
         invalidatesTags: (result, error, { id }) => [{ type: "Task", id }],
      }),
   }),
});

export const {
   useGetTasksQuery,
   useCreateTaskMutation,
   useUpdateTaskMutation,
   useDeleteTaskMutation,
   useSearchTasksQuery,
   useUpdateTaskStatusMutation,
} = tasksApi;
