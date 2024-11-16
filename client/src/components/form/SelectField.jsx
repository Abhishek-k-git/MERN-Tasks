const SelectField = ({
   label,
   name,
   defaultOpt,
   value,
   onChange,
   options,
   required,
}) => (
   <div className="mb-4">
      <label className="block mb-2">{label}</label>
      <select name={name} value={value} onChange={onChange} required={required}>
         <option value="">{defaultOpt}</option>
         {options.map((option) => (
            <option key={option} value={option}>
               {option}
            </option>
         ))}
      </select>
   </div>
);

export default SelectField;