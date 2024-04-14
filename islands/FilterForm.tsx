import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { JSX } from "preact";
import {Comment, Lover} from "../types.ts"
import { Soltero } from "../components/Soltero.tsx";
import { Solteros } from "../components/Solteros.tsx";

type Lovers= {
  lovers: Lover[]
}



export const FilterForm: FunctionComponent<Lovers> = ({lovers}) => {

  //const {lovers} = props;

  const [error, setError] = useState<string>("");

    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<number>(0);
    const [sex, setSex] = useState<string>("");
    const [hobbies, setHobbies] = useState<string[]>([]);
    const [filteredList, setFilteredList] = useState<Lover[]>(lovers);
    //const [lista, setLista] = useState<Lover[]>([]);

    let listaFiltrada:Lover[] = lovers;
    
    
    const filtrar = () => {
        if (name) {
          listaFiltrada = listaFiltrada.filter(personaje => personaje.name.includes(name));
      }

      if (age > 0) {
          listaFiltrada = listaFiltrada.filter(personaje => personaje.age === age);
      }

      if (sex) {
          listaFiltrada = listaFiltrada.filter(personaje => personaje.sex === sex);
      }

      if (hobbies.length > 0 && hobbies[0] !== "") {
          listaFiltrada = listaFiltrada.filter(personaje => hobbies.some(hobby => personaje.hobbies.includes(hobby)));
      }
      console.log(listaFiltrada);
      setFilteredList(listaFiltrada);
    }   
    

  

  return (
    <div class="index">

      <div class="input-container">
        <h2> Filtrar </h2>
        <input type="text" name="nombre" placeholder="name" onBlur={(e) => setName(e.currentTarget.value)}></input>
        <input type="number" name="age" placeholder="age" onBlur={(e) => setAge(parseInt(e.currentTarget.value))}></input>
        <input type="text" name="sex" placeholder="sex" onBlur={(e) => setSex(e.currentTarget.value)}></input>
        <input type="text" name="hobbies" placeholder="hobbies" onBlur={(e) => setHobbies(e.currentTarget.value.split(","))}></input>    

        <button onClick={filtrar}> Filtrar  </button>

         
      </div>
        
      <div class="solteros-container">
        <Solteros lista={filteredList} />
      </div>

    </div>
  );
};

export default FilterForm;