import { useState } from "react";
import { Input, Button } from "@nextui-org/react";

export default function InputToDo({ addToDo }) {
  const [newToDo, setNewToDo] = useState("");

  const handleChange = (e) => {
    if (e.target.value.length <= 18) {
      setNewToDo(e.target.value);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = (e) => {
    addToDo(e, newToDo);
    setNewToDo(""); //Limpia el input despues
  };

  return (
    <>
      <div className="text-start w-[440px] flex items-center gap-5 border-solid border-2 border-sky-500 p-5 rounded-md text-gray-700/50 dark:text-gray-200/90">
        <Input
          type="text"
          label="Tarea"
          labelPlacement={"outside"}
          description={"Ingrese la tarea a realizar"}
          value={newToDo}
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => handleEnter(e)}
          classNames={{
            label: "text-gray-700/50 dark:text-gray-200/90",
            input: [
              "bg-transparent",
              "text-lg text-gray-700/90 dark:text-gray-400/90",
              "placeholder:text-gray-700/50 dark:placeholder:text-gray-200/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-lg",
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focused=true]:bg-default-200/50",
              "dark:group-data-[focused=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
        />
        <Button
          color="default"
          variant="ghost"
          className="w-[180px]  text-gray-800 dark:text-gray-200"
          onClick={(e) => handleSubmit(e)}
        >
          Agregar Tarea
        </Button>
      </div>
    </>
  );
}
