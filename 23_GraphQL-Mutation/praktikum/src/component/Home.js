import React, { useState } from "react";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import useRetrieveData from "../hooks/useRetrieveData";
import useGetByName from "../hooks/useGetByName";
import useInsertData from "../hooks/useInsertData";
import useDeleteData from "../hooks/useDeleteData";

export default function Home() {
  const { passengerLoading, passengerError, passengerData } = useRetrieveData();
  const { getData, byNameLoading, byNameError, passengerByName } = useGetByName();
  const { insertPassenger, insertLoading } = useInsertData();
  const { deletePassenger, deleteLoading } = useDeleteData();

  const [passengerName, setPassengerName] = useState("");

  const handleGetData = () => {
    getData({
      variables: {
        nama: passengerName,
      },
    });
  };

  const handleSearchName = (e) => {
    if (e.target) {
      setPassengerName(e.target.value);
    }
  };

  const addedPassenger = (newUser) => {
    const newData = {
      ...newUser,
    };
    insertPassenger({
      variables: {
        nama: newData.nama,
        umur: newData.umur,
        jenisKelamin: newData.jenisKelamin,
      },
    });
  };

  const deletedPassenger = (ids) => {
    deletePassenger({
      variables: {
        id: ids,
      },
    });
  };

  if (passengerError || byNameError) return <p>Something went wrong ...</p>;

  return (
    <div>
      <Header />
      <div style={{ margin: "20px" }}>
        <input value={passengerName} onChange={handleSearchName} style={{ marginRight: "5px" }} />
        <button onClick={handleGetData}>Search</button>
      </div>

      {(passengerError || byNameError) && <p>Something went wrong ...</p>}

      {passengerLoading || byNameLoading || insertLoading || deleteLoading ? (
        <p>Loading ...</p>
      ) : (
        <ListPassenger
          data={passengerByName ? passengerByName?.passenger : passengerData?.passenger}
          deletedPassenger={deletedPassenger}
        />
      )}
      <PassengerInput addedPassenger={addedPassenger} />
    </div>
  );
}
