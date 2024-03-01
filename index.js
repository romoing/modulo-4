//import pc from "picocolors"
//importando dependencias usando common js

import pc from "picocolors"
import nombre from "./nombre"
import { suma, resta, PI } from "./operaciones"

const pc=require("picocolors")

console.log(

  pc.blue(`How are ${pc.italic(`you`)} doing?`)
)   

console.logs(suma(10, 5));
console.logs(resta(10, 5));  