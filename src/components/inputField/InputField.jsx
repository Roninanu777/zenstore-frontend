import React from "react";

const InputField = ({ label, type, id, name, onChange, value, placeholder }) => {
	return (
		<>
			<label className="w-full block text-left pl-1" htmlFor={id}>
				{label}
			</label>
			<input
				id={id}
				type={type}
				name={name}
				onChange={onChange}
				value={value}
				className="h-10 w-full border border-solid rounded border-slate-300 outline-0 px-2.5"
				placeholder={placeholder}
			/>
		</>
	);
};

export default InputField;
