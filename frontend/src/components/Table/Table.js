export default function Table({id, price, name, available}) {
  return (
    <tr>
      <td>{price}</td>
      <td>{name}</td>
      <td>{available}</td>
    </tr>
  );
}