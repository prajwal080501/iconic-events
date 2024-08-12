const Input = ({name, label, type, className, placeholder}) => {
    return (
        <div className="flex w-full mb-6 flex-col gap-4 items-start justify-start">
            <label className="font-bold" htmlFor={name}>{label}</label>
            <input type={type} name={name} placeholder={placeholder} className={'p-3 outline-none bg-gray-100 text-gray-800 border border-transparent focus:border-2 focus:shadow-lg focus:shadow-blue-100 focus:border-blue-500 rounded w-[100%]' + className} />
        </div>
    )
}

export default Input;