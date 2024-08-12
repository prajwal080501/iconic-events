const Textarea = ({ className, placeholder, rows, cols, about, name, label }) => {
    return (
        <div className="flex w-100 mb-6 flex-col gap-4 items-start justify-start">
            <label className="font-bold text-white" htmlFor={name}>{label}</label>
            <textarea className={'w-full outline-none p-2 bg-black/80 border border-transparent focus:border-2 focus:border-orange-300 duration-100 ease-linear text-gray-100 rounded-lg'} rows={rows} cols={cols} about="about" placeholder={placeholder} />
        </div>
    )
}

export default Textarea;