const Title = ({title, className}) => {
    console.log(title, 'title from titkle component')
    return <p className={`font-bold text-5xl ${className}`}>{title}</p>
}

export default Title;