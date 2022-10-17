import { gql, useLazyQuery } from "@apollo/client";
import { useState } from "react";
import ListItem from "./ListItem";

const GetByUserId = gql`
  query MyQuery($id: String) {
    pengunjung(where: { id: { _eq: $id } }) {
      id
      jenisKelamin
      nama
      umur
    }
  }
`;

const ListPassenger = (props) => {
  const [getData, { loading, error, data }] = useLazyQuery(GetByUserId);
  const [dataId, setDataId] = useState(0);

  if (loading) return <p>Loading ...</p>;
  if (error) return `Error! ${error}`;

  const handleGetData = () => {
    getData({
      variables: {
        id: dataId,
      },
    });
  };

  const handleChangeDataId = (e) => {
    if (e.target) {
      setDataId(e.target.value);
    }
  };

  return (
    <div>
      <div style={{ margin: "20px" }}>
        <input value={dataId} onChange={handleChangeDataId} style={{ marginRight: "5px" }} />
        <button onClick={handleGetData}>Get Data</button>
      </div>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead bgcolor="red">
          <td>Nama</td>
          <td>Umur</td>
          <td>Jenis Kelamin</td>
          <td bgcolor="white" className="removeBorder"></td>
        </thead>
        {data?.pengunjung.map((item) => (
          <ListItem key={item.id} data={item} hapusPengunjung={props.hapusPengunjung} />
        ))}
      </table>
    </div>
  );
};

export default ListPassenger;
