import { useEffect, useState } from "preact/hooks";
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

  //const signal = useSignal<boolean>(false);
  //const {lovers} = props;

  const [error, setError] = useState<string>("");

  const [name, setName] = useState<string>("");
  const [password, setPassword ]= useState<string>("");
  const [lover, setLover] = useState<Lover>();

  const [logueado, setLogueado] = useState<boolean>(false);

  //para que me lo muestre aunque recargue la pagina-----
    useEffect(() => {
      const loggedIn = localStorage.getItem('logueado');
      setLogueado(loggedIn === 'true');
    }, []);
  
    // Cuando el estado de 'logueado' cambia, actualiza el almacenamiento local
    useEffect(() => {
        localStorage.setItem('logueado', logueado.toString());
    }, [logueado]);
    // Al montar el componente, lee el estado 'logueado' de las cookies
    
  //--------------------------------------------------------

  const checkPassword = async () => {
      
    if(name === "" || password === "") {
      setError("You must provide a name and a password");
      return;
    }

    const response = await fetch(`/api/checkRegister`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name:name, password:password}),
    });

    if (!response.ok) {
      setError("The passwords do not match");
      return;
    }

    if(IS_BROWSER){
      document.cookie = `user=${name}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
      document.cookie = `password=${password}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
      
      //redirige a otra pag
      setLogueado(true);
    }

    const miLover = await fetch(`/api/user?name=${name}`);
    const loverJson:Lover = await miLover.json();
    setLover(loverJson);

  }

  

  /*
    const register = async () => {

        if(IS_BROWSER){
            document.cookie = `user=${name}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
            document.cookie = `password=${password}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;

            // Obtén el usuario y la contraseña de las cookies
            const cookieUser = document.cookie.split('; ').find(row => row.startsWith('user='))?.split('=')[1];
            const cookiePassword = document.cookie.split('; ').find(row => row.startsWith('password='))?.split('=')[1];

            const response = await fetch(`https://lovers.deno.dev/${cookieUser}`);
            const user = await response.json();

            // Compara la contraseña del usuario con la contraseña de la cookie
            if (user.password === cookiePassword) {
                console.log('¡Cuenta creada! Puedes iniciar sesión ahora.');
                setLogueado(true);
            } else {
                console.log('¡nonononono');
                setError("The passwords do not match");
            }

            //alert('¡Cuenta creada! Puedes iniciar sesión ahora.');
            console.log('¡Cuenta creada! Puedes iniciar sesión ahora.');
            setLogueado(true);
            
        }}
  */
  
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
  

  const cookies = async () => {
        
    const cookies = document.cookie.split("; ");
    const userCookie = cookies.find((row) => row.startsWith("user="));
    const passwordCookie = cookies.find((row) => row.startsWith("password="));

    const elUser = userCookie ? userCookie.split("=")[1] : null;
    const laPassword = passwordCookie ? passwordCookie.split("=")[1] : null;

    const response = await fetch(`/api/user?name=${elUser}`);

    const data = await response.json(); 
    
    setLover(data)
    setLogueado(true)
  }

    
  

  return (
    <div class="form">

      
        <input type="text" name="nombre" placeholder="name" onBlur={(e) => setName(e.currentTarget.value)}></input>
        <input type="text" name="password" placeholder="password" onBlur={(e) => setPassword(e.currentTarget.value)}></input>

        <button type="submit" onClick={checkPassword}>Register</button>
        <button type="submit" onClick={logOut}>log out</button>

        {error !== "" && <p>{error}</p> }
        {logueado && 
          <div>
            <p>te has logueado exitosamente</p>
            <button type="submit" onClick={cookies}>Ver tu perfil</button>
            {lover && <Soltero lover={lover} />}
          </div>
        }

      
    </div>
  );
};

export default RegisterForm;