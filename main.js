var gameData = {
  Money: 0,
  MoneyPerClick: 1,
  MoneyPerClickCost: 10,
  MoneyPerAreaCost: 100,
  MoneyPerHelperCost: 100,
}
var saveGameLoop = window.setInterval(function() {
  localStorage.setItem("LabyrinthToDominationSave", JSON.stringify(gameData))
}, 15000)

 var savegame = JSON.parse(localStorage.getItem("LabyrinthToDominationSave"))
if (savegame !== null) {
  gameData = savegame
}

function FindMoney() {
  gameData.Money += gameData.MoneyPerClick;
  document.getElementById("MoneyFound").innerHTML = gameData.Money + " Money Found";
}

function FindMoneyPerClick() {
  if (gameData.Money >= gameData.MoneyPerClickCost) {
    gameData.Money -= gameData.MoneyPerClickCost;
    gameData.MoneyPerClick += 1;
    gameData.MoneyPerClickCost *= 2;
    document.getElementById("MoneyFound").innerHTML = gameData.Money + " Money Found";
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Finding (Adds 1 Money Per Click) (Current MoneyPerClick: ) " + gameData.MoneyPerClick + ") Cost: " + gameData.MoneyPerClickCost + " Money";
  }
}
 function FindAreaPerClick () {
  if (gameData.Money >= gameData.MoneyPerAreaCost) {
    gameData.Money -= gameData.MoneyPerAreaCost;
    gameData.MoneyPerClick *= 2;
    gameData.MoneyPerAreaCost *= 3;
    document.getElementById("MoneyFound").innerHTML = gameData.Money + " Money Found";
    document.getElementById("perAreaUpgrade").innerHTML = "Upgrade Area Radius (Multiplies Money Per Click by 2) (Current MoneyPerClick: " + gameData.MoneyPerClick + ") Cost: " + gameData.MoneyPerAreaCost + " Money";
   }
}
function FindHelperPerClick () {
  if (gameData.Money >= gameData.MoneyPerHelperCost) {
    gameData.Money -= gameData.MoneyPerHelperCost;
    gameData.MoneyPerClick **= 2;
    gameData.MoneyPerHelperCost **= 3;
    document.getElementById("MoneyFound").innerHTML = gameData.Money + " Money Found";
  document.getElementById("perHelperUpgrade").innerHTML = "Upgrade Helpers  (Increase  Money Per Click Exponent by 1)  (Current MoneyPerClick:) Cost: 100 Money: " + gameData.MoneyPerClick + ") Cost: " + gameData.MoneyPerHelperCost + " Money";
   }
}
if(gameData.Money>=0) {
  document.getElementById("Money").style.display= "inline-block"
}

if(gameData.Money >= 5) {
    document.getElementById("perClickUpgrade").style.display = "inline-block" 
  }
if(gameData.Money >= 50) {
    document.getElementById("perAreaUpgrade").style.display = "inline-block" 
}
  if(gameData.Money >= 50000) {
    document.getElementById("perHelperUpgrade").style.display = "inline-block" 
  
      } 
 
  

