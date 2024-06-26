"use client";

const Input = ({ id, label, type = "text", disabled }) => {
	return (
		<div className="w-full relative my-1">
			<input
				id={id}
				disabled={disabled}
				placeholder=" "
				type={type}
				minLength={3}
				className={`peer w-full p-3 pt-6 pl-4 font-light bg-neutral-200/75 border-2 border-neutral-200/75  focus:border-indigo-400 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative text-neutral-700

        `}
			/>
			<label
				className={`absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-indigo-400 text-neutral-500
        `}
			>
				{label}
			</label>
		</div>
	);
};

export default Input;
