import React, { useState } from "react";
import "./App.css";
import TableComponent from "./components/TableComponent";

const App = () => {
  const [data, setData] = useState(null);
  const [maxRegister, setMaxRegister] = useState(0);
  const [departament, setDepartament] = useState("AMAZONAS");

  const filterByDepartment = (e) => {
    fetch(
      `https://www.datos.gov.co/resource/gt2j-8ykr.json?departamento_nom=${departament}&$limit=${maxRegister}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Covid-19 - Colombia</h1>
      </header>
      <section>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            filterByDepartment();
          }}
        >
          <label htmlFor="maxRegister">Max of Register</label>
          <input
            id="maxRegister"
            type="number"
            value={maxRegister}
            min="0"
            onChange={(e) => {
              setMaxRegister(e.target.value);
            }}
          ></input>
          <select
            name="select"
            onChange={(e) => {
              setDepartament(e.target.value.toUpperCase());
            }}
          >
            <option value="AMAZONAS">Amazonas</option>
            <option value="ANTIOQUIA">Antioquia</option>
            <option value="ARAUCA">Arauca</option>
            <option value="ATLANTICO">Atlántico</option>
            <option value="BOLIVAR">Bolívar</option>
            <option value="BOYACÁ">Boyacá</option>
            <option value="CALDAS">Caldas</option>
            <option value="CAQUETA">Caquetá</option>
            <option value="CASANARE">Casanare</option>
            <option value="CAUCA">Cauca</option>
            <option value="CESAR">Cesar</option>
            <option value="CHOCO">Chocó</option>
            <option value="CORDOBA">Córdoba</option>
            <option value="CUNDINAMARCA">Cundinamarca</option>
            <option value="Guainia">Guainía</option>
            <option value="Guaviare">Guaviare</option>
            <option value="Huila">Huila</option>
            <option value="Guajira">La Guajira</option>
            <option value="Magdalena">Magdalena</option>
            <option value="Meta">Meta</option>
            <option value="Nariño">Nariño</option>
            <option value="Norte Santander">Norte de Santander</option>
            <option value="Putumayo">Putumayo</option>
            <option value="Quindio">Quindío</option>
            <option value="Risaralda">Risaralda</option>
            <option value="San Andrés y Providencia">
              San Andrés y Providencia
            </option>
            <option value="Santander">Santander</option>
            <option value="Sucre">Sucre</option>
            <option value="Tolima">Tolima</option>
            <option value="Valle">Valle del Cauca</option>
            <option value="Vaupes">Vaupés</option>
            <option value="Vichada">Vichada</option>
          </select>
          <button type="submit">Search</button>
        </form>
      </section>
      {data && <TableComponent data={data} />}
    </div>
  );
};

export default App;
