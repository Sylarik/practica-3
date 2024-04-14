import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import { Lover } from "../../types.ts";
import { Solteros } from "../../components/Solteros.tsx";
import { Soltero } from "../../components/Soltero.tsx";

export const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext<unknown,Lover>) => {
        try{
            const { name } = ctx.params;
            
            const url = await axios.get<Lover>(`https://lovers.deno.dev/${name}`);
            
            if(url.status !== 200) {
                throw new Error("Failed to fetch data");
            }
            
            return ctx.render(url.data);
        }catch(err){
            throw new Error(err);
        }
    }
}


const Page = (props: PageProps<Lover>) => {

    const lover = props.data;
    return (
        <body class="personaje">
            <div>
                <h1> ¡TU SOLTERO FAVORITO! </h1>
                <Soltero lover={lover}/>
            </div>
            
            
        </body>
    )

}

export default Page;