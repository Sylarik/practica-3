import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import { stripSuffix } from "$std/path/_common/basename.ts";
//import {HeroeType} from "../types.ts"
//import {Heroe} from "../components/Heroe.tsx"
import DeleteForm from "../islands/DeleteForm.tsx";



export const handler: Handlers = {
    DELETE: async (req: Request, ctx: FreshContext<unknown,string>) => {

        const form = await req.json()

        console.log(form.name)
      
        const url = await fetch(`https://lovers.deno.dev/${form.name}`,{
            method: 'delete',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({password: form.password}),
        })
        if(!url){
            return new Response("Error fetching heroes", {status:500})
        }
        
        //return ctx.render("se ha eliminado");
        return url;
  
    }
  }

const Page = (props: PageProps) => {

    return(
        <body class="matar">
            <div>
            
            <DeleteForm/>
            
            </div>
        </body>
        
        
    )
}

export default Page;
