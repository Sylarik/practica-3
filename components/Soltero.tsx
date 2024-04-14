import { FunctionComponent } from "preact";
import {Lover, Comment} from "../types.ts"
import AddComments from "../islands/AddComments.tsx";
import DeleteComments from "../islands/DeleteComments.tsx";

type LoverType = {
    lover: Lover;
};

export const Soltero: FunctionComponent<LoverType> = (props) => {
    const {name, age, sex, description, hobbies, photo, comments, password} = props.lover;
    return (
        <div class="cartilla">
            <p>{name}</p>
            <img src={photo} class="foto"></img>
            <p>Edad: {age}</p>
            <p>Sexo: {sex}</p>
            <p> DESCRIPCION: {description}</p>
            <p> HOBBIES: {hobbies}</p>
            <p>{comments.map((e) => {
                return (
                    <div>
                        <p>{e.user}:{e.message} </p>
                        
                    </div>
                )
            })}</p>

            <AddComments nombre={name}/>

            <DeleteComments nombre={name}/>
            
        </div>
        
    )
}