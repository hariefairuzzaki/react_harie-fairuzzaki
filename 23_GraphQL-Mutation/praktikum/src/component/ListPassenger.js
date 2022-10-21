import ListItem from "./ListItem";

const ListPassenger = (props) => {
  return (
    <div>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead bgcolor="red">
          <tr>
            <td>Nama</td>
            <td>Umur</td>
            <td>Jenis Kelamin</td>
            <td>Aksi</td>
          </tr>
        </thead>
        {props.data?.map((item) => (
          <ListItem key={item.id} data={item} deletedPassenger={props.deletedPassenger} />
        ))}
      </table>
    </div>
  );
};

export default ListPassenger;
