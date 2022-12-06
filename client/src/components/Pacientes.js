import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URL_API } from "../http/const";
import "./styles/paciente.css";

const Pacientes = ({ name, lastName, sexo, typoId, numeroId, verUsuario }) => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [usuario, setUsuario] = useState({});
  const sex = "";

  const gender = () => {
    if (sexo === "hombre") {
      sex = "male";
    } else {
      sex = "female";
    }
  };

  useEffect(() => {
    gender()
    axios
      .get(`https://randomuser.me/api/?inc=${sex}`)
      .then((res) => setCharacter(res.data.results[0]));
    console.log(character);
    axios
      .get(`${URL_API}/usuarios/${id}`)
      .then((res) => setUsuario(res.data.user));
  }, []);
  console.log(character);
  return (
    <>
      <div className="pacienteDiv">
        <div className="card">
          <img src={character.picture?.large} alt="" />
          <h5>
            Nombre: <p>{usuario.nombre}</p>
          </h5>
          <h5>
            Apellido: <p>{usuario.apellido}</p>
          </h5>
          <h5>
            Tipode id: <p>{usuario.typoId}</p>
          </h5>
          <h5>
            Numero de id: <p>{usuario.numeroId}</p>
          </h5>
        </div>
      </div>
    </>
  );
};

export default Pacientes;
