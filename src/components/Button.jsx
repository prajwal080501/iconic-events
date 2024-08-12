const Button = ({className, onClick, btnText}) => {
    return <button onClick={onClick} className={className}>{btnText}</button>
}

export default Button;