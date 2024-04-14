import { FreshContext, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
    DELETE: async (req: Request, ctx: FreshContext<unknown,string>) => {
    
        const form = await req.json()
    
        console.log(form.user)
        console.log(form.password)
        console.log(form.name)
        
        const url = await fetch(`https://lovers.deno.dev/${form.name}/comment`,{
            method: 'delete',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                user: form.user,
                password: form.password,
                
            }),
        })
        if(!url){
            return new Response("Error fetching heroes", {status:500})
        }
        
        //return ctx.render("se ha eliminado");
        return url;
    
    }
    }