import { FunctionComponent } from "preact";
import { Lover } from "../types.ts";
import { Soltero } from "./Soltero.tsx";

type SolterosType = {
  lista: Lover[];
};

export const Solteros: FunctionComponent<SolterosType> = (props) => {
  const { lista } = props;
  return (
    <>
      <div class="solteros">
        {lista.map((e) => {
          return (
            
              <div class="soltero">
                
                <img class="preview" src={e.photo}></img>
                <div class="titulo">
                  <p class="name">{e.name}</p>
                  <p>{e.age}</p>
                </div>
                <p class="description">{e.description}</p>

                <div class="botones">
                  <p class="boton-no"></p>
                  <a href={`/buscar/${e.name}`} class="boton-si"></a>
                </div>

              </div>
            
          );
        })}
      </div>
    </>
  );
};
