const Input = ({ name, label, type, className, placeholder }) => {
    return (
        <div className="flex w-full mb-6 flex-col gap-4 items-start justify-start">
            <label className="font-bold text-white" htmlFor={name}>{label}</label>
            <input type={type} name={name} placeholder={placeholder} className={'p-3 outline-none bg-black/80 text-gray-100 border border-transparent focus:border-2 duration-100 focus:shadow-lg focus:border-blue-500 rounded-2xl w-[100%]'} />
        </div>
    )
}

export default Input;