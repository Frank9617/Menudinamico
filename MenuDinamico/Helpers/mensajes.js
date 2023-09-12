require('colors');

const mostrarMenu =() =>{
    return new Promise (resolve =>{
        console.clear();
        console.log("********************".blue);
        console.log("   Seleccione una opcion".blue);
        console.log("********************".blue);
        console.log(`${'1.'.yellow}${' Crear Tareas'. green}`);
        console.log(`${'2.'.yellow}${' Listar Tareas'. green}`);
        console.log(`${'3.'.yellow}${' Listar Tareas completadas'. green}`);
        console.log(`${'4.'.yellow}${' Listar Tareas Pendientes'. green}`);
        console.log(`${'5.'.yellow}${' Completar Tareas'. green}`);
        console.log(`${'6.'.yellow}${' Borrar Tareas'. green}`);
        console.log(`${'7.'.yellow}${' Salir '. green}`);


    })
}











module.exports ={
    mostrarMenu,
}