export default function Table({items}) {
  return (
    <table className="table table-hover">
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Available</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item) => (
        <tr key={item.id}>
          <td><a href={"https://es.wowhead.com/item="+item.item.id} target="_blank"></a></td>
          <td>{item.buyout}</td>
          <td>{item.quantity}</td>
        </tr>
      ))}
    </tbody>
  </table>
  );
}