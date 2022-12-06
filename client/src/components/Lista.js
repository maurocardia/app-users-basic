import Table from "react-bootstrap/Table";
import axios from "axios";
import { AiTwotoneEdit, AiFillDelete, AiFillEye } from "react-icons/ai";
import "../components/styles/lista.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { URL_API } from "../http/const";

const Lista = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const navigate = useNavigate();
  const [changeButton, setChangeButton] = useState(true);

  const handleShow = (user) => {
    setChangeButton(true);
    setShow(true);
    setName(user.nombre);
    setLastNAme(user.apellido);
    setSexo(user.sexo);
    setNumeroId(user.numeroId);
    setTypoId(user.typoId);
    setId(user.id);
  };

  const verUsuario = (id) => {
    navigate(`/${id}`);
  };

  const [name, setName] = useState("");
  const [lastName, setLastNAme] = useState("");
  const [sexo, setSexo] = useState("");
  const [numeroId, setNumeroId] = useState("");
  const [typoId, setTypoId] = useState("");
  const [id, setId] = useState("");

  const dataUser = {
    nombre: name,
    apellido: lastName,
    sexo: sexo,
    numeroId: numeroId,
    typoId: typoId,
  };

  useEffect(() => {
    axios
      .get(`${URL_API}/usuarios/`)
      .then((res) => setUsers(res.data.data));
  }, []);

  const refresh = () => {
    axios
      .get(`${URL_API}/usuarios/`)
      .then((res) => setUsers(res.data.data));
  };

  const actualizarPaciente = () => {
    axios
      .patch(`${URL_API}/usuarios/${id}`, dataUser)
      .then((res) => {
        setShow(false);
        refresh();
      });
  };

  const deleteUser = (user) => {
    axios.delete(`${URL_API}/usuarios/${user}`).then((res) => {
      axios.get(`${URL_API}/usuarios/`);
      refresh();
    });
  };

  const newUser = () => {
    setChangeButton(false);
    setShow(true);
    setName("");
    setLastNAme("");
    setSexo("");
    setNumeroId("");
    setTypoId("");
  };

  const createUSer = () => {
    axios.post(`${URL_API}/usuarios/`, dataUser)
    .then((res) => {
      setShow(false);
      refresh();
    });
  };

  return (
    <div className="containerTable">
      <div className="addUser">
        <div className="userButton" onClick={newUser}>
          <AiOutlineUsergroupAdd />
        </div>
      </div>
      <Table striped="columns" className="tabla container" responsive>
        <thead>
          <>
            <br />
            <br />

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Datos de usuario </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>nombre</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Pepito Perez"
                      autoFocus
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>apellidos</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Gomez Cardenas"
                      autoFocus
                      value={lastName}
                      onChange={(e) => setLastNAme(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>sexo</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masculino/Femenino"
                      autoFocus
                      value={sexo}
                      onChange={(e) => setSexo(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>tipo de id</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="CC/TI/CE"
                      autoFocus
                      value={typoId}
                      onChange={(e) => setTypoId(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>numero de id</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="12345678"
                      autoFocus
                      value={numeroId}
                      onChange={(e) => setNumeroId(e.target.value)}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                {changeButton ? (
                  <Button variant="primary" onClick={actualizarPaciente}>
                    Save Changes
                  </Button>
                ) : (
                  <Button variant="primary" onClick={createUSer}>
                    Create user
                  </Button>
                )}
              </Modal.Footer>
            </Modal>
          </>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>apellido</th>
            <th>sexo</th>
            <th>numero de id</th>
            <th>tipo id</th>
            <th>ver</th>
            <th>editar</th>
            <th>eliminar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.nombre}</td>
              <td>{user.apellido}</td>
              <td>{user.sexo}</td>
              <td>{user.numeroId}</td>
              <td>{user.typoId}</td>
              <td className="button">
                <AiFillEye onClick={() => verUsuario(user.id)} />
              </td>
              <td className="button">
                <AiTwotoneEdit onClick={() => handleShow(user)} />
              </td>
              <td className="button">
                <AiFillDelete onClick={() => deleteUser(user.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Lista;
