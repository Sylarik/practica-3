import { PageProps } from "$fresh/server.ts";


const layout = (props: PageProps) => {
    const Component = props.Component

    return (
        <>
        <div class="centrar">
            <div class="layout" >   
                <a href="/" style="text-decoration: none;"> PAGINA PRINCIPAL </a>
                <a href={`/addLover`} style="text-decoration: none;">AÑADIR SOLTERO</a>
                <a href={`/deleteLover`} style="text-decoration: none;" >ELIMINAR SOLTERO</a>
                <a href={`/login`} style="text-decoration: none;">LOGIN</a>
            </div>

            <div>
                <Component/>
            </div>

        </div>
        </>
    )

}

export default layout;