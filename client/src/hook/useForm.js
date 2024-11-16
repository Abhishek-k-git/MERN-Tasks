import { useEffect, useState } from "react";

const useForm = (initialState, task) => {
   const [formData, setFormData] = useState(initialState);

   useEffect(() => {
      if (task) {
         setFormData({
            title: task.title || "",
            description: task.description || "",
            startTime: task.startTime || "",
            endTime: task.endTime || "",
            priority: task.priority || "",
         });
      } else {
         setFormData(initialState);
      }
   }, [task]);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
   };

   return [formData, handleChange];
};

export default useForm;
