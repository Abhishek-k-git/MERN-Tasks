import useForm from "../../hook/useForm";
import InputField from "./InputField";
import SelectField from "./SelectField";

const FormModal = ({ isOpen, onClose, onSubmit, task }) => {
   const initialState = {
      title: "",
      description: "",
      startTime: "",
      endTime: "",
      priority: "",
   };

   const [formData, handleChange] = useForm(initialState, task);

   const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(formData);
      onClose();
   };

   return (
      isOpen && (
         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-end">
            <div className="w-full max-w-xl mx-auto bg-white p-6 rounded-t-lg shadow-2xl">
               <div className="w-full flex items-center justify-between text-gray-500 p-1">
                  <h2 className="text-lg font-semibold mb-4">
                     {task ? "Edit Task" : "Create Task"}
                  </h2>
                  <button
                     className="times w-8 h-8 hover:bg-slate-200 active:bg-slate-200"
                     onClick={onClose}
                  >
                     <i className="fa fa-times text-lg"></i>
                  </button>
               </div>
               <br />
               <form onSubmit={handleSubmit}>
                  <InputField
                     label="Title"
                     type="text"
                     name="title"
                     value={formData.title}
                     onChange={handleChange}
                     required
                  />
                  <InputField
                     label="Description"
                     type="textarea"
                     name="description"
                     value={formData.description}
                     onChange={handleChange}
                     required
                  />
                  {/* <InputField
                     label="Set Date"
                     type="date"
                     name="setDate"
                     value={formData.setDate}
                     onChange={handleChange}
                     required
                  /> */}
                  <div className="grid grid-cols-2 gap-4">
                     <InputField
                        label="Start Time"
                        type="time"
                        name="startTime"
                        value={formData.startTime}
                        onChange={handleChange}
                        required
                     />
                     <InputField
                        label="End Time"
                        type="time"
                        name="endTime"
                        value={formData.endTime}
                        onChange={handleChange}
                        required
                     />
                  </div>
                  <SelectField
                     label="Priority"
                     name="priority"
                     defaultOpt="Select priority"
                     value={formData.priority}
                     onChange={handleChange}
                     options={["Low", "Medium", "High"]}
                     required
                  />
                  <br />
                  <button type="submit" className="btn">
                     {task ? "Update Task" : "Create a new Task"}
                  </button>
               </form>
            </div>
         </div>
      )
   );
};

export default FormModal;

