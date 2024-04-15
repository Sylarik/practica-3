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
      <div class="contenedor">
        <div style="text-align: center;">
          <img src="https://files.catbox.moe/s5seq9.png" alt="tinder" style="width: 700px; height: 100%; displey: flex; align-items: center;"/>
        </div>
        <p> buscas una a alguien especial? Conoce a nuestros solteros con los que podras conectar y no solo mentalmente rawr</p>
        <div>
          <FilterForm lovers = {props.data}/>
        </div>
      </div>
      

    </body>
    
  )
    
}

//<Solteros lista = {props.data}/>
