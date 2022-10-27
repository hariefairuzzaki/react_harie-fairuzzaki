import React, { useState } from "react";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import useGetByName from "../hooks/useGetByName";
import useInsertData from "../hooks/useInsertData";
import useDeleteData from "../hooks/useDeleteData";
import useSubscriptionData from "../hooks/useSubscriptionData";

export default function Home() {
  const { loadingPassenger, errorPassenger, subscriptionData } = useSubscriptionData();
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

  if (errorPassenger || byNameError) return <p>Something went wrong ...</p>;

  return (
    <div>
      <Header />
      <div style={{ margin: "20px" }}>
        <input value={passengerName} onChange={handleSearchName} style={{ marginRight: "5px" }} />
        <button onClick={handleGetData}>Search</button>
      </div>

      {(errorPassenger || byNameError) && <p>Something went wrong ...</p>}

      {loadingPassenger || byNameLoading || insertLoading || deleteLoading ? (
        <p>Loading ...</p>
      ) : (
        <ListPassenger
          data={passengerByName ? passengerByName?.passenger : subscriptionData?.passenger}
          deletedPassenger={deletedPassenger}
        />
      )}
      <PassengerInput addedPassenger={addedPassenger} />
    </div>
  );
}
