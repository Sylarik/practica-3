import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios"
import { Solteros } from "../components/Solteros.tsx";
import { Lover } from "../types.ts";


  


export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext) => {
    /* CON FETCH
    const url = await fetch(`https://supermondongo.deno.dev/`)
    const json = await url.json()
    return ctx.render(json)
    */

    //CON AXIOS
    const url = await axios.get(`https://lovers.deno.dev/hobbies`)
    console.log(url)
    if(!url){
      return new Response("Error fetching heroes", {status:500})
    }
    return ctx.render(url.data);

  }
}



const Page =( props:PageProps) =>{
  const hobbies = props.data;
  return (
    <body>
        <div>
            {hobbies.map((e:string) => { 
                return (
                    <div>
                        <p>{e}</p>
                        
                    </div>
                )
            })}
        </div>
    </body>
    
  )
    
}

export default Page;