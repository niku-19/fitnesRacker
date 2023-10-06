export const Input = ({ label, placeholder, type, ...rest }) => {
	return (
		<label className="flex flex-col gap-1 text-[#666] text-sm">
			{label}
			<input
				type={type}
				placeholder={placeholder}
				className="border p-1 text-sm rounded-md px-2 focus:outline bg-slate-100"
				{...rest}
			/>
		</label>
	);
};
