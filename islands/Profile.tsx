import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { JSX } from "preact";
import {Comment, Lover} from "../types.ts"
import { Soltero } from "../components/Soltero.tsx";
import { Solteros } from "../components/Solteros.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";

type Lovers= {
  lovers: Lover[]
}



export const RegisterForm: FunctionComponent<Lovers> = ({lovers}) => {

  const signal = useSignal<boolean>(false);
  //const {lovers} = props;

  const [error, setError] = useState<string>("");

    const [name, setName] = useState<string>("");
    const [password, setPassword ]= useState<string>("");
    const [logueado, setLogueado] = useState<boolean>(false);
    
    const register = () => {
        if(IS_BROWSER){
            document.cookie = `user=${name}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
            document.cookie = `password=${password}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
             //alert('¡Cuenta creada! Puedes iniciar sesión ahora.');
            console.log('¡Cuenta creada! Puedes iniciar sesión ahora.');
            setLogueado(true);
            
        }

    }

    const logOut = () => {
      if(IS_BROWSER){
        const d = new Date();
        d.setTime(d.getTime() - 1);

        if(IS_BROWSER){
            document.cookie = `user=${name}; expires=${d.toUTCString()}; path=/`;
            document.cookie = `password=${password}; expires=${d.toUTCString()}; path=/`;   //expires=Fri, 31 Dec 2000 0:0:0 GMT
        console.log('¡Cuenta creada! Puedes iniciar sesión ahora.');
        setLogueado(false);
    }

    }}
  

    /*
  const submitHandler = (e:JSX.TargetedEvent<HTMLFormElement, Event>) => {
    e.preventDefault();
    const errorMsg: string[] = [];
    
    if (name === "") {
      errorMsg.push("You must provide a name");
    }

    if (image === "") {
      errorMsg.push("You must provide a image");
    }

    if (sound === "") {
        errorMsg.push("You must provide a sound");
    }

    if (creator === "") {
        errorMsg.push("You must provide a creator");
    }

    if (errorMsg.length > 0) setError(errorMsg.join(" | "));
    else {
      setError("");
      e.currentTarget.submit();
    }
  }
  */
  

  return (
    <div class="form">
      
        <a> tu perfil</a>
      

        {logueado && <p>¡Cuenta creada! Puedes iniciar sesión ahora.</p>}
      
    </div>
  );
};

export default RegisterForm;