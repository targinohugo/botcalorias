var peso = 90
var altura = 179
var idade = 28
var sexo = "m"



  cal1 = 10 * (peso);
  cal2 = 6.25 * (altura);
  cal3 = 5 * (idade);
  
  if (sexo == "m") 

  basal = +5 + cal1 + cal2 - cal3;

  if (sexo == "f") 
  
  basal = -161 + cal1 + cal2 - cal3;


  console.log("Sua taxa metabólica basal é de", parseInt(basal), "calorias");
  console.log("Além da taxa metabólica basal, podemos considerar outros fatores, como por exemplo o nível de atividade");
  console.log("Classificação do fator de atividade:");
  console.log("Sedentatários:", parseInt(basal), "x 1,2","=",parseInt(basal*1.2) );
  console.log("Exercícios de 1 a 3 dias na semana:",parseInt(basal), "x 1,375","=",parseInt(basal*1.375) );
  console.log("Exercícios de 3 a 5 dias na semana:",parseInt(basal), "x 1,725","=",parseInt(basal*1.725) );
  console.log("Atletas:",parseInt(basal), "x 1,9","=",parseInt(basal*1.9) );
 

  

  

