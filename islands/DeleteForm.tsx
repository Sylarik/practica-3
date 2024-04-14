import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { JSX } from "preact";

export const Form: FunctionComponent= () => {

    const [msg, setMensaje] = useState<string>("");
    
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const eliminar = async() => {
        const url = await fetch(`/deleteLover`,{
            method: 'delete',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({name:name, password: password}),
        })

        const data = await url.json();

        if(data.message){
            setMensaje("Se ha eliminado");
        }
    }

    

    /*
  const submitHandler = (e:JSX.TargetedEvent<HTMLFormElement, Event>) => {
    e.preventDefault();
    const errorMsg: string[] = [];
    
    if (name === "") {
      errorMsg.push("You must provide a name");
    }

    if (creator === "") {
        errorMsg.push("You must provide a creator");
    }

    if (errorMsg.length > 0) setError(errorMsg.join(" | "));
    else {
      setError("");
      e.currentTarget.submit();
    }
  }*/
  

  return (
    <>
      <div class="formulario form">
          <h2 class="aling:center"> que lover ya no esta en la solteria </h2>
          <input type="text" name="nombre" placeholder="name" onBlur={(e) => setName(e.currentTarget.value)}></input>
          <input type="text" name="password" placeholder="password" onBlur={(e) => setPassword(e.currentTarget.value)}></input>

          <button type="submit" onClick={eliminar}> Eliminar  </button>
          

      </div>
      <p class="msgg">
        {msg!=="" && <p>{msg}</p>}
      </p>

    </>
    
  );
};

export default Form;