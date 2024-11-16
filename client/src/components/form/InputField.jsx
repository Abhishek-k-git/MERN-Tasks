const InputField = ({ label, type, name, value, onChange, required }) => (
   <div className="mb-4">
      <label className="block mb-2 ml-1">{label}</label>
      <input
         type={type}
         name={name}
         value={value}
         onChange={onChange}
         required={required}
      />
   </div>
);

export default InputField;
