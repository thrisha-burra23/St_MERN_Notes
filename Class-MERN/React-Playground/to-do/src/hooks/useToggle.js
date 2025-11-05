import { useState } from "react";

export function useToggle (intitialValue)  {

    const [value, setValue] = useState(intitialValue);

    const toggle=()=>{
        setValue((preValue)=>!preValue);
    }

    return [value,toggle];
}
