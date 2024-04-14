import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios"
import { Solteros } from "../components/Solteros.tsx";
import FilterForm from "../islands/FilterForm.tsx";
import RegisterForm from "../islands/RegisterForm.tsx";




export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext) => {
    /* CON FETCH
    const url = await fetch(`https://supermondongo.deno.dev/`)
    const json = await url.json()
    return ctx.render(json)
    */

    //CON AXIOS

    const url = await axios.get(`https://lovers.deno.dev/`)
    if(!url){
      return new Response("Error fetching heroes", {status:500})
    }
    return ctx.render(url.data);

  }
}



export default function Home( props:PageProps) {
  
  return (
    <body class="index">
      <h1>TINDER </h1>
      
      <div>
        <RegisterForm lovers = {props.data}/>
        
        
      </div>

    </body>
    
  )
    
}

//<Solteros lista = {props.data}/>
