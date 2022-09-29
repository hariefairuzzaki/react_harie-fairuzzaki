import React, { useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function FormDaftar() {
  const baseData = {
    nama: "",
    email: "",
    noHandphone: "",
    pendidikan: "",
    kelas: "",
    harapan: "",
  };

  const baseError = {
    nama: "",
    email: "",
    noHandphone: "",
  };

  const suratKesungguhan = useRef();
  const [data, setData] = useState(baseData);
  const [errMsg, setErrMsg] = useState(baseError);
  const regex = /^[A-Za-z ]*$/;

  const handleInput = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "nama":
        if (regex.test(value)) {
          setErrMsg({ ...errMsg, nama: "" });
        } else {
          setErrMsg({ ...errMsg, nama: "Nama Lengkap Harus Berupa Huruf!" });
        }
        break;

      case "email":
        if (value === "") {
          setErrMsg({ ...errMsg, email: "Email wajib diisi!" });
        } else {
          setErrMsg({ ...errMsg, email: "" });
        }
        break;

      case "noHandphone":
        if (value.length < 9) {
          setErrMsg({ ...errMsg, noHandphone: "No Handphone kurang dari 9 angka!" });
        } else if (value.length > 14) {
          setErrMsg({ ...errMsg, noHandphone: "No Handphone lebih dari 14 angka!" });
        } else {
          setErrMsg("");
        }
        break;

      default:
        break;
    }

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (errMsg !== "") {
      alert("Terdapat data yang tidak sesuai");
    } else {
      alert(`Data Pendaftar "${data.nama}" Berhasil Diterima`);
    }

    handleReset();
  };

  const handleReset = () => {
    setData(baseData);
    suratKesungguhan.current.value = "";
  };

  return (
    <>
      <Container>
        <div className="mt-3 mb-5" style={{ width: "45rem", margin: "auto" }}>
          <h2 className="text-center mb-5">Pendaftaran Peserta Coding Bootcamp</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nama Lengkap:</Form.Label>
              <Form.Control
                type="text"
                name="nama"
                value={data.nama}
                placeholder="Nama Lengkap"
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={data.email}
                placeholder="Enter email"
                onChange={handleInput}
                required={true}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>No Handphone:</Form.Label>
              <Form.Control
                type="number"
                name="noHandphone"
                minLength={9}
                maxLength={14}
                value={data.noHandphone}
                placeholder="No Handphone"
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Label>Latar Belakang Pendidikan:</Form.Label>
            <Form.Group className="d-flex mb-3">
              <Form.Check
                type="radio"
                name="pendidikan"
                id="radio1"
                className="me-3"
                label="IT"
                value="IT"
                checked={data.pendidikan === "IT"}
                onChange={handleInput}
              />
              <Form.Check
                type="radio"
                name="pendidikan"
                id="radio2"
                label="Non IT"
                value="Non IT"
                checked={data.pendidikan === "Non IT"}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Kelas Coding yang Dipilih:</Form.Label>
              <Form.Select name="kelas" value={data.kelas || ""} onChange={handleInput}>
                <option>Pilih Salah Satu Program</option>
                <option value="Coding Backend with Golang">Coding Backend with Golang</option>
                <option value="Coding Frontend with ReactJS">Coding Frontend with ReactJS</option>
                <option value="Fullstack Developer">Fullstack Developer</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Foto Surat Kesungguhan:</Form.Label>
              <Form.Control type="file" name="suratKesungguhan" ref={suratKesungguhan} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Harapan Untuk Bootcamp Ini</Form.Label>
              <Form.Control as="textarea" name="harapan" value={data.harapan} rows={4} onChange={handleInput} />
            </Form.Group>

            {errMsg.nama && (
              <li style={{ color: "red" }}>
                {errMsg.nama} <br />
              </li>
            )}
            {errMsg.email && (
              <li style={{ color: "red" }}>
                {errMsg.email} <br />
              </li>
            )}
            {errMsg.noHandphone && (
              <li style={{ color: "red" }}>
                {errMsg.noHandphone} <br />
              </li>
            )}

            <div className="mt-3">
              <Button variant="success" type="submit">
                Submit
              </Button>
              <Button variant="danger" className="ms-3" type="reset" onClick={handleReset}>
                Reset
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
}
