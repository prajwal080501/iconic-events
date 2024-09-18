import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-zinc-900 rounded-xl h-[90%] overflow-y-auto p-6 w-[85%] lg:max-w-lg lg:w-full">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-3xl font-bold text-white">{title}</h2>
                    <IoClose className="text-2xl bg-red-500 text-white rounded-full p-1 hover:bg-red-600 duration-200 hover:scale-105 cursor-pointer" onClick={onClose} />
                </div>
                {/* Body */}
                <div className="mb-4">
                    {children}
                </div>
                {/* footer */}
                <div className="flex justify-end">
                    <button
                        className="bg-orange-300 text-black px-4 py-2 rounded hover:bg-orange-400"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
