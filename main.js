addEventListener("DOMContentLoaded", async()=>{
    let peticion = await fetch("config.json");
    let json = await peticion.json();

    let h1 = document.createElement("H1");
    Object.assign(h1, json.h1[0].atributos);
    Object.assign(h1.style, json.h1[0].style);

    let h1Nombre = document.createElement("H1");
    Object.assign(h1Nombre, json.h1[1].atributos);
    Object.assign(h1Nombre.style, json.h1[1].style);
    
    // h1.insertAdjacentText("beforeend", "Titulo h1");
    document.body.insertAdjacentElement("beforeend", h1);
    document.body.insertAdjacentElement("beforeend", h1Nombre);
    console.log(h1);
    console.log(h1Nombre);
    
    
    // // Simplificar el codigo de arriba con un ciclo
    // for(let id of json.h1){
    //     let h1 = document.createElement("H1");
    //     Object.assign(h1, id.atributos);
    //     Object.assign(h1.style, id.style);
    //     document.body.insertAdjacentElement("beforeend", h1);
    //     console.log(h1);
    // }



    // // Insertar el archivo Normalize con javaScript
    // let peticionNormalize = await fetch("https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css");
    // let texto = await peticionNormalize.text();
    // let style = document.createElement("STYLE");

    // style.insertAdjacentText("beforeend", texto);
    // document.head.insertAdjacentElement("beforeend", style);
    // console.log(style);

})