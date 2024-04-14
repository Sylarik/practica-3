import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import { stripSuffix } from "$std/path/_common/basename.ts";
import {Lover} from "../types.ts"
import {Soltero} from "../components/Soltero.tsx"
import AddForm from "../islands/AddForm.tsx";


export const handler: Handlers = {
    POST: async (req: Request, ctx: FreshContext<unknown,string>) => {

        const form = await req.formData()
        const name= form.get("nombre")
        const password= form.get("password")

        const age= parseInt(form.get("age"))

        const sex= form.get("sex")
        const description= form.get("description")

        const hobbies = form.get("hobbies")?.split(",").map((e) => e.trim()) || []

        const photo= form.get("photo")

        const comments:string[] = []
        


        const personaje = {
            name:name,
            password:password,
            age:age,
            sex:sex,
            description:description,
            hobbies:hobbies,
            photo:photo,
             comments: [{user:"", message:""}]
            
        }

        console.log(personaje)
      
      
      const url = await axios.post<Lover>(`https://lovers.deno.dev/`, {
          name:personaje.name,
          password:personaje.password,
          age:personaje.age,
          sex:personaje.sex,
          description:personaje.description,
          hobbies:personaje.hobbies,
          photo:personaje.photo,
          comments:personaje.comments
      })
      
      /*
      const url = await fetch(`https://lovers.deno.dev/`,{
        method: 'post',
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(personaje),
      })*/

      if(url.status === 400){
        return new Response("Error fetching lovers", {status:400})
      }
      

      return ctx.render("lover creado");
  
    }
  }

const Page = (props: PageProps) => {

    return(
      <body class="add" >
          <div>
              
              <AddForm/>

              <p>{props.data}</p>
              

          </div>
      </body>
        
        
    )
}

export default Page;

