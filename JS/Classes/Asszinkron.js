class Asszinkron{
    constructor(){}
    adatbe(vegpont, myCallback){

        fetch(vegpont,{
            method:"GET",
        })
        .then((response) => response.json())
        .then((data) => { 
            
            myCallback(data)
        })
        .catch((err) => console.log(err))
    }
}
export default Asszinkron;