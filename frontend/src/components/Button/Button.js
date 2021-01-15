export default function Button({className, id, icon, text}){
    const clickHandler = () => {
        alert('Hi');
    }

    return (
        <div>
            <button type="button" onClick={clickHandler} className={className} id={id}><i className={icon}>{text}</i></button>
        </div>
    );
}