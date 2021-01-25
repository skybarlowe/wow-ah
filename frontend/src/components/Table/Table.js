export default function Table({ items }) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Realm</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
