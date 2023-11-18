import React from "react";
import { Switch } from "@nextui-org/react";
//import { MoonIcon } from "./MoonIcon";
//import { SunIcon } from "./SunIcon";

export default function Header() {
  return (
    <div>
      <h1 className="text-2xl font-bold p-5 text-neutral-500">ToDo List 📝</h1>
    </div>
  );
}

/*
<Switch
        defaultSelected
        size="lg"
        color="success"
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
      >
        Dark mode
      </Switch>


*/
