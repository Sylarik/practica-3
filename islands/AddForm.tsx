import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { JSX } from "preact";
import {Comment} from "../types.ts"

export const Form: FunctionComponent = () => {
  const [error, setError] = useState<string>("");

    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [age, setAge] = useState<number>(0);
    const [sex, setSex] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [hobbies, setHobbies] = useState<string[]>([]);
    const [photo, setPhoto] = useState<string>("");
    //const [comments, setComments] = useState<Comment[]>([]);

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
      <h2> añade a nuestro soltero fav</h2>

      <form action="/addLover" method="POST" class="formulario">
        <input type="text" name="nombre" placeholder="name" onBlur={(e) => setName(e.currentTarget.value)}></input>
        <input type="text" name="password" placeholder="password" onBlur={(e) => setPassword(e.currentTarget.value)}></input>
        <input type="number" name="age" placeholder="age" onBlur={(e) => setAge(parseInt(e.currentTarget.value))}></input>
        <input type="text" name="sex" placeholder="sex" onBlur={(e) => setSex(e.currentTarget.value)}></input>
        <input type="text" name="description" placeholder="description" onBlur={(e) => setDescription(e.currentTarget.value)}></input>
        <input type="text" name="hobbies" placeholder="hobbies" onBlur={(e) => setHobbies(e.currentTarget.value.split(","))}></input>
        <input type="text" name="photo" placeholder="photo" onBlur={(e) => setPhoto(e.currentTarget.value)}></input>
             

        <button type="submit"> Añadir  </button>
      </form>
      
    </div>
  );
};

export default Form;