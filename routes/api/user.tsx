import { FreshContext, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext<unknown,string>) => {
    
        const u = new URL(req.url);
        const name = u.searchParams.get("name")

        const url = await fetch(`https://lovers.deno.dev/${name}`)

        if(!url){
            return new Response("Error fetching heroes", {status:500})
        }
        
        //return ctx.render("se ha eliminado");
        return url;
    
    }
}