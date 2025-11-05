import { useToggle } from "./useToggle";


export function useDarkMode(){

    const [darkmode,setDarkMode]=useToggle(false); 

    function toggleDarkMode(){
        setDarkMode((prevMode)=>!prevMode);
    }

    return [darkmode,toggleDarkMode];
}