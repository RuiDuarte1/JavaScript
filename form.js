import inquirer from "inquirer";
import chalk from "chalk";

const formulario = [ 

    {
    type: 'input',
    name: 'nome',
    message: 'Digite o seu nome: '  
    },

    {
    type: 'number',
    name: 'idade',
    message: 'Digite sua idade'
    },

    {
    type: 'checkbox',
    name: 'sexo',
    message: 'Marque a opção do seu sexo: ',
    choices: ["Masculino", "Feminino"]    
    },

    {
    type: 'input',
    name: 'email',
    message: 'Digite seu e-mail: '  
    },

    {
    type: 'password',
    name: 'senha',
    message: 'Digite sua senha: '   
    },

    {
    type: 'input',
    name: 'profissao',
    message: 'Digite sua profissão: '
    },

    {
      type: 'checkbox',
      name: 'civil',
      message: 'Estado Civil:  ',
      choices: ["Solteiro", "Casado"]
      },

    {
      type: 'input',
      name: 'telefone',
      message: "Digite seu telefone: ",
      validate(value) {
      const pass = value.match(
        /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
      );
      if (pass) {
        return true;
      }
      return 'Insira um número de telefone válido';
    },
  },

];


inquirer.prompt(formulario).then(function(answers) {
  console.log("Nome: ", chalk.green(answers.nome));
  console.log("Idade: ", chalk.green(answers.idade));
  console.log("Sexo: ", answers.sexo);
  console.log("Email: ", chalk.green(answers.email));
  console.log("Senha: ", chalk.green(answers.senha));
  console.log("Profissão: ", chalk.green(answers.profissao));
  console.log("Estado civil: ", answers.civil);
  console.log('Telefone: ', chalk.green(answers.telefone));

})
.catch((error) => {
  if(error.isTtyError){
    console.log(chalk.orange('Não é possível executar o prompt'));
  }else{
    console.log(chalk.orange(error));
  }
});



