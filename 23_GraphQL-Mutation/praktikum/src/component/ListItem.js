import { useState } from "react";
import useUpdateData from "../hooks/useUpdateData";
import "./Home.css";

const BaseData = {
  nama: "",
  umur: "",
  jenisKelamin: "",
};

const ListItem = (props) => {
  const { id, nama, umur, jenisKelamin } = props.data;
  const { updatePassenger } = useUpdateData();

  const [statusEdit, setStatusEdit] = useState(false);

  const [newPassenger, setNewPassenger] = useState(BaseData);

  const handleEdit = () => {
    return setStatusEdit(!statusEdit);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    setNewPassenger({
      ...newPassenger,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    updatePassenger({
      variables: {
        id: id,
        nama: newPassenger.nama,
        umur: newPassenger.umur,
        jenisKelamin: newPassenger.jenisKelamin,
      },
    });
  };

  return (
    <tbody>
      {statusEdit ? (
        <tr>
          <td>
            <form onSubmit={handleSubmit}>
              <input name="nama" onChange={handleInput} placeholder={nama} />
            </form>
          </td>
          <td>
            <form onSubmit={handleSubmit}>
              <input name="umur" onChange={handleInput} placeholder={umur} />
            </form>
          </td>
          <td>
            <form onSubmit={handleSubmit}>
              <input name="jenisKelamin" onChange={handleInput} placeholder={jenisKelamin} />
            </form>
          </td>
          <td>
            <form onSubmit={handleSubmit}>
              <button type="submit">✔</button>
              <button style={{ marginLeft: "10px" }} onClick={handleEdit}>
                X
              </button>
            </form>
          </td>
        </tr>
      ) : (
        <tr>
          <td>{nama}</td>
          <td>{umur}</td>
          <td>{jenisKelamin}</td>
          <td>
            <button onClick={handleEdit}>Edit</button>
            <button style={{ marginLeft: "10px" }} onClick={() => props.deletedPassenger(id)}>
              Hapus
            </button>
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default ListItem;
