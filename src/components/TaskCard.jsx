import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  function eliminarTarea() {
    deleteTask(task.id);
  }

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p>{task.descripcion}</p>
      <button
        className="bg-red-600 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={eliminarTarea}
      >
        Eliminar
      </button>
    </div>
  );
}

export default TaskCard;
