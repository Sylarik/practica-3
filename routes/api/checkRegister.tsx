import { FreshContext, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
    POST: async (req: Request, ctx: FreshContext<unknown,string>) => {
    
        const form = await req.json()

        console.log(form.password)
        console.log(form.name)
        
        const url = await fetch(`https://lovers.deno.dev/login`,{
            method: 'post',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                name: form.name,
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