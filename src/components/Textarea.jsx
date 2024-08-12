const Textarea = ({ className, placeholder, rows, cols, about, name, label }) => {
    return (
        <div className="flex w-100 mb-6 flex-col gap-4 items-start justify-start">
            <label className="font-bold" htmlFor={name}>{label}</label>
            <textarea className={'w-full outline-none p-2 bg-gray-100 text-gray-100 rounded-lg'} rows={rows} cols={cols} about="about" placeholder={placeholder} />
        </div>
    )
}

export default Textarea;