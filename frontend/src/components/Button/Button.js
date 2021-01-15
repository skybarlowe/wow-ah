export default function Button({ className, id, icon, text}) {
  return (
    <div>
      <button type="button" className={className} id={id}>
        <i className={icon}>{text}</i>
      </button>
    </div>
  );
}
