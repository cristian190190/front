import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const Tareas = ({ tareas, agregarTarea, eliminarTarea }) => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [importante, setImportante] = useState(false);

  const manejarAgregarTarea = () => {
    const nuevaTarea = {
      id: uuid(),
      titulo,
      descripcion,
      importante,
    };
    agregarTarea(nuevaTarea);
    setTitulo("");
    setDescripcion("");
    setImportante(false);
  };

  
  return (
    <div>
      <h1 className="titulo1">Post it simulator</h1>
      
      <input
        className="input1"
        type="text"
        placeholder="Título de la tarea"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <textarea
        className="input2"
        placeholder="Descripción de la tarea"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <label>
        Importante
        <input
          type="checkbox"
          checked={importante}
          onChange={(e) => setImportante(e.target.checked)}
        />
      </label>
      <button onClick={manejarAgregarTarea}>Agregar</button>
      <div className="tareas-container">
        {tareas.map((tarea) => (
          <div
            key={tarea.id}
            className={`tarea ${tarea.importante ? "importante" : ""}`}
          >
            <div className="eliminarCarta">
              <button onClick={() => eliminarTarea(tareas.indexOf(tarea))}>
                X
              </button>
            </div>
            <h3>{tarea.titulo}</h3>
            <p>{tarea.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tareas;
