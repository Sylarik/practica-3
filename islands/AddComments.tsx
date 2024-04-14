import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { JSX } from "preact";
import {Comment} from "../types.ts"
import { IS_BROWSER } from "$fresh/runtime.ts";




export const AddCommentsForm: FunctionComponent<{nombre:string}> = ({nombre}) => {

    
    const [error, setError] = useState<string>("");

    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    //const [comments, setComments] = useState<Comment[]>([]);
    const [logueado, setLogueado] = useState<boolean>(false);

    if(IS_BROWSER){
        const loggedInUser = document.cookie.split('; ').find(row => row.startsWith('user='))?.split('=')[1];
        setName(loggedInUser || "");

        
    }
    
    const submitComment = async () => {
        if (!name) {
          setError("You must be logged in to comment");
          return;
        }
    
        const response = await fetch(`/api/addComment`, {
          method: 'POST',
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify({
            user: name,
            password: password,
            message: message,
            name: nombre,

          }),
        });
    
        if (!response.ok) {
          setError("Error submitting comment");
        } else {
          setMessage("");
          setError("");
        }
        }

    

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
      
        
        <input type="text" name="password" placeholder="password" onBlur={(e) => setPassword(e.currentTarget.value)}></input>
        <input type="text" name="message" placeholder="message" onBlur={(e) => setMessage(e.currentTarget.value)}></input>
            

        <button onClick={submitComment}> Añadir  </button>
      
      
    </div>
  );
};

export default AddCommentsForm;