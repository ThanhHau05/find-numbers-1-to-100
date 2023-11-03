import { useContext } from "react";

import { ButtonChildren } from "@/components/base/button children";
import { BUTTON_HOME } from "@/components/constants/select-options";
import { MainContext } from "@/context/main-context";

export const RenderButtonHome = () => {
  const { setValueShowMode } = useContext(MainContext);
  return (
    //mb-20 grid grid-cols-2 gap-2
    <div className="mb-20 w-full flex items-center justify-center">
      {BUTTON_HOME.map((item) => (
        <ButtonChildren
          title={item.title}
          key={item.value}
          borderLarge
          childrenTop
          textLarge
          flexCenter
          onClick={() => setValueShowMode(item.value)}
        >
          {item.children}
        </ButtonChildren>
      ))}
    </div>
  );
};
