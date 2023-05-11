import Termekek from "./Classes/Termekek.js";
import { adatLISTA } from "./adat.js";
import Asszinkron from "./Classes/Asszinkron.js"

$(function () {
    const asszinkron = new Asszinkron();
    asszinkron.adatbe("adat.json", beolvasas);
    
    
})
function beolvasas(adat){
    console.log(adat);
    console.log(adat.adatLISTA);
    new Termekek(adat.adatLISTA);
}