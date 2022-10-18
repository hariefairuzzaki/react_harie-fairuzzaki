import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { useState } from "react";
import ListItem from "./ListItem";

const GetUser = gql`
  query MyQuery {
    pengunjung {
      id
      nama
      umur
      jenisKelamin
    }
  }
`;

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
  const { loading: userLoading, error: userError, data: userData } = useQuery(GetUser);
  const [getData, { loading: userByIdLoading, error: userByIdError, data: userByIdData }] = useLazyQuery(GetByUserId);
  const [userId, setUserId] = useState(0);

  const handleGetData = () => {
    getData({
      variables: {
        id: userId,
      },
    });
  };

  const handleChangeDataId = (e) => {
    if (e.target) {
      setUserId(e.target.value);
    }
  };

  if (userLoading || userByIdLoading) return <p>Loading ...</p>;
  if (userError || userByIdError) return <p>Something went wrong ...</p>;

  return (
    <div>
      <div style={{ margin: "20px" }}>
        <input value={userId} onChange={handleChangeDataId} style={{ marginRight: "5px" }} />
        <button onClick={handleGetData}>Get Data</button>
      </div>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead bgcolor="red">
          <tr>
            <td>Nama</td>
            <td>Umur</td>
            <td>Jenis Kelamin</td>
            <td bgcolor="white" className="removeBorder"></td>
          </tr>
        </thead>
        {userByIdData
          ? userByIdData?.pengunjung.map((item) => (
              <ListItem key={item.id} data={item} hapusPengunjung={props.hapusPengunjung} />
            ))
          : userData?.pengunjung.map((item) => (
              <ListItem key={item.id} data={item} hapusPengunjung={props.hapusPengunjung} />
            ))}
      </table>
    </div>
  );
};

export default ListPassenger;
