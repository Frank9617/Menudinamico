require("colors");
const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "Que deseas hacer?",
    choices: [
      {
        value: "1",
        name: `${"1.red"}.Crear Tareas`,
      },
      {
        value: "2",
        name: `${"2.red"}.Listar Tareas`,
      },
      {
        value: "3",
        name: `${"3.red"}.Listar Tareas completadas`,
      },
      {
        value: "4",
        name: `${"4.red"}.Listar Tareas Pendientes`,
      },
      {
        value: "5",
        name: `${"5.red"}.Completar Tareas`,
      },
      {
        value: "6",
        name: `${"6.red"}.Borrar Tareas`,
      },
      {
        value: "7",
        name: `${"7.red"}.Salir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.log("********************".blue);
  console.log("   Seleccione una opcion".blue);
  console.log("********************".blue);

  let otp  = '';

  const opt = await prompt (preguntas).then (data =>{
    otp=data ['opcion']

  })
  return otp;
};





const pausa = async () => {
    const question =[
        {
            type: 'input',
            name: 'enter',
            message: `\nPresione ${'ENTER'.green} para continuar\n`
        }
    ]
    let pau = '';
    console.log('\n');
    await inquired.prompt(question).then(data => {
        pau = data['message']
    });
    return pau;

}
const leerInput = async () =>{
    const question = [
        {
        type: 'input',
        name: 'desc',
        message,
        validate(value){
            if (value-length === 0 ){
                return 'Por favor ingrese un valor'
            }
            return true;
        }
        }
    ]
}








module.exports ={
    inquirerMenu,
    pausa,
    leerInput
}