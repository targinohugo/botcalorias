const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
 
process.env.DEBUG = 'dialogflow:debug';

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  function welcome(agent) {
    agent.add(`Welcome to my agent!`);
  }
 
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }

    function Calorias(agent) {
  	var cal = (agent.parameters.peso*10);
    var cal2 = (agent.parameters.altura*6.25);
    var cal3 = (agent.parameters.idade*5);
    var cal4 = (agent.parameters.sexo);
    var basal;
    
    if (agent.parameters.sexo == "m") 
    basal = cal+cal2-cal3+5;
    
    if (agent.parameters.sexo == "f") 
    basal = cal+cal2-cal3-161;

  \\eu só consegui executar isso, colocando o código abaixo em uma linha só, então tive que usar \n para pular as linhas
  agent.add("Sua taxa metabólica basal é de" + " " + parseInt(basal) + " " + "calorias" + " " + "  \n" +
            "Essa é, em média, a quantidade de calorias que seu corpo gasta simplesmente para sobreviver." + "  \n" + "  \n" +
            "Porém além da taxa metabólica basal, podemos considerar outros fatores, como por exemplo o nível de atividade." + "  \n" + "  \n" +
            "Dá uma olhada na tabela abaixo, e veja em qual nível você se classifica:" + "  \n" + "  \n" + 
            "Nível 1: Sedentários:" + " " + parseInt(basal) + "x1,2" + " " + "=" + " " + parseInt(basal*1.2) + " " + "calorias" + "  \n" +
            "Nível 2: Exercícios de 1 a 3 dias na semana:" + " " + parseInt(basal) + "x1,375" + " " + "="  + " " + parseInt(basal*1.375) + " " + "calorias" + "  \n" + 
            "Nível 3: Exercícios de 3 a 5 dias na semana:" + " " + parseInt(basal) + "x1,5" +  " " + "=" + " " + parseInt(basal*1.5) + " " + "calorias" + "  \n" + 
            "Nível 4: Exercícios de 6 a 7 dias na semana:" + " " + parseInt(basal) + "x1,75" + " " + "=" + " " + parseInt(basal*1.725) + " " + "calorias" + "  \n" + 
            "Nível 5: Atletas:" + " " + parseInt(basal) + "x1,9" + " " + "=" + " " + parseInt(basal*1.9) + " " + "calorias" + "  \n"  + "  \n" +
            "Caso você queira mais informações sobre como o cálculo foi realizado, digite 'detalhes' ");  

  }
  
  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('Calorias', Calorias);
  
  agent.handleRequest(intentMap);
});
