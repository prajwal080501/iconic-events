import Modal from "./Modal"
import Input from "./Input";
import Button from "./Button";
import Textarea from "./Textarea";
const Contact = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Get in touch">
            <div className="p-3 w-full">
                <form className='w-full h-full gap-4'>
                    <Input placeholder={'Name'} label="Name" name="name" type="text" />
                    <Input placeholder={'Email'} label="Email" name="email" type="email" />
                    <Textarea label="Message" rows="5" cols={'5'} placeholder={'Message'} />
                    <Button btnText={'Submit'} className={'bg-blue-500 text-white hover:scale-101 p-3 rounded-lg hover:bg-blue-600 duration-200'} />
                </form>
            </div>
        </Modal>
    )
}
export default Contact;