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
  

  return (
    <div class="form">
      <h2> Comenta algo bonito</h2>
      <p> (la contraseña debe der la de este usuario, no la tuya)</p>
      
        
        <input type="text" name="password" placeholder="password" onBlur={(e) => setPassword(e.currentTarget.value)}></input>
        <input type="text" name="message" placeholder="message" onBlur={(e) => setMessage(e.currentTarget.value)}></input>
            

        <button onClick={submitComment}> Añadir  </button>
      
      
    </div>
  );
};

export default AddCommentsForm;