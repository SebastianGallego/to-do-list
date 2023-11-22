import { Button } from "@nextui-org/react";
import Swal from "sweetalert2";

export default function ListManagement({ ToDos, setToDos, selectFilter }) {
  const handleDelete = (e) => {
    Swal.fire({
      title: "Está seguro de eliminar la Lista Completa?",
      showDenyButton: true,
      confirmButtonText: "Eliminar",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        setToDos([]);
      }
    });
  };

  return (
    <>
      <div className="text-center w-[440px] flex flex-col items-center gap-3 justify-center border-solid border-2 border-sky-500 p-5 rounded-md ">
        <div className="flex gap-5 items-center border-solid border-2 border-sky-500 p-5 rounded-md">
          <span className="text-md font-bold">
            Total: {ToDos.length} Tareas
          </span>

          <Button
            color="danger"
            variant="ghost"
            className="w-[220px]  text-gray-800 dark:text-gray-200 "
            onClick={(e) => handleDelete(e)}
          >
            Borrar Lista
          </Button>
        </div>
        <Button
          color="success"
          variant="ghost"
          className="w-[220px]  text-gray-800 dark:text-gray-200"
          onClick={() => selectFilter("completados")}
        >
          Ver Completados
        </Button>

        <Button
          color="warning"
          variant="ghost"
          className="w-[220px]  text-gray-800 dark:text-gray-200 "
          onClick={() => selectFilter("sinCompletar")}
        >
          Ver Sin completar
        </Button>

        <Button
          color="primary"
          variant="ghost"
          className="w-[220px]  text-gray-800 dark:text-gray-200 "
          onClick={() => selectFilter("todos")}
        >
          Ver Todos
        </Button>
      </div>
    </>
  );
}
