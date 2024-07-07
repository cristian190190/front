import React, { useState, useEffect } from "react";
import Tareas from "./Tareas"; // Asegúrate de que la ruta sea correcta

const Board = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const tareasAlmacenadas = localStorage.getItem("miclave");
    if (tareasAlmacenadas) {
      setTareas(JSON.parse(tareasAlmacenadas));
    }
  }, []);

  const agregarTarea = (tarea) => {
    // Verificar si la tarea tiene una descripción y no está vacía
    if (tarea.descripcion && tarea.descripcion.trim()) {
      const nuevasTareas = [...tareas, tarea];
      setTareas(nuevasTareas);
      localStorage.setItem("miclave", JSON.stringify(nuevasTareas));
    } else {
      alert("La tarea debe tener una descripción");
      
    }
  };

  const eliminarTarea = (indice) => {
    const nuevasTareas = tareas.filter((_, index) => index !== indice);
    setTareas(nuevasTareas);
    localStorage.setItem("miclave", JSON.stringify(nuevasTareas));
  };

  

  return (
    <div>
      <Tareas
        tareas={tareas}
        agregarTarea={agregarTarea}
        eliminarTarea={eliminarTarea}
      />
    </div>
  );
};

export default Board;
